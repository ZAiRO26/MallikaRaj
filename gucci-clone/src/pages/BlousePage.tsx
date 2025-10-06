import React from 'react';
import { Link } from 'react-router-dom';

interface BlousePageProps {
  onBackClick: () => void;
}

const BlousePage: React.FC<BlousePageProps> = ({ onBackClick }) => {
  const blouseTypes = [
    {
      name: 'Stitched Blouse',
      path: '/blouse/stitched',
      description: 'Ready-to-wear blouses in various sizes and designs',
      image: '/Images/stitched-blouse.jpg',
      features: ['Ready to wear', 'Multiple sizes', 'Perfect fit', 'Quick delivery']
    },
    {
      name: 'Un Stitched Blouse',
      path: '/blouse/unstitched',
      description: 'Blouse pieces for custom tailoring to your measurements',
      image: '/Images/unstitched-blouse.jpg',
      features: ['Custom tailoring', 'Perfect measurements', 'Personal style', 'Premium fabrics']
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
            <h1 className="text-3xl font-bold text-gray-900">Blouse Collection</h1>
            <div className="w-20"></div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-rose-600 to-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Blouse Collection</h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Complete your saree look with our exquisite blouse collection
          </p>
        </div>
      </div>

      {/* Blouse Types Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {blouseTypes.map((blouse, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-10 bg-gray-200">
                <div className="w-full h-64 bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center">
                  <span className="text-rose-800 font-serif text-3xl">{blouse.name}</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{blouse.name}</h3>
                <p className="text-gray-600 mb-6 text-lg">{blouse.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Features:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {blouse.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <svg className="w-4 h-4 text-rose-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={blouse.path}
                  className="inline-flex items-center bg-rose-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-rose-700 transition-all duration-300 transform hover:scale-105"
                >
                  Explore {blouse.name}
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Information Section */}
      <div className="bg-rose-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Perfect Blouse for Every Saree</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you prefer ready-to-wear convenience or custom-tailored perfection, 
              we have the perfect blouse to complement your saree collection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Quality Fabrics</h4>
              <p className="text-gray-600">Premium materials that complement your sarees perfectly</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Expert Tailoring</h4>
              <p className="text-gray-600">Skilled craftsmen ensure perfect fit and finish</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Versatile Designs</h4>
              <p className="text-gray-600">From traditional to contemporary styles for every occasion</p>
            </div>
          </div>
        </div>
      </div>

      {/* Size Guide Section */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Need Help with Sizing?</h3>
          <p className="text-lg text-gray-600 mb-8">
            Our expert team is here to help you find the perfect fit. Contact us for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-rose-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-rose-700 transition-colors">
              Size Guide
            </button>
            <button className="border border-rose-600 text-rose-600 px-8 py-3 rounded-lg font-medium hover:bg-rose-50 transition-colors">
              Contact Expert
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlousePage;