import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import SideMenu from './SideMenu';
import ProductGrid from './components/Products/ProductGrid';
import ProductDetail from './components/Products/ProductDetail';
import CheckoutPage from './components/Checkout/CheckoutPage';
import AuthPage from './components/Auth/AuthPage';
import ProfilePage from './ProfilePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import MenPage from './MenPage';
import WomenPage from './WomenPage';
import ChildrenPage from './ChildrenPage';
import AdminDashboard from './components/Admin/AdminDashboard';
import OrderHistory from './components/Orders/OrderHistory';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import GenericPage from './GenericPage';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { WishlistProvider } from './context/WishlistContext';
import ScrollAnimationProvider from './components/ScrollAnimationProvider';

const genericPageTitles: { [key: string]: string } = {
  'new-in': 'New In',
  'handbags': 'Handbags',
  'travel': 'Travel',
  'jewelry-watches': 'Jewelry & Watches',
  'decor-lifestyle': 'Décor & Lifestyle',
  'fragrances-makeup': 'Fragrances & Make-Up',
  'gifts': 'Gifts',
  'services': 'RAANA Services',
  'world-of-raana': 'World of RAANA',
  'store-locator': 'Store Locator',
  'sign-in': 'Sign In',
  'my-orders': 'My Orders',
  'contact-us': 'Contact Us',
};

function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (page: string) => {
    setActivePage(page);
    window.scrollTo(0, 0);
  };

  const handleProductSelect = (product: any) => {
    setSelectedProductId(product._id);
    setActivePage('product');
    window.scrollTo(0, 0);
  };

  const renderHomePage = () => (
    <>
      <section 
        className="relative h-screen bg-cover bg-center section-transition fade-in-up"
        style={{ backgroundImage: "url('/NAOMI.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white observe-fade">
            <h1 className="hero-title mb-6 tracking-wider float">
              RAANA
            </h1>
            <p className="hero-subtitle mb-8 font-light tracking-wide fade-in-up animate-delay-200">
              A NEW ERA OF LUXURY
            </p>
            <a href="#featured-products" className="btn-luxury text-lg px-8 py-4 smooth-hover inline-block fade-in-up animate-delay-400">
              SHOP NOW
            </a>
          </div>
        </div>
      </section>

      <section 
        className="relative py-40 bg-cover bg-center section-transition observe-slide-left" 
        style={{ backgroundImage: "url('/raana-red.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 text-center text-white">
          <h2 className="luxury-heading mb-8 observe-scale">RAANA Lido</h2>
          <div className="flex justify-center space-x-6 observe-fade animate-delay-300">
            <button 
              onClick={() => handleNavClick('women')}
              className="btn-luxury-outline px-12 py-4 font-semibold tracking-widest smooth-hover"
            >
              FOR HER
            </button>
            <button 
              onClick={() => handleNavClick('men')}
              className="btn-luxury-outline px-12 py-4 font-semibold tracking-widest smooth-hover"
            >
              FOR HIM
            </button>
          </div>
        </div>
      </section>

      <section id="featured-products" className="py-20 bg-white section-transition anchor-link">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 observe-fade">
            <h2 className="section-title mb-4">FEATURED COLLECTIONS</h2>
            <p className="section-subtitle">Discover the latest in luxury fashion</p>
          </div>

          <div className="product-grid stagger-container">
            {[
              {
                name: "GG Marmont Bag",
                price: "$2,980",
                image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
              },
              {
                name: "Ace Sneakers",
                price: "$790",
                image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=712&q=80"
              },
              {
                name: "Dionysus Bag",
                price: "$3,200",
                image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=725&q=80"
              }
            ].map((product, index) => (
              <div
                key={index}
                className="product-card stagger-item scale-in smooth-hover gpu-accelerated"
              >
                <div className="product-image-container">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>
                <div className="product-content">
                  <h3 className="product-title">{product.name}</h3>
                  <p className="product-price">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="brand-story" className="py-20 bg-gray-50 section-transition anchor-link">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="observe-slide-right">
              <h2 className="section-title mb-6">THE RAANA STORY</h2>
              <p className="body-text mb-6 fade-in-up animate-delay-200">
                Founded in Florence in 1921, RAANA is one of the world's leading luxury fashion brands. 
                With its unique vision, innovative design approach, and distinctive craftsmanship, 
                RAANA has become a symbol of Italian excellence worldwide.
              </p>
              <p className="body-text mb-8 fade-in-up animate-delay-300">
                Today, under the creative direction of Alessandro Michele, RAANA continues to push 
                boundaries and redefine luxury for a new generation.
              </p>
              <a href="#brand-story" className="btn-luxury-outline smooth-hover inline-block fade-in-up animate-delay-400">
                LEARN MORE
              </a>
            </div>
            <div className="relative observe-slide-left">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="RAANA Store"
                className="w-full h-96 object-cover rounded-lg smooth-hover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );

  const renderContent = () => {
    if (activePage === 'home') {
      return renderHomePage();
    }
    if (activePage === 'women') {
      return <WomenPage onBackClick={() => handleNavClick('home')} />;
    }
    if (activePage === 'men') {
      return <MenPage onBackClick={() => handleNavClick('home')} />;
    }
    if (activePage === 'children') {
      return <ChildrenPage onBackClick={() => handleNavClick('home')} />;
    }
    if (activePage === 'products') {
      return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Products</h1>
          <ProductGrid onProductSelect={handleProductSelect} />
        </div>
      );
    }
    if (activePage === 'product' && selectedProductId) {
      return <ProductDetail productId={selectedProductId} onBackClick={() => handleNavClick('products')} />;
    }
    if (activePage === 'auth') {
      return <AuthPage />;
    }
    if (activePage === 'checkout') {
      return <CheckoutPage />;
    }
    if (activePage === 'admin') {
      return <AdminDashboard />;
    }
    if (activePage === 'about') {
      return <AboutPage onBackClick={() => handleNavClick('home')} />;
    }
    if (activePage === 'contact-us') {
      return <ContactPage onBackClick={() => handleNavClick('home')} />;
    }
    if (activePage === 'profile') {
      return <ProfilePage onBackClick={() => handleNavClick('home')} />;
    }
    if (activePage === 'my-orders') {
      return <OrderHistory />;
    }
    if (genericPageTitles[activePage]) {
      return <GenericPage title={genericPageTitles[activePage]} onBackClick={() => handleNavClick('home')} />;
    }
    return renderHomePage();
  };

  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <ScrollAnimationProvider>
              <div className="App">
                <SideMenu 
                   isOpen={isMenuOpen} 
                   onClose={() => setIsMenuOpen(false)} 
                   onNavigate={handleNavClick}
                 />
                <Header onNavigate={handleNavClick} activePage={activePage} />
                <main>
                  {renderContent()}
                </main>
                <Footer />
              </div>
            </ScrollAnimationProvider>
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
