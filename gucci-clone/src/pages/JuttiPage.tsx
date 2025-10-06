import React from 'react';
import { Link } from 'react-router-dom';

interface JuttiPageProps {
  onBackClick: () => void;
}

const JuttiPage: React.FC<JuttiPageProps> = ({ onBackClick }) => {
  const juttiStyles = [
    { name: 'Traditional Jutti', path: '/jutti/traditional', description: 'Classic handcrafted traditional juttis' },
    { name: 'Embroidered Jutti', path: '/jutti/embroidered', description: 'Beautifully embroidered designer juttis' },
    { name: 'Bridal Jutti', path: '/jutti/bridal', description: 'Elegant juttis perfect for weddings' },
    { name: 'Casual Jutti', path: '/jutti/casual', description: 'Comfortable juttis for everyday wear' },
    { name: 'Festive Jutti', path: '/jutti/festive', description: 'Colorful juttis for celebrations' },
    { name: 'Mojari', path: '/jutti/mojari', description: 'Traditional Rajasthani mojaris' }
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
            <h1 className="text-3xl font-bold text-gray-900">Jutti Collection</h1>
            <div className="w-20"></div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Jutti Collection</h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Step into tradition with our handcrafted jutti collection
          </p>
        </div>
      </div>

      {/* Jutti Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {juttiStyles.map((jutti, index) => (
            <Link
              key={index}
              to={jutti.path}
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="aspect-w-16 aspect-h-12 bg-gray-200">
                <div className="w-full h-56 bg-gradient-to-br from-red-100 to-pink-100 flex items-center justify-center">
                  <span className="text-red-800 font-serif text-xl text-center px-4">{jutti.name}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-700 transition-colors">
                  {jutti.name}
                </h3>
                <p className="text-gray-600 mb-4">{jutti.description}</p>
                <div className="flex items-center text-red-700 font-medium">
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

      {/* Heritage Section */}
      <div className="bg-red-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">The Art of Jutti Making</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the rich heritage and craftsmanship behind every pair of juttis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Design</h4>
              <p className="text-gray-600 text-sm">Traditional patterns and contemporary designs</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Cutting</h4>
              <p className="text-gray-600 text-sm">Precise cutting of premium leather and fabrics</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Embroidery</h4>
              <p className="text-gray-600 text-sm">Hand embroidery with intricate details</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">4</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Assembly</h4>
              <p className="text-gray-600 text-sm">Expert stitching and finishing touches</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Juttis?</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience comfort, style, and tradition in every step
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Handcrafted</h4>
              <p className="text-gray-600">Each pair is lovingly handcrafted by skilled artisans</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Comfortable</h4>
              <p className="text-gray-600">Designed for all-day comfort and easy wear</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Authentic</h4>
              <p className="text-gray-600">Traditional designs with authentic craftsmanship</p>
            </div>
          </div>
        </div>
      </div>

      {/* Size Guide Section */}
      <div className="bg-red-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Size Guide</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find your perfect fit with our comprehensive size guide
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-4 bg-red-600 text-white">
              <h4 className="text-lg font-bold">Jutti Size Chart</h4>
            </div>
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Indian Size</th>
                      <th className="text-left py-2">UK Size</th>
                      <th className="text-left py-2">US Size</th>
                      <th className="text-left py-2">Foot Length (cm)</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600">
                    <tr className="border-b">
                      <td className="py-2">4</td>
                      <td className="py-2">3</td>
                      <td className="py-2">5</td>
                      <td className="py-2">22.5</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">5</td>
                      <td className="py-2">4</td>
                      <td className="py-2">6</td>
                      <td className="py-2">23.5</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">6</td>
                      <td className="py-2">5</td>
                      <td className="py-2">7</td>
                      <td className="py-2">24.5</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">7</td>
                      <td className="py-2">6</td>
                      <td className="py-2">8</td>
                      <td className="py-2">25.5</td>
                    </tr>
                    <tr>
                      <td className="py-2">8</td>
                      <td className="py-2">7</td>
                      <td className="py-2">9</td>
                      <td className="py-2">26.5</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h5 className="font-bold text-gray-900 mb-2">How to Measure:</h5>
                <ol className="text-gray-600 text-sm space-y-1">
                  <li>1. Place your foot on a piece of paper</li>
                  <li>2. Mark the longest toe and heel</li>
                  <li>3. Measure the distance between marks</li>
                  <li>4. Add 0.5cm for comfort</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Care Instructions */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Care Instructions</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Keep your juttis looking beautiful with proper care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Daily Care</h4>
              <ul className="text-gray-600 space-y-2">
                <li>• Clean with soft, dry cloth</li>
                <li>• Remove dust after each use</li>
                <li>• Air dry naturally</li>
                <li>• Avoid direct sunlight</li>
                <li>• Store in dust bags</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Deep Cleaning</h4>
              <ul className="text-gray-600 space-y-2">
                <li>• Use leather cleaner for leather juttis</li>
                <li>• Gentle brush for embroidered areas</li>
                <li>• Professional cleaning when needed</li>
                <li>• Condition leather periodically</li>
                <li>• Avoid water on embroidery</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JuttiPage;