import React from 'react';
import { Link } from 'react-router-dom';

interface RozanaWearPageProps {
  onBackClick: () => void;
}

const RozanaWearPage: React.FC<RozanaWearPageProps> = ({ onBackClick }) => {
  const rozanaWearCategories = [
    { name: 'Casual Kurtis', path: '/rozana-wear/casual-kurtis', description: 'Comfortable kurtis for everyday wear' },
    { name: 'Cotton Suits', path: '/rozana-wear/cotton-suits', description: 'Soft cotton suits for daily comfort' },
    { name: 'Palazzo Sets', path: '/rozana-wear/palazzo-sets', description: 'Relaxed palazzo sets for home and casual outings' },
    { name: 'Leggings & Tops', path: '/rozana-wear/leggings-tops', description: 'Comfortable leggings with matching tops' },
    { name: 'House Dresses', path: '/rozana-wear/house-dresses', description: 'Comfortable dresses for home wear' },
    { name: 'Nightwear', path: '/rozana-wear/nightwear', description: 'Cozy nightwear for peaceful sleep' }
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
            <h1 className="text-3xl font-bold text-gray-900">Rozana Wear Collection</h1>
            <div className="w-20"></div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Rozana Wear Collection</h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Comfortable everyday wear that combines style with practicality
          </p>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rozanaWearCategories.map((category, index) => (
            <Link
              key={index}
              to={category.path}
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="aspect-w-16 aspect-h-12 bg-gray-200">
                <div className="w-full h-56 bg-gradient-to-br from-teal-100 to-cyan-100 flex items-center justify-center">
                  <span className="text-teal-800 font-serif text-xl text-center px-4">{category.name}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-700 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="flex items-center text-teal-700 font-medium">
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

      {/* Comfort Features */}
      <div className="bg-teal-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Designed for Daily Comfort</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every piece in our Rozana collection is crafted with your daily comfort in mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Soft Fabrics</h4>
              <p className="text-gray-600 text-sm">Gentle on skin with breathable natural fibers</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Easy Movement</h4>
              <p className="text-gray-600 text-sm">Relaxed fits that allow freedom of movement</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Easy Care</h4>
              <p className="text-gray-600 text-sm">Machine washable and low maintenance</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Affordable</h4>
              <p className="text-gray-600 text-sm">Quality everyday wear at budget-friendly prices</p>
            </div>
          </div>
        </div>
      </div>

      {/* Daily Styling Guide */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Daily Styling Made Easy</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple styling tips to look put-together in your everyday wear
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-100">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Morning Routine</h4>
              <p className="text-gray-600 text-sm mb-3">Start your day comfortably with soft cotton kurtis and palazzo sets.</p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Choose breathable fabrics</li>
                <li>• Opt for easy-to-wear styles</li>
                <li>• Add simple accessories</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border border-green-100">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Work from Home</h4>
              <p className="text-gray-600 text-sm mb-3">Stay comfortable yet presentable during video calls and home tasks.</p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Neat, comfortable tops</li>
                <li>• Coordinated sets</li>
                <li>• Minimal but polished look</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-100">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Evening Relaxation</h4>
              <p className="text-gray-600 text-sm mb-3">Unwind in cozy nightwear and comfortable house dresses.</p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Soft, loose-fitting clothes</li>
                <li>• Breathable nightwear</li>
                <li>• Comfortable loungewear</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Fabric Care */}
      <div className="bg-teal-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Easy Care Instructions</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Keep your daily wear fresh and lasting with these simple care tips
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Washing Guidelines</h4>
              <ul className="text-gray-600 space-y-2">
                <li>• Machine wash in cold water</li>
                <li>• Use mild detergent for colors</li>
                <li>• Separate darks and lights</li>
                <li>• Gentle cycle for delicate items</li>
                <li>• Avoid bleach and harsh chemicals</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Drying & Storage</h4>
              <ul className="text-gray-600 space-y-2">
                <li>• Air dry when possible</li>
                <li>• Low heat tumble dry if needed</li>
                <li>• Fold immediately to prevent wrinkles</li>
                <li>• Store in clean, dry wardrobe</li>
                <li>• Iron on medium heat if required</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Seasonal Recommendations */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Year-Round Comfort</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-lg p-6">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Summer</h4>
              <p className="text-gray-600 text-sm">Light cotton kurtis and breathable palazzo sets</p>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-teal-100 rounded-lg p-6">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Monsoon</h4>
              <p className="text-gray-600 text-sm">Quick-dry fabrics and comfortable fits</p>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-lg p-6">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Winter</h4>
              <p className="text-gray-600 text-sm">Layerable pieces and cozy nightwear</p>
            </div>
            <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg p-6">
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Spring</h4>
              <p className="text-gray-600 text-sm">Fresh colors and comfortable cotton blends</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RozanaWearPage;