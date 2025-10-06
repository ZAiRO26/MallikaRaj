import React from 'react';

interface CottonSuitsPageProps {
  onBackClick: () => void;
}

const CottonSuitsPage: React.FC<CottonSuitsPageProps> = ({ onBackClick }) => {
  const cottonSuitStyles = [
    { name: 'Casual Cotton Suits', description: 'Comfortable everyday wear in soft cotton' },
    { name: 'Printed Cotton Suits', description: 'Vibrant prints and patterns on pure cotton' },
    { name: 'Embroidered Cotton Suits', description: 'Elegant embroidery work on cotton fabric' },
    { name: 'Block Print Cotton Suits', description: 'Traditional block printing techniques' },
    { name: 'Handloom Cotton Suits', description: 'Handwoven cotton with authentic textures' },
    { name: 'Organic Cotton Suits', description: 'Eco-friendly organic cotton suits' }
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
              Back to Suits
            </button>
            <h1 className="text-3xl font-bold text-gray-900">Cotton Suits</h1>
            <div className="w-20"></div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Cotton Suits Collection</h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Breathable comfort meets timeless style in our cotton suit collection
          </p>
        </div>
      </div>

      {/* Styles Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cottonSuitStyles.map((style, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="aspect-w-16 aspect-h-12 bg-gray-200">
                <div className="w-full h-56 bg-gradient-to-br from-green-100 to-teal-100 flex items-center justify-center">
                  <span className="text-green-800 font-serif text-xl text-center px-4">{style.name}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                  {style.name}
                </h3>
                <p className="text-gray-600 mb-4">{style.description}</p>
                <div className="flex items-center text-green-700 font-medium">
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

      {/* Cotton Benefits */}
      <div className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Cotton Suits?</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the natural benefits of cotton fabric for your wardrobe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Breathable</h4>
              <p className="text-gray-600 text-sm">Natural fibers allow air circulation for all-day comfort</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Hypoallergenic</h4>
              <p className="text-gray-600 text-sm">Gentle on sensitive skin with natural properties</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Durable</h4>
              <p className="text-gray-600 text-sm">Strong fibers that withstand regular wear and washing</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Versatile</h4>
              <p className="text-gray-600 text-sm">Perfect for all seasons and various occasions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Styling Guide */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Cotton Suit Styling Guide</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Create versatile looks with your cotton suits for different occasions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-100">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Casual Day Out</h4>
              <p className="text-gray-600 text-sm mb-3">Light cotton suits with minimal accessories for comfort.</p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Simple printed or solid colors</li>
                <li>• Comfortable flats or sandals</li>
                <li>• Light dupatta or scarf</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border border-green-100">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Office Wear</h4>
              <p className="text-gray-600 text-sm mb-3">Professional cotton suits with structured silhouettes.</p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Solid colors or subtle prints</li>
                <li>• Closed-toe shoes</li>
                <li>• Minimal, elegant jewelry</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-100">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Festive Occasions</h4>
              <p className="text-gray-600 text-sm mb-3">Embroidered cotton suits with traditional accessories.</p>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Rich embroidery or embellishments</li>
                <li>• Traditional jewelry</li>
                <li>• Matching or contrasting dupatta</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Care Instructions */}
      <div className="bg-green-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Cotton Suit Care Guide</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Keep your cotton suits looking fresh and new with proper care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Washing Instructions</h4>
              <ul className="text-gray-600 space-y-2">
                <li>• Machine wash in cold or lukewarm water</li>
                <li>• Use mild detergent to preserve colors</li>
                <li>• Separate colors to prevent bleeding</li>
                <li>• Gentle cycle for embroidered pieces</li>
                <li>• Avoid bleach and harsh chemicals</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Drying & Ironing</h4>
              <ul className="text-gray-600 space-y-2">
                <li>• Air dry in shade to prevent fading</li>
                <li>• Avoid direct sunlight for colored pieces</li>
                <li>• Iron while slightly damp for best results</li>
                <li>• Use medium heat setting</li>
                <li>• Iron embroidered areas from reverse side</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Size Guide */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Cotton Suit Size Guide</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-green-100 to-teal-100 rounded-lg p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">XS (32-34)</h4>
              <p className="text-gray-600 text-sm">Bust: 32-34", Waist: 26-28"</p>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-teal-100 rounded-lg p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">S (36-38)</h4>
              <p className="text-gray-600 text-sm">Bust: 36-38", Waist: 30-32"</p>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-teal-100 rounded-lg p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">M (40-42)</h4>
              <p className="text-gray-600 text-sm">Bust: 40-42", Waist: 34-36"</p>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-teal-100 rounded-lg p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-2">L (44-46)</h4>
              <p className="text-gray-600 text-sm">Bust: 44-46", Waist: 38-40"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CottonSuitsPage;