import React from 'react';

interface BandhaniSareesPageProps {
  onBackClick: () => void;
}

const BandhaniSareesPage: React.FC<BandhaniSareesPageProps> = ({ onBackClick }) => {
  const bandhaniStyles = [
    { name: 'Traditional Bandhani', description: 'Classic tie-dye patterns in vibrant colors' },
    { name: 'Modern Bandhani', description: 'Contemporary designs with traditional techniques' },
    { name: 'Rajasthani Bandhani', description: 'Authentic Rajasthani style bandhani work' },
    { name: 'Gujarati Bandhani', description: 'Traditional Gujarati bandhani patterns' },
    { name: 'Silk Bandhani', description: 'Luxurious silk sarees with bandhani work' },
    { name: 'Cotton Bandhani', description: 'Comfortable cotton sarees with bandhani designs' }
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
              Back to Sarees
            </button>
            <h1 className="text-3xl font-bold text-gray-900">Bandhani Sarees</h1>
            <div className="w-20"></div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Bandhani Sarees Collection</h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Exquisite tie-dye artistry from the heart of Gujarat and Rajasthan
          </p>
        </div>
      </div>

      {/* Styles Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bandhaniStyles.map((style, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="aspect-w-16 aspect-h-12 bg-gray-200">
                <div className="w-full h-56 bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center">
                  <span className="text-red-800 font-serif text-xl text-center px-4">{style.name}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-700 transition-colors">
                  {style.name}
                </h3>
                <p className="text-gray-600 mb-4">{style.description}</p>
                <div className="flex items-center text-red-700 font-medium">
                  View Collection
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bandhani Art Information */}
      <div className="bg-red-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">The Art of Bandhani</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the ancient tie-dye technique that creates mesmerizing patterns
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2 text-center">Traditional Technique</h4>
              <p className="text-gray-600 text-sm text-center">Hand-tied knots create unique resist patterns before dyeing</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2 text-center">Natural Dyes</h4>
              <p className="text-gray-600 text-sm text-center">Vibrant colors from natural sources for lasting beauty</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2 text-center">Artisan Crafted</h4>
              <p className="text-gray-600 text-sm text-center">Each piece is lovingly handcrafted by skilled artisans</p>
            </div>
          </div>
        </div>
      </div>

      {/* Care Instructions */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Caring for Your Bandhani Saree</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Preserve the beauty and vibrancy of your bandhani saree with proper care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-red-50 rounded-lg p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Washing Guidelines</h4>
              <ul className="text-gray-600 space-y-2">
                <li>• Dry clean for best results</li>
                <li>• If hand washing, use cold water</li>
                <li>• Use mild detergent without bleach</li>
                <li>• Wash separately to prevent color bleeding</li>
                <li>• Avoid wringing or twisting the fabric</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-lg p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Storage Tips</h4>
              <ul className="text-gray-600 space-y-2">
                <li>• Store in a cool, dry place</li>
                <li>• Use cotton cloth for wrapping</li>
                <li>• Avoid plastic bags for long-term storage</li>
                <li>• Refold periodically to prevent permanent creases</li>
                <li>• Keep away from direct sunlight</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Styling Tips */}
      <div className="bg-gradient-to-r from-orange-100 to-red-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Styling Your Bandhani Saree</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Festive Occasions</h4>
              <p className="text-gray-600 text-sm">Pair with traditional gold jewelry and embellished blouses for celebrations</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Wedding Functions</h4>
              <p className="text-gray-600 text-sm">Choose rich colors with heavy jewelry and traditional accessories</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Cultural Events</h4>
              <p className="text-gray-600 text-sm">Opt for authentic regional styles with matching accessories</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BandhaniSareesPage;