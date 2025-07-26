import React from 'react';

interface AboutPageProps {
  onBackClick: () => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onBackClick }) => {
  return (
    <div className="pt-32 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pb-24">
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
        <h1 className="text-4xl font-serif text-gray-900 mb-6">About RAANA</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          A legacy of luxury, innovation, and timeless elegance
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Heritage</h2>
          <p className="text-gray-600 mb-4">
            Founded in Florence in 1921, RAANA has been at the forefront of luxury fashion for over a century. 
            What began as a small leather goods workshop has evolved into one of the world's most prestigious 
            fashion houses, synonymous with Italian craftsmanship and innovative design.
          </p>
          <p className="text-gray-600 mb-4">
            Our founder, Guccio Gucci, established the brand with a vision to create the finest leather goods 
            using traditional Italian techniques combined with contemporary design sensibilities. This philosophy 
            continues to guide our creative direction today.
          </p>
          <p className="text-gray-600">
            Throughout our history, RAANA has remained committed to excellence, pushing boundaries while 
            honoring our rich heritage and the skilled artisans who bring our vision to life.
          </p>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
            alt="RAANA Heritage"
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
            alt="RAANA Craftsmanship"
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Craftsmanship</h2>
          <p className="text-gray-600 mb-4">
            At RAANA, we believe that true luxury lies in the details. Every piece we create is the result of 
            generations of expertise, passed down from master artisans to their apprentices. Our workshops in 
            Italy continue to use traditional techniques alongside cutting-edge technology.
          </p>
          <p className="text-gray-600 mb-4">
            From the selection of the finest materials to the final stitch, every step in our production process 
            is carefully monitored to ensure the highest standards of quality. Our leather goods are handcrafted 
            by skilled artisans who have dedicated their lives to perfecting their craft.
          </p>
          <p className="text-gray-600">
            This commitment to craftsmanship is what sets RAANA apart and ensures that every piece we create 
            becomes a timeless treasure to be passed down through generations.
          </p>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Heritage</h3>
            <p className="text-gray-600">
              Honoring our rich history while embracing innovation and contemporary design.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Craftsmanship</h3>
            <p className="text-gray-600">
              Maintaining the highest standards of quality through traditional Italian techniques.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Innovation</h3>
            <p className="text-gray-600">
              Pushing creative boundaries while staying true to our core values and aesthetic.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 