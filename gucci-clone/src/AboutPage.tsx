import React from 'react';

interface AboutPageProps {
  onBackClick: () => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onBackClick }) => {
  return (
    <div className="page-container pt-32 pb-24 fade-in-up">
      <button
        onClick={onBackClick}
        className="nav-link mb-8 smooth-hover observe-fade"
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

      <div className="text-center mb-16 observe-fade">
        <h1 className="page-title mb-6">About RAANA</h1>
        <p className="hero-subtitle max-w-2xl mx-auto">
          A legacy of luxury, innovation, and timeless elegance
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div className="observe-slide-right">
          <h2 className="section-title mb-6">Our Heritage</h2>
          <p className="body-text mb-4 fade-in-up animate-delay-200">
            Founded in Florence in 1921, RAANA has been at the forefront of luxury fashion for over a century. 
            What began as a small leather goods workshop has evolved into one of the world's most prestigious 
            fashion houses, synonymous with Italian craftsmanship and innovative design.
          </p>
          <p className="body-text mb-4 fade-in-up animate-delay-300">
            Our founder, Guccio Gucci, established the brand with a vision to create the finest leather goods 
            using traditional Italian techniques combined with contemporary design sensibilities. This philosophy 
            continues to guide our creative direction today.
          </p>
          <p className="body-text fade-in-up animate-delay-400">
            Throughout our history, RAANA has remained committed to excellence, pushing boundaries while 
            honoring our rich heritage and the skilled artisans who bring our vision to life.
          </p>
        </div>
        <div className="relative observe-slide-left">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
            alt="RAANA Heritage"
            className="product-image rounded-lg smooth-hover"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div className="relative observe-slide-right">
          <img
            src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
            alt="RAANA Craftsmanship"
            className="product-image rounded-lg smooth-hover"
          />
        </div>
        <div className="observe-slide-left">
          <h2 className="section-title mb-6">Craftsmanship</h2>
          <p className="body-text mb-4 fade-in-up animate-delay-200">
            At RAANA, we believe that true luxury lies in the details. Every piece we create is the result of 
            generations of expertise, passed down from master artisans to their apprentices. Our workshops in 
            Italy continue to use traditional techniques alongside cutting-edge technology.
          </p>
          <p className="body-text mb-4 fade-in-up animate-delay-300">
            From the selection of the finest materials to the final stitch, every step in our production process 
            is carefully monitored to ensure the highest standards of quality. Our leather goods are handcrafted 
            by skilled artisans who have dedicated their lives to perfecting their craft.
          </p>
          <p className="body-text fade-in-up animate-delay-400">
            This commitment to craftsmanship is what sets RAANA apart and ensures that every piece we create 
            becomes a timeless treasure to be passed down through generations.
          </p>
        </div>
      </div>

      <div className="text-center observe-fade">
        <h2 className="section-title mb-6">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-container">
          <div className="stagger-item observe-scale">
            <h3 className="luxury-heading mb-3">Heritage</h3>
            <p className="body-text">
              Honoring our rich history while embracing innovation and contemporary design.
            </p>
          </div>
          <div className="stagger-item observe-scale animate-delay-200">
            <h3 className="luxury-heading mb-3">Craftsmanship</h3>
            <p className="body-text">
              Maintaining the highest standards of quality through traditional Italian techniques.
            </p>
          </div>
          <div className="stagger-item observe-scale animate-delay-400">
            <h3 className="luxury-heading mb-3">Innovation</h3>
            <p className="body-text">
              Pushing creative boundaries while staying true to our core values and aesthetic.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;