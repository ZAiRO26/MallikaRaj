import React, { useEffect, useState } from 'react';
import { productsAPI, reviewsAPI } from '../../utils/api';
import { waitlistAPI } from '../../utils/api';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';

interface ProductDetailProps {
  productId: string;
  onBackClick: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ productId, onBackClick }) => {
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [reviews, setReviews] = useState<any[]>([]);
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(5);
  const [submitting, setSubmitting] = useState(false);

  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [waitlistMessage, setWaitlistMessage] = useState('');

  const { addToCart } = useCart();
  const { user, isAuthenticated } = useAuth();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await productsAPI.getById(productId);
        setProduct(res.data);
      } catch (err) {
        setError('Failed to load product');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    const fetchReviews = async () => {
      try {
        const res = await reviewsAPI.getByProduct(productId);
        setReviews(res.data);
      } catch (err) {
        console.error('Failed to load reviews', err);
      }
    };

    fetchProduct();
    fetchReviews();
  }, [productId]);

  const handleAddToCart = () => {
    if (!product) return;
    addToCart(product, 1);
  };

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewText) return;
    try {
      setSubmitting(true);
      await reviewsAPI.createOrUpdate(productId, { rating, comment: reviewText });
      // Refresh reviews
      const res = await reviewsAPI.getByProduct(productId);
      setReviews(res.data);
      setReviewText('');
    } catch (err) {
      console.error('Failed to submit review', err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleWaitlist = async () => {
    if (!waitlistEmail) return;
    try {
      await waitlistAPI.subscribe(productId, waitlistEmail);
      setWaitlistMessage('You will be notified when the product is back in stock.');
    } catch (err) {
      console.error('Waitlist subscribe error', err);
      setWaitlistMessage('Failed to subscribe');
    }
  };

  const { wishlist, addToWishlist, removeFromWishlist } = require('../../context/WishlistContext').useWishlist();
  const inWishlist = wishlist?.some((p: any) => p._id === product?._id);

  const toggleWishlist = () => {
    if (!product) return;
    if (inWishlist) {
      removeFromWishlist(product._id);
    } else {
      addToWishlist(product._id);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[40vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black" />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="text-center py-20">
        <p className="text-red-600 mb-4">{error || 'Product not found'}</p>
        <button onClick={onBackClick} className="bg-black text-white px-4 py-2 rounded-md">Back</button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <button onClick={onBackClick} className="mb-6 text-gray-600 hover:text-black">&larr; Back to Products</button>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Images */}
        <div>
          <img src={product.images?.[0] || '/placeholder-product.jpg'} alt={product.name} className="w-full h-auto rounded-lg" />
        </div>
        {/* Details */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl text-gray-800 mb-4">${product.price}</p>
          {product.stock === 0 && (
            <p className="text-red-600 mb-4">Sold Out</p>
          )}
          <p className="text-gray-700 mb-6">{product.description}</p>
          {product.stock > 0 ? (
            <div className="flex space-x-4">
              <button onClick={handleAddToCart} className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors">Add to Cart</button>
              <button onClick={() => toggleWishlist()} className="border border-black text-black px-6 py-3 rounded-md hover:bg-gray-100 transition-colors">
                {inWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
              </button>
            </div>
            ) : (
              <div className="mt-4">
                <input type="email" value={waitlistEmail} onChange={(e) => setWaitlistEmail(e.target.value)} placeholder="Your email" className="border px-3 py-2 rounded-md mr-2" />
                <button onClick={handleWaitlist} className="bg-black text-white px-4 py-2 rounded-md">Notify Me</button>
                {waitlistMessage && <p className="text-green-600 mt-2">{waitlistMessage}</p>}
              </div>
            )}
        </div>
      </div>

      {/* Reviews */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
        {reviews.length === 0 && <p className="text-gray-500 mb-4">No reviews yet</p>}
        <ul className="space-y-4">
          {reviews.map((rev) => (
            <li key={rev._id} className="border p-4 rounded-md">
              <div className="flex items-center mb-2">
                <p className="font-medium mr-2">{rev.user?.name || 'Anonymous'}</p>
                <p className="text-yellow-500">{'★'.repeat(rev.rating)}{'☆'.repeat(5 - rev.rating)}</p>
              </div>
              <p className="text-gray-700">{rev.comment}</p>
            </li>
          ))}
        </ul>

        {isAuthenticated && (
          <form onSubmit={handleSubmitReview} className="mt-8 space-y-4 max-w-lg">
            <div>
              <label className="block mb-1 font-medium">Rating</label>
              <select value={rating} onChange={(e) => setRating(Number(e.target.value))} className="w-full border px-3 py-2 rounded-md">
                {[5,4,3,2,1].map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block mb-1 font-medium">Comment</label>
              <textarea value={reviewText} onChange={(e) => setReviewText(e.target.value)} className="w-full border px-3 py-2 rounded-md" rows={4} />
            </div>
            <button type="submit" disabled={submitting} className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 disabled:opacity-50">
              {submitting ? 'Submitting...' : 'Submit Review'}
            </button>
          </form>
        )}
      </section>
    </div>
  );
};

export default ProductDetail; 