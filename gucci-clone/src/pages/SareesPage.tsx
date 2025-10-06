import React from 'react';
import { Link } from 'react-router-dom';

interface SareesPageProps {
  onBackClick: () => void;
}

const SareesPage: React.FC<SareesPageProps> = ({ onBackClick }) => {
  const sareeTypes = [
    { name: 'Bandhani Pichwai Sari', path: '/sarees/bandhani-pichwai', description: 'Traditional Rajasthani artistry' },
    { name: 'Ajrakh Saris', path: '/sarees/ajrakh', description: 'Block-printed heritage designs' },
    { name: 'Metallic Linen Sari', path: '/sarees/metallic-linen', description: 'Contemporary elegance with metallic threads' },
    { name: 'Jamdani', path: '/sarees/jamdani', description: 'Bengali weaving tradition' },
    { name: 'Handwoven Saris (New)', path: '/sarees/handwoven', description: 'Latest handwoven collection', isNew: true },
    { name: 'Linen', path: '/sarees/linen', description: 'Comfortable and breathable' },
    { name: 'Tissue Linen Saris', path: '/sarees/tissue-linen', description: 'Luxurious tissue weave' },
    { name: 'Patola', path: '/sarees/patola', description: 'Double ikat silk sarees' },
    { name: 'Bandhani Saree', path: '/sarees/bandhani', description: 'Tie-dye traditional patterns' },
    { name: 'Kota', path: '/sarees/kota', description: 'Lightweight checkered weave' },
    { name: 'Cotton Sarees', path: '/sarees/cotton', description: 'Pure cotton comfort' },
    { name: 'Chiffon', path: '/sarees/chiffon', description: 'Flowing and graceful' },
    { name: 'Chanderi Saree', path: '/sarees/chanderi', description: 'Sheer elegance from Madhya Pradesh' },
    { name: 'Silk Saree', path: '/sarees/silk', description: 'Luxurious silk collection' },
    { name: 'Saree Bags', path: '/sarees/bags', description: 'Matching accessories' }
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
            <h1 className="text-3xl font-bold text-gray-900">Sarees Collection</h1>
            <div className="w-20"></div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Sarees Collection</h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Discover the timeless elegance of Indian sarees from across the subcontinent
          </p>
        </div>
      </div>

      {/* Sarees Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sareeTypes.map((saree, index) => (
            <Link
              key={index}
              to={saree.path}
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="aspect-w-16 aspect-h-12 bg-gray-200 relative">
                <div className="w-full h-48 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                  <span className="text-purple-800 font-serif text-lg text-center px-2">{saree.name}</span>
                </div>
                {saree.isNew && (
                  <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    NEW
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors line-clamp-2">
                  {saree.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{saree.description}</p>
                <div className="flex items-center text-purple-700 font-medium text-sm">
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
      <div className="bg-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">The Art of Saree Weaving</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Heritage Craftsmanship</h4>
              <p className="text-gray-600">Each saree tells a story of generations of skilled artisans</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Regional Diversity</h4>
              <p className="text-gray-600">From Bengal to Gujarat, explore India's rich textile heritage</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Timeless Elegance</h4>
              <p className="text-gray-600">Perfect for every occasion, from daily wear to grand celebrations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SareesPage;