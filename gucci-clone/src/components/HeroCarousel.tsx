import React, { useState, useEffect } from 'react';

interface CarouselSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonAction: () => void;
  backgroundImage: string;
  backgroundColor: string;
}

interface HeroCarouselProps {
  onNavigate: (page: string) => void;
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const slides: CarouselSlide[] = [
    {
      id: 1,
      title: "SIX YARDS OF PURE GRACE",
      subtitle: "Bandhani Pichwai Silk Saree",
      description: "Discover our exquisite collection of traditional Indian wear, crafted with love and heritage for every occasion.",
      buttonText: "SHOP SAREES",
      buttonAction: () => onNavigate('sarees'),
      backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjMiIGZpbGw9IiNGRkY1RjUiLz4KPC9zdmc+')",
      backgroundColor: "from-red-50 via-pink-50 to-orange-50"
    },
    {
      id: 2,
      title: "FESTIVE ELEGANCE",
      subtitle: "Tyohaar Collections",
      description: "Celebrate every festival with our specially curated collection of suits, sarees, and dupattas.",
      buttonText: "EXPLORE COLLECTIONS",
      buttonAction: () => onNavigate('tyohaar-collections'),
      backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik01MCA1TDU1IDIwSDcwTDU4LjMzIDMwTDYzLjMzIDQ1SDUwTDM2LjY3IDQ1TDQxLjY3IDMwTDMwIDIwSDQ1TDUwIDVaIiBmaWxsPSIjRkZGNUY1Ii8+Cjwvc3ZnPg==')",
      backgroundColor: "from-purple-50 via-indigo-50 to-blue-50"
    },
    {
      id: 3,
      title: "SUMMER COMFORT",
      subtitle: "Breathable Cotton Collection",
      description: "Stay cool and stylish with our summer collection featuring cotton suits, linen sarees, and palazzo sets.",
      buttonText: "SHOP SUMMER WEAR",
      buttonAction: () => onNavigate('summer-wear'),
      backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHg9IjIwIiB5PSIyMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiByeD0iNSIgZmlsbD0iI0ZGRjVGNSIvPgo8L3N2Zz4=')",
      backgroundColor: "from-green-50 via-teal-50 to-cyan-50"
    },
    {
      id: 4,
      title: "OFFICE ELEGANCE",
      subtitle: "Professional Wear Collection",
      description: "Make a statement at work with our sophisticated office wear collection designed for the modern woman.",
      buttonText: "SHOP OFFICE WEAR",
      buttonAction: () => onNavigate('office-wear'),
      backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0zMCAzMEg3MFY3MEgzMFYzMFoiIGZpbGw9IiNGRkY1RjUiLz4KPC9zdmc+')",
      backgroundColor: "from-gray-50 via-slate-50 to-zinc-50"
    },
    {
      id: 5,
      title: "DAILY COMFORT",
      subtitle: "Rozana Wear Collection",
      description: "Comfortable and stylish everyday wear that keeps you looking elegant from morning to night.",
      buttonText: "SHOP DAILY WEAR",
      buttonAction: () => onNavigate('rozana-wear'),
      backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxlbGxpcHNlIGN4PSI1MCIgY3k9IjUwIiByeD0iMzAiIHJ5PSIyMCIgZmlsbD0iI0ZGRjVGNSIvPgo8L3N2Zz4=')",
      backgroundColor: "from-amber-50 via-yellow-50 to-orange-50"
    }
  ];

  // Minimum swipe distance
  const minSwipeDistance = 50;

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Touch handlers for mobile swipe
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <section 
      className="relative h-screen overflow-hidden hero-carousel"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 slide-transition ${
              index === currentSlide
                ? 'opacity-100 translate-x-0'
                : index < currentSlide
                ? 'opacity-0 -translate-x-full'
                : 'opacity-0 translate-x-full'
            }`}
          >
            <div className={`h-full bg-gradient-to-br ${slide.backgroundColor} relative overflow-hidden`}>
              {/* Background Pattern */}
              <div 
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: slide.backgroundImage,
                  backgroundSize: '100px 100px',
                  backgroundRepeat: 'repeat'
                }}
              />
              
              {/* Decorative Elements - Hidden on mobile for better performance */}
              <div className="absolute top-20 left-10 w-32 h-32 border-2 border-red-300 rounded-full opacity-20 animate-pulse hidden lg:block"></div>
              <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-orange-300 rounded-full opacity-20 animate-pulse delay-1000 hidden lg:block"></div>
              <div className="absolute top-1/2 right-20 w-16 h-16 border-2 border-pink-300 rounded-full opacity-20 animate-pulse delay-2000 hidden lg:block"></div>

              {/* Content */}
              <div className="relative h-full flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-center lg:text-left space-y-4 lg:space-y-6 hero-content">
                      <div className="space-y-2">
                        <p className="text-xs sm:text-sm font-medium text-red-600 uppercase tracking-widest">
                          {slide.subtitle}
                        </p>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif text-gray-900 leading-tight">
                          {slide.title}
                        </h1>
                      </div>
                      
                      <p className="text-sm sm:text-base lg:text-lg text-gray-700 max-w-md mx-auto lg:mx-0 leading-relaxed">
                        {slide.description}
                      </p>
                      
                      <div className="pt-2 lg:pt-4">
                        <button
                          onClick={slide.buttonAction}
                          className="btn-primary inline-flex items-center px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 bg-red-700 text-white font-medium text-xs sm:text-sm uppercase tracking-widest hover:bg-red-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl focus-visible:focus"
                        >
                          {slide.buttonText}
                          <svg className="ml-2 w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Right Content - Visual Element - Hidden on mobile for better performance */}
                    <div className="relative hidden lg:block">
                      <div className="aspect-square max-w-md mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-br from-red-200 to-red-400 rounded-full opacity-20 animate-spin-slow"></div>
                        <div className="absolute inset-4 bg-gradient-to-br from-orange-200 to-orange-400 rounded-full opacity-30 animate-pulse"></div>
                        <div className="absolute inset-8 bg-gradient-to-br from-pink-200 to-pink-400 rounded-full opacity-40 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg mb-4">
                              <span className="text-2xl font-serif text-red-800">MR</span>
                            </div>
                            <p className="text-sm font-medium text-gray-800">MallikaRAJ</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Hidden on mobile, swipe gestures used instead */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10 hidden sm:block focus-visible:focus"
        aria-label="Previous slide"
      >
        <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10 hidden sm:block focus-visible:focus"
        aria-label="Next slide"
      >
        <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-16 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 focus-visible:focus ${
              index === currentSlide
                ? 'bg-red-600 scale-125'
                : 'bg-white/60 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div
          className="h-full bg-red-600 transition-all duration-300 ease-linear"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`
          }}
        />
      </div>

      {/* Mobile swipe indicator */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-gray-600 text-xs sm:hidden z-10">
        Swipe to navigate
      </div>

      {/* Auto-play toggle - Smaller on mobile */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-white/80 hover:bg-white text-gray-800 p-1.5 sm:p-2 rounded-full shadow-lg transition-all duration-300 z-10 focus-visible:focus"
        aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
      >
        {isAutoPlaying ? (
          <svg className="w-3 h-3 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
          </svg>
        ) : (
          <svg className="w-3 h-3 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>
    </section>
  );
};

export default HeroCarousel;