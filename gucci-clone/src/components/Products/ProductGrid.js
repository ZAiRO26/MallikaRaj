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
    <div className="page-container observe-fade">
      {usingFallback && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 mb-6">
          <p className="text-yellow-800 text-sm">
            📦 Showing sample products - Backend is being updated
          </p>
        </div>
      )}
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