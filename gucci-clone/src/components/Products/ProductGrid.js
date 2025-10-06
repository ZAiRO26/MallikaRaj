import React, { useState, useEffect } from 'react';
import { productsAPI } from '../../utils/api';
import ProductCard from './ProductCard';

// Fallback sample products for when backend is unavailable
const fallbackProducts = [
  {
    _id: '1',
    name: "RAANA GG Marmont Small Shoulder Bag",
    description: "The GG Marmont Small Shoulder Bag features the iconic GG logo and a chain shoulder strap. Crafted from soft matelassé leather with antique gold hardware.",
    price: 2980,
    images: ["/Images/luxury-handbag-1.svg"],
    category: "handbags",
    stock: 15,
    featured: true
  },
  {
    _id: '2',
    name: "RAANA Ace Embroidered Sneakers",
    description: "The Ace sneakers feature the iconic bee embroidery and are crafted from premium leather with a comfortable rubber sole.",
    price: 790,
    images: ["/Images/luxury-shoes-1.svg"],
    category: "shoes",
    stock: 25,
    featured: true
  },
  {
    _id: '3',
    name: "RAANA Silk Scarf with Flora Print",
    description: "Luxurious silk scarf featuring the signature flora print. Perfect accessory for any outfit.",
    price: 450,
    images: ["/Images/luxury-accessories-1.svg"],
    category: "accessories",
    stock: 30,
    featured: true
  },
  {
    _id: '4',
    name: "RAANA Leather Belt with Double G",
    description: "Premium leather belt with the iconic Double G buckle. Available in multiple colors.",
    price: 520,
    images: ["/Images/luxury-belt-1.svg"],
    category: "accessories",
    stock: 20,
    featured: true
  }
];

const ProductGrid = ({ onProductSelect }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [usingFallback, setUsingFallback] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await productsAPI.getAll();
        // Handle both response formats: direct array or { products, pagination }
        const productsData = response.data.products || response.data;
        if (productsData && productsData.length > 0) {
          setProducts(productsData);
        } else {
          // Use fallback if no products returned
          setProducts(fallbackProducts);
          setUsingFallback(true);
        }
      } catch (err) {
        console.error('Error fetching products:', err);
        // Use fallback products when API fails
        setProducts(fallbackProducts);
        setUsingFallback(true);
        setError('Using sample products - backend connection issue');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-black text-white py-12 md:py-16 lg:py-20">
        <div className="page-container">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
              Luxury Collection
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Discover our curated selection of premium products
            </p>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="page-container section-spacing">
        {/* Filter and Sort Bar - Mobile Optimized */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 md:mb-8">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4">
            <span className="text-sm font-medium text-gray-600">
              {products.length} Products
            </span>
            {usingFallback && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                Sample Products
              </span>
            )}
          </div>
          
          {/* Mobile-friendly sort dropdown */}
          <select className="smooth-focus border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white min-w-[140px]">
            <option>Sort by: Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest First</option>
          </select>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="product-grid">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="product-card">
                <div className="loading-skeleton aspect-square mb-4"></div>
                <div className="responsive-padding">
                  <div className="loading-skeleton h-4 mb-2"></div>
                  <div className="loading-skeleton h-3 mb-3"></div>
                  <div className="loading-skeleton h-5 w-20"></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error State */}
        {error && !usingFallback && (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <div className="text-red-500 text-5xl mb-4">⚠️</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Unable to Load Products
              </h3>
              <p className="text-gray-600 mb-4">
                We're having trouble connecting to our servers. Please try again later.
              </p>
              <button 
                onClick={() => window.location.reload()}
                className="btn-luxury"
              >
                Try Again
              </button>
            </div>
          </div>
        )}

        {/* Products Grid */}
        {!loading && products.length > 0 && (
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard key={product._id || product.id} product={product} />
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && products.length === 0 && (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="text-gray-400 text-6xl mb-4">🛍️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No Products Found
              </h3>
              <p className="text-gray-600">
                We couldn't find any products at the moment. Please check back later.
              </p>
            </div>
          </div>
        )}

        {/* Fallback Notice */}
        {usingFallback && (
          <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800">
                  Displaying Sample Products
                </h3>
                <div className="mt-1 text-sm text-yellow-700">
                  <p>We're currently experiencing connectivity issues with our product database. The products shown are samples to demonstrate the interface.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductGrid;