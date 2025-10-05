import React from 'react';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product, onSelect }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <div className="product-card cursor-pointer smooth-hover gpu-accelerated" onClick={() => onSelect && onSelect(product)}>
      <div className="product-image-container">
        <img
          src={product.images?.[0] || '/placeholder-product.jpg'}
          alt={product.name}
          className="product-image smooth-hover"
        />
      </div>
      <div className="product-content">
        <h3 className="product-title mb-2">{product.name}</h3>
        <p className="product-description mb-3 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <p className="product-price">${product.price}</p>
          <button
            onClick={handleAddToCart}
            className="btn-luxury smooth-hover"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;