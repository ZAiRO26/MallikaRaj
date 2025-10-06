import React from 'react';
import { Link } from 'react-router-dom';

interface TyohaarCollectionsPageProps {
  onBackClick: () => void;
}

const TyohaarCollectionsPage: React.FC<TyohaarCollectionsPageProps> = ({ onBackClick }) => {
  const collections = [
    {
      name: 'Suit',
      path: '/tyohaar/suit',
      image: '/Images/suit-collection.jpg',
      description: 'Elegant suits for festive occasions'
    },
    {
      name: 'Sarees',
      path: '/tyohaar/sarees',
      image: '/Images/saree-collection.jpg',
      description: 'Traditional sarees for celebrations'
    },
    {
      name: 'Dupatta',
      path: '/tyohaar/dupatta',
      image: '/Images/dupatta-collection.jpg',
      description: 'Beautiful dupattas to complete your look'
    }
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
            <h1 className="text-3xl font-bold text-gray-900">Tyohaar Collections</h1>
            <div className="w-20"></div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Tyohaar Collections</h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Celebrate every festival with our exquisite collection of traditional wear
          </p>
          <span className="inline-block bg-yellow-400 text-red-800 px-4 py-2 rounded-full text-sm font-bold mt-4">
            NEW
          </span>
        </div>
      </div>

      {/* Collections Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <Link
              key={index}
              to={collection.path}
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-w-16 aspect-h-12 bg-gray-200">
                <div className="w-full h-64 bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center">
                  <span className="text-red-800 font-serif text-2xl">{collection.name}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-700 transition-colors">
                  {collection.name}
                </h3>
                <p className="text-gray-600 mb-4">{collection.description}</p>
                <div className="flex items-center text-red-700 font-medium">
                  Explore Collection
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Section */}
      <div className="bg-red-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Tyohaar Collections?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Premium Quality</h4>
              <p className="text-gray-600">Handcrafted with finest materials and traditional techniques</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Authentic Designs</h4>
              <p className="text-gray-600">Traditional patterns with contemporary elegance</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Perfect for Festivals</h4>
              <p className="text-gray-600">Specially curated for all your celebratory moments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TyohaarCollectionsPage;