import React, { useState, useEffect } from 'react';
import { productsAPI } from '../../utils/api';
import ProductCard from './ProductCard';

const ProductGrid = ({ onProductSelect }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await productsAPI.getAll();
        // Handle both response formats: direct array or { products, pagination }
        const productsData = response.data.products || response.data;
        setProducts(productsData);
      } catch (err) {
        setError('Failed to load products');
        console.error('Error fetching products:', err);
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

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No products available</p>
      </div>
    );
  }

  return (
    <div className="page-container observe-fade">
      <div className="product-grid stagger-container">
        {products.map((product, index) => (
          <div key={product._id} className={`stagger-item observe-scale animate-delay-${Math.min(index * 100, 600)}`}>
            <ProductCard product={product} onSelect={onProductSelect} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;