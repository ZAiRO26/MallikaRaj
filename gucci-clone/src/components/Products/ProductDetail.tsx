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
  const { isAuthenticated } = useAuth();

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
    <div className="page-container py-12 fade-in-up">
      <button onClick={onBackClick} className="nav-link mb-6 smooth-hover observe-fade">&larr; Back to Products</button>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Images */}
        <div className="observe-slide-right">
          <img src={product.images?.[0] || '/placeholder-product.jpg'} alt={product.name} className="product-image rounded-lg smooth-hover" />
        </div>
        {/* Details */}
        <div className="observe-slide-left">
          <h1 className="page-title mb-4">{product.name}</h1>
          <p className="product-price-large mb-4 fade-in-up animate-delay-200">${product.price}</p>
          {product.stock === 0 && (
            <p className="text-red-600 mb-4 fade-in-up animate-delay-300">Sold Out</p>
          )}
          <p className="body-text mb-6 fade-in-up animate-delay-400">{product.description}</p>
          {product.stock > 0 ? (
            <div className="flex space-x-4 fade-in-up animate-delay-500">
              <button onClick={handleAddToCart} className="btn-luxury smooth-hover">Add to Cart</button>
              <button onClick={() => toggleWishlist()} className="btn-luxury-outline smooth-hover">
                {inWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
              </button>
            </div>
            ) : (
              <div className="mt-4 fade-in-up animate-delay-500">
                <input type="email" value={waitlistEmail} onChange={(e) => setWaitlistEmail(e.target.value)} placeholder="Your email" className="border px-3 py-2 rounded-md mr-2 smooth-focus" />
                <button onClick={handleWaitlist} className="btn-luxury smooth-hover">Notify Me</button>
                {waitlistMessage && <p className="text-green-600 mt-2">{waitlistMessage}</p>}
              </div>
            )}
        </div>
      </div>

      {/* Reviews */}
      <section className="mt-12 observe-fade">
        <h2 className="section-title mb-4">Reviews</h2>
        {reviews.length === 0 && <p className="body-text mb-4">No reviews yet</p>}
        <ul className="space-y-4 stagger-container">
          {reviews.map((rev, index) => (
            <li key={rev._id} className={`border p-4 rounded-md stagger-item observe-scale animate-delay-${Math.min(index * 100, 600)}`}>
              <div className="flex items-center mb-2">
                <p className="luxury-heading mr-2">{rev.user?.name || 'Anonymous'}</p>
                <p className="text-yellow-500">{'★'.repeat(rev.rating)}{'☆'.repeat(5 - rev.rating)}</p>
              </div>
              <p className="body-text">{rev.comment}</p>
            </li>
          ))}
        </ul>

        {isAuthenticated && (
          <form onSubmit={handleSubmitReview} className="mt-8 space-y-4 max-w-lg observe-slide-up">
            <div>
              <label className="block mb-1 luxury-heading">Rating</label>
              <select value={rating} onChange={(e) => setRating(Number(e.target.value))} className="w-full border px-3 py-2 rounded-md smooth-focus">
                {[5,4,3,2,1].map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block mb-1 luxury-heading">Comment</label>
              <textarea value={reviewText} onChange={(e) => setReviewText(e.target.value)} className="w-full border px-3 py-2 rounded-md smooth-focus" rows={4} />
            </div>
            <button type="submit" disabled={submitting} className="btn-luxury smooth-hover disabled:opacity-50">
              {submitting ? 'Submitting...' : 'Submit Review'}
            </button>
          </form>
        )}
      </section>
    </div>
  );
};

export default ProductDetail;