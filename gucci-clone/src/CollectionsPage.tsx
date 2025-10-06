import React from 'react';

interface CollectionsPageProps {
  onBackClick: () => void;
}

const CollectionsPage: React.FC<CollectionsPageProps> = ({ onBackClick }) => {
  const collections = [
    {
      id: 1,
      name: 'Spring Collection',
      description: 'Fresh and vibrant pieces for the new season',
      image: './raana-red.jpg',
      itemCount: 24
    },
    {
      id: 2,
      name: 'Luxury Essentials',
      description: 'Timeless pieces that define elegance',
      image: './NAOMI.jpg',
      itemCount: 18
    },
    {
      id: 3,
      name: 'Evening Wear',
      description: 'Sophisticated pieces for special occasions',
      image: './raana-red.jpg',
      itemCount: 12
    },
    {
      id: 4,
      name: 'Casual Chic',
      description: 'Effortless style for everyday luxury',
      image: './NAOMI.jpg',
      itemCount: 30
    }
  ];

  return (
    <div className="pt-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-24">
      <button
        onClick={onBackClick}
        className="flex items-center text-xs font-medium text-gray-700 hover:text-black mb-8 tracking-widest"
      >
        <svg
          className="w-4 h-4 mr-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
        BACK
      </button>

      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-light text-black mb-6 tracking-wider">
          COLLECTIONS
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our curated collections, each telling a unique story of luxury, craftsmanship, and timeless elegance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {collections.map((collection) => (
          <div key={collection.id} className="group cursor-pointer">
            <div className="relative overflow-hidden mb-6">
              <div className="aspect-[4/5] bg-gray-200">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-light mb-2">{collection.name}</h3>
                <p className="text-sm opacity-90 mb-2">{collection.description}</p>
                <p className="text-xs opacity-75">{collection.itemCount} items</p>
              </div>
            </div>
            <div className="text-center">
              <button className="border border-black px-8 py-3 text-sm font-medium hover:bg-black hover:text-white transition-colors duration-300 tracking-wider">
                EXPLORE COLLECTION
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Featured Section */}
      <div className="mt-24 text-center">
        <h2 className="text-3xl font-light mb-8">Why Choose Our Collections?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6">
            <div className="w-16 h-16 mx-auto mb-4 bg-black rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2">Curated Excellence</h3>
            <p className="text-gray-600">Each piece is carefully selected for its exceptional quality and timeless appeal.</p>
          </div>
          <div className="p-6">
            <div className="w-16 h-16 mx-auto mb-4 bg-black rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2">Storytelling</h3>
            <p className="text-gray-600">Every collection tells a story, inspired by art, culture, and contemporary life.</p>
          </div>
          <div className="p-6">
            <div className="w-16 h-16 mx-auto mb-4 bg-black rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium mb-2">Crafted with Love</h3>
            <p className="text-gray-600">Made with passion and attention to detail by skilled artisans worldwide.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionsPage;