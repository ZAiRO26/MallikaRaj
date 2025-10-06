import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import SideMenu from './SideMenu';
import ProductGrid from './components/Products/ProductGrid';
import ProductDetail from './components/Products/ProductDetail';
import CheckoutPage from './components/Checkout/CheckoutPage';
import AuthPage from './components/Auth/AuthPage';
import ProfilePage from './ProfilePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import CollectionsPage from './CollectionsPage';
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

// Main App Content Component
function AppContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (page: string) => {
    navigate(`/${page === 'home' ? '' : page}`);
    window.scrollTo(0, 0);
  };

  const handleProductSelect = (product: any) => {
    navigate(`/product/${product._id}`);
  };

  const getCurrentPage = () => {
    const path = location.pathname;
    if (path === '/') return 'home';
    if (path.startsWith('/product/')) return 'product';
    return path.substring(1);
  };

  const renderHomePage = () => (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('./NAOMI.jpg')`
          }}
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="hero-title mb-6">
            RAANA
          </h1>
          <p className="hero-subtitle mb-8 max-w-2xl mx-auto">
            Discover the epitome of luxury fashion and timeless elegance
          </p>
          <button 
            onClick={() => handleNavClick('products')}
            className="bg-white text-black px-8 py-3 text-lg font-medium hover:bg-gray-100 transition-colors duration-300 shadow-lg"
          >
            EXPLORE COLLECTION
          </button>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light text-center mb-16">Featured Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative group cursor-pointer" onClick={() => handleNavClick('women')}>
              <div className="aspect-[4/5] bg-gray-200 overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('./raana-red.jpg')`
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300" />
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-3xl font-light mb-2">Women</h3>
                <p className="text-lg opacity-90">Discover our latest collection</p>
              </div>
            </div>
            <div className="relative group cursor-pointer" onClick={() => handleNavClick('men')}>
              <div className="aspect-[4/5] bg-gray-200 overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('./NAOMI.jpg')`
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300" />
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-3xl font-light mb-2">Men</h3>
                <p className="text-lg opacity-90">Timeless sophistication</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-light mb-8">The RAANA Legacy</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Since our founding, RAANA has been synonymous with uncompromising quality, 
            innovative design, and timeless elegance. Each piece in our collection 
            represents the perfect fusion of traditional craftsmanship and contemporary style.
          </p>
          <button 
            onClick={() => handleNavClick('about')}
            className="border border-black px-8 py-3 text-lg font-medium hover:bg-black hover:text-white transition-colors duration-300"
          >
            LEARN MORE
          </button>
        </div>
      </section>
    </div>
  );

  return (
    <div className="App">
      <SideMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        onNavigate={handleNavClick}
      />
      <Header onNavigate={handleNavClick} activePage={getCurrentPage()} />
      <main>
        <Routes>
          <Route path="/" element={renderHomePage()} />
          <Route path="/women" element={<WomenPage onBackClick={() => handleNavClick('home')} />} />
          <Route path="/men" element={<MenPage onBackClick={() => handleNavClick('home')} />} />
          <Route path="/children" element={<ChildrenPage onBackClick={() => handleNavClick('home')} />} />
          <Route path="/products" element={
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Products</h1>
              <ProductGrid onProductSelect={handleProductSelect} />
            </div>
          } />
          <Route path="/product/:id" element={<ProductDetail productId={location.pathname.split('/')[2]} onBackClick={() => handleNavClick('products')} />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/about" element={<AboutPage onBackClick={() => handleNavClick('home')} />} />
          <Route path="/collections" element={<CollectionsPage onBackClick={() => handleNavClick('home')} />} />
          <Route path="/contact-us" element={<ContactPage onBackClick={() => handleNavClick('home')} />} />
          <Route path="/profile" element={<ProfilePage onBackClick={() => handleNavClick('home')} />} />
          <Route path="/my-orders" element={<OrderHistory />} />
          {Object.keys(genericPageTitles).map(key => (
            <Route 
              key={key} 
              path={`/${key}`} 
              element={<GenericPage title={genericPageTitles[key]} onBackClick={() => handleNavClick('home')} />} 
            />
          ))}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <ScrollAnimationProvider>
              <AppContent />
            </ScrollAnimationProvider>
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
