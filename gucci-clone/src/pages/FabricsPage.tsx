import React from 'react';
import { Link } from 'react-router-dom';

interface FabricsPageProps {
  onBackClick: () => void;
}

const FabricsPage: React.FC<FabricsPageProps> = ({ onBackClick }) => {
  const fabricTypes = [
    { name: 'Silk Fabric', path: '/fabrics/silk', description: 'Premium silk fabrics for elegant garments' }
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
            <h1 className="text-3xl font-bold text-gray-900">Fabric Collection</h1>
            <div className="w-20"></div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Premium Fabrics</h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Discover our collection of finest fabrics for your custom creations
          </p>
        </div>
      </div>

      {/* Fabrics Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fabricTypes.map((fabric, index) => (
            <Link
              key={index}
              to={fabric.path}
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="aspect-w-16 aspect-h-12 bg-gray-200">
                <div className="w-full h-56 bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                  <span className="text-amber-800 font-serif text-xl text-center px-4">{fabric.name}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-700 transition-colors">
                  {fabric.name}
                </h3>
                <p className="text-gray-600 mb-4">{fabric.description}</p>
                <div className="flex items-center text-amber-700 font-medium">
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

      {/* Fabric Quality Section */}
      <div className="bg-amber-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Fabric Standards</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every fabric in our collection meets the highest standards of quality and craftsmanship
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Quality Tested</h4>
              <p className="text-gray-600 text-sm">Rigorous quality control ensures premium standards</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Fair Pricing</h4>
              <p className="text-gray-600 text-sm">Competitive prices without compromising quality</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Global Sourcing</h4>
              <p className="text-gray-600 text-sm">Sourced from the finest mills worldwide</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Sustainable</h4>
              <p className="text-gray-600 text-sm">Eco-friendly and ethically sourced materials</p>
            </div>
          </div>
        </div>
      </div>

      {/* Fabric Care Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Fabric Care Guide</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proper care ensures your fabrics maintain their beauty and longevity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Pre-Treatment</h4>
              <ul className="text-gray-600 space-y-2">
                <li>• Check fabric composition</li>
                <li>• Test for colorfastness</li>
                <li>• Pre-shrink if necessary</li>
                <li>• Iron before cutting</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Cleaning</h4>
              <ul className="text-gray-600 space-y-2">
                <li>• Follow care label instructions</li>
                <li>• Use appropriate detergents</li>
                <li>• Avoid harsh chemicals</li>
                <li>• Gentle wash cycles</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Storage</h4>
              <ul className="text-gray-600 space-y-2">
                <li>• Store in cool, dry place</li>
                <li>• Avoid direct sunlight</li>
                <li>• Use breathable storage</li>
                <li>• Fold or roll properly</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Services Section */}
      <div className="bg-amber-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Custom Fabric Services</h3>
          <p className="text-xl text-gray-600 mb-8">
            Need something specific? We offer custom fabric sourcing and consultation services
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Custom Sourcing</h4>
              <p className="text-gray-600 mb-4">Can't find what you're looking for? We'll source it for you.</p>
              <button className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors">
                Request Quote
              </button>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Fabric Consultation</h4>
              <p className="text-gray-600 mb-4">Expert advice on fabric selection for your project.</p>
              <button className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors">
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FabricsPage;