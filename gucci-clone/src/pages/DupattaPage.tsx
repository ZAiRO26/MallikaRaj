import React from 'react';
import { Link } from 'react-router-dom';

interface DupattaPageProps {
  onBackClick: () => void;
}

const DupattaPage: React.FC<DupattaPageProps> = ({ onBackClick }) => {
  const dupattaTypes = [
    { name: 'Cotton', path: '/dupatta/cotton', description: 'Soft and breathable cotton dupattas' },
    { name: 'Kota', path: '/dupatta/kota', description: 'Lightweight checkered Kota dupattas' },
    { name: 'Patola', path: '/dupatta/patola', description: 'Luxurious double ikat dupattas' },
    { name: 'Ajrakh Dupatta', path: '/dupatta/ajrakh', description: 'Traditional block-printed designs' },
    { name: 'Silk', path: '/dupatta/silk', description: 'Elegant silk dupattas for special occasions' },
    { name: 'Bandhani Dupatta', path: '/dupatta/bandhani', description: 'Colorful tie-dye patterns from Rajasthan' }
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
            <h1 className="text-3xl font-bold text-gray-900">Dupatta Collection</h1>
            <div className="w-20"></div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Dupatta Collection</h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Complete your ethnic ensemble with our exquisite dupatta collection
          </p>
        </div>
      </div>

      {/* Dupattas Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dupattaTypes.map((dupatta, index) => (
            <Link
              key={index}
              to={dupatta.path}
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="aspect-w-16 aspect-h-12 bg-gray-200">
                <div className="w-full h-56 bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center">
                  <span className="text-emerald-800 font-serif text-xl text-center px-4">{dupatta.name}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">
                  {dupatta.name}
                </h3>
                <p className="text-gray-600 mb-4">{dupatta.description}</p>
                <div className="flex items-center text-emerald-700 font-medium">
                  View Collection
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Styling Tips Section */}
      <div className="bg-emerald-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Styling Your Dupatta</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover different ways to drape and style your dupatta for various occasions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Classic Drape</h4>
              <p className="text-gray-600 text-sm">Traditional over-the-shoulder style for formal occasions</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Front Drape</h4>
              <p className="text-gray-600 text-sm">Modern front-facing style for contemporary looks</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Side Drape</h4>
              <p className="text-gray-600 text-sm">Elegant side styling for special events</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">4</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Scarf Style</h4>
              <p className="text-gray-600 text-sm">Casual neck wrap for everyday wear</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Our Dupattas?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Premium Quality</h4>
              <p className="text-gray-600">Finest fabrics and superior craftsmanship in every piece</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Versatile Designs</h4>
              <p className="text-gray-600">Perfect complement to any suit or ethnic outfit</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Authentic Artistry</h4>
              <p className="text-gray-600">Traditional techniques passed down through generations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DupattaPage;