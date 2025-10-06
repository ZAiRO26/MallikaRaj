import React from 'react';
import { Link } from 'react-router-dom';

interface OfficeWearPageProps {
  onBackClick: () => void;
}

const OfficeWearPage: React.FC<OfficeWearPageProps> = ({ onBackClick }) => {
  const officeWearCategories = [
    { name: 'Formal Suits', path: '/office-wear/formal-suits', description: 'Professional suits for corporate settings' },
    { name: 'Blazers', path: '/office-wear/blazers', description: 'Elegant blazers for business meetings' },
    { name: 'Formal Sarees', path: '/office-wear/formal-sarees', description: 'Sophisticated sarees for office wear' },
    { name: 'Shirts & Blouses', path: '/office-wear/shirts-blouses', description: 'Crisp shirts and professional blouses' },
    { name: 'Trousers', path: '/office-wear/trousers', description: 'Comfortable and stylish office trousers' },
    { name: 'Accessories', path: '/office-wear/accessories', description: 'Professional accessories to complete your look' }
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
              Back to Collections
            </button>
            <h1 className="text-3xl font-bold text-gray-900">Office Wear Collection</h1>
            <div className="w-20"></div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-600 to-gray-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Office Wear Collection</h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Professional attire that combines style, comfort, and confidence
          </p>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {officeWearCategories.map((category, index) => (
            <Link
              key={index}
              to={category.path}
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="aspect-w-16 aspect-h-12 bg-gray-200">
                <div className="w-full h-56 bg-gradient-to-br from-slate-100 to-gray-100 flex items-center justify-center">
                  <span className="text-slate-800 font-serif text-xl text-center px-4">{category.name}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-slate-700 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="flex items-center text-slate-700 font-medium">
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

      {/* Professional Style Guide */}
      <div className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Professional Styling Tips</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master the art of professional dressing with our expert styling guide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Perfect Fit</h4>
              <p className="text-gray-600 text-sm">Well-fitted clothes create a polished, professional appearance</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Color Coordination</h4>
              <p className="text-gray-600 text-sm">Neutral colors and subtle patterns for versatile styling</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Timeless Pieces</h4>
              <p className="text-gray-600 text-sm">Invest in classic pieces that never go out of style</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Quality Fabrics</h4>
              <p className="text-gray-600 text-sm">Premium fabrics ensure comfort throughout the workday</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Our Office Wear?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Professional Quality</h4>
              <p className="text-gray-600">Meticulously crafted for the modern professional</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Comfort First</h4>
              <p className="text-gray-600">All-day comfort without compromising on style</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Confidence Boost</h4>
              <p className="text-gray-600">Look and feel confident in every meeting</p>
            </div>
          </div>
        </div>
      </div>

      {/* Dress Code Guide */}
      <div className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Office Dress Code Guide</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Navigate different office environments with confidence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Formal Business</h4>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Dark colored suits</li>
                <li>• Conservative blouses</li>
                <li>• Closed-toe shoes</li>
                <li>• Minimal jewelry</li>
                <li>• Professional hairstyles</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Business Casual</h4>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Blazers with trousers</li>
                <li>• Dress shirts or blouses</li>
                <li>• Knee-length skirts</li>
                <li>• Loafers or low heels</li>
                <li>• Subtle patterns allowed</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Smart Casual</h4>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Cardigans or light blazers</li>
                <li>• Dress pants or chinos</li>
                <li>• Polo shirts or blouses</li>
                <li>• Comfortable flats</li>
                <li>• More color flexibility</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeWearPage;