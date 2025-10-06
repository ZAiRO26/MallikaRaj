import React from 'react';
import { Link } from 'react-router-dom';

interface SummerWearPageProps {
  onBackClick: () => void;
}

const SummerWearPage: React.FC<SummerWearPageProps> = ({ onBackClick }) => {
  const summerWearCategories = [
    { name: 'Cotton Suits', path: '/summer-wear/cotton-suits', description: 'Breathable cotton suits for hot weather' },
    { name: 'Linen Collection', path: '/summer-wear/linen', description: 'Lightweight linen pieces for ultimate comfort' },
    { name: 'Summer Sarees', path: '/summer-wear/sarees', description: 'Light and airy sarees perfect for summer' },
    { name: 'Kurtis', path: '/summer-wear/kurtis', description: 'Comfortable kurtis for casual summer days' },
    { name: 'Palazzo Sets', path: '/summer-wear/palazzo-sets', description: 'Flowy palazzo sets for relaxed styling' },
    { name: 'Summer Accessories', path: '/summer-wear/accessories', description: 'Light accessories to complete your summer look' }
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
            <h1 className="text-3xl font-bold text-gray-900">Summer Wear Collection</h1>
            <div className="w-20"></div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Summer Wear Collection</h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Stay cool and stylish with our breathable summer collection
          </p>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {summerWearCategories.map((category, index) => (
            <Link
              key={index}
              to={category.path}
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="aspect-w-16 aspect-h-12 bg-gray-200">
                <div className="w-full h-56 bg-gradient-to-br from-orange-100 to-yellow-100 flex items-center justify-center">
                  <span className="text-orange-800 font-serif text-xl text-center px-4">{category.name}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-700 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="flex items-center text-orange-700 font-medium">
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

      {/* Summer Styling Tips */}
      <div className="bg-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Summer Styling Tips</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beat the heat while looking effortlessly chic with these summer styling secrets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Light Colors</h4>
              <p className="text-gray-600 text-sm">Choose light, pastel colors that reflect heat and keep you cool</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Breathable Fabrics</h4>
              <p className="text-gray-600 text-sm">Opt for natural fabrics like cotton and linen for better airflow</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Loose Fit</h4>
              <p className="text-gray-600 text-sm">Choose relaxed, flowy silhouettes for better air circulation</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Minimal Layers</h4>
              <p className="text-gray-600 text-sm">Keep layering to a minimum and choose lightweight accessories</p>
            </div>
          </div>
        </div>
      </div>

      {/* Fabric Guide */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Best Summer Fabrics</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the most comfortable fabrics for hot weather
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6 border border-blue-100">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Cotton</h4>
              <p className="text-gray-600 text-sm mb-3">Natural, breathable, and moisture-absorbing. Perfect for everyday summer wear.</p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Highly breathable</li>
                <li>• Easy to wash</li>
                <li>• Comfortable against skin</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border border-green-100">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Linen</h4>
              <p className="text-gray-600 text-sm mb-3">Lightweight and airy with excellent temperature regulation properties.</p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Exceptional breathability</li>
                <li>• Natural cooling effect</li>
                <li>• Elegant drape</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg p-6 border border-purple-100">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Chiffon</h4>
              <p className="text-gray-600 text-sm mb-3">Sheer and lightweight, perfect for elegant summer occasions.</p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Ultra-lightweight</li>
                <li>• Flowing movement</li>
                <li>• Elegant appearance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Summer Care Tips */}
      <div className="bg-orange-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Summer Garment Care</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Keep your summer clothes fresh and lasting longer with proper care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Washing Tips</h4>
              <ul className="text-gray-600 space-y-2">
                <li>• Wash in cool water to prevent shrinking</li>
                <li>• Use gentle detergents for delicate fabrics</li>
                <li>• Separate light and dark colors</li>
                <li>• Turn garments inside out before washing</li>
                <li>• Avoid overloading the washing machine</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Drying & Storage</h4>
              <ul className="text-gray-600 space-y-2">
                <li>• Air dry in shade to prevent fading</li>
                <li>• Avoid direct sunlight for colored fabrics</li>
                <li>• Store in breathable garment bags</li>
                <li>• Use cedar blocks to prevent moths</li>
                <li>• Iron on low heat settings</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Summer Occasions */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Perfect for Summer Occasions</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-lg p-6">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Beach Vacations</h4>
              <p className="text-gray-600 text-sm">Light cover-ups and breezy dresses</p>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-teal-100 rounded-lg p-6">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Office Wear</h4>
              <p className="text-gray-600 text-sm">Professional yet comfortable attire</p>
            </div>
            <div className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-lg p-6">
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Garden Parties</h4>
              <p className="text-gray-600 text-sm">Elegant florals and flowing silhouettes</p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg p-6">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Casual Outings</h4>
              <p className="text-gray-600 text-sm">Comfortable everyday summer styles</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummerWearPage;