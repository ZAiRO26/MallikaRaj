import React from 'react';
import { Link } from 'react-router-dom';

interface SuitPageProps {
  onBackClick: () => void;
}

const SuitPage: React.FC<SuitPageProps> = ({ onBackClick }) => {
  const suitTypes = [
    { name: 'Cotton', path: '/suit/cotton', description: 'Comfortable cotton suits for daily wear' },
    { name: 'Ajrakh', path: '/suit/ajrakh', description: 'Traditional block-printed suits' },
    { name: 'Linen Suit', path: '/suit/linen', description: 'Breathable linen for summer comfort' },
    { name: 'Patola Suit', path: '/suit/patola', description: 'Luxurious double ikat suits' },
    { name: 'Silk Suit', path: '/suit/silk', description: 'Elegant silk suits for special occasions' },
    { name: 'Jamdani', path: '/suit/jamdani', description: 'Handwoven Jamdani suits' },
    { name: 'Chanderi Silk Suit', path: '/suit/chanderi-silk', description: 'Sheer elegance of Chanderi silk' },
    { name: 'Bandhani', path: '/suit/bandhani', description: 'Colorful tie-dye patterns' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <button
              onClick={onBackClick}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </button>
            <h1 className="text-3xl font-bold text-gray-900">Suit Collection</h1>
            <div className="w-20"></div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Suit Collection</h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Elegant suits crafted with traditional techniques and contemporary designs
          </p>
        </div>
      </div>

      {/* Suits Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {suitTypes.map((suit, index) => (
            <Link
              key={index}
              to={suit.path}
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="aspect-w-16 aspect-h-12 bg-gray-200">
                <div className="w-full h-48 bg-gradient-to-br from-indigo-100 to-blue-100 flex items-center justify-center">
                  <span className="text-indigo-800 font-serif text-lg text-center px-2">{suit.name}</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-700 transition-colors">
                  {suit.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{suit.description}</p>
                <div className="flex items-center text-indigo-700 font-medium text-sm">
                  View Collection
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Section */}
      <div className="bg-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Our Suits?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Premium Fabrics</h4>
              <p className="text-gray-600">Carefully selected materials for comfort and durability</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Traditional Craftsmanship</h4>
              <p className="text-gray-600">Handcrafted by skilled artisans using age-old techniques</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Versatile Styles</h4>
              <p className="text-gray-600">Perfect for both casual and formal occasions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuitPage;