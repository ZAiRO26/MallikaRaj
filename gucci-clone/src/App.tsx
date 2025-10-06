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
import TyohaarCollectionsPage from './pages/TyohaarCollectionsPage';
import SareesPage from './pages/SareesPage';
import BlousePage from './pages/BlousePage';
import SuitPage from './pages/SuitPage';
import DupattaPage from './pages/DupattaPage';
import StolePage from './pages/StolePage';
import FabricsPage from './pages/FabricsPage';
import JewelleryPage from './pages/JewelleryPage';
import JuttiPage from './pages/JuttiPage';
import OfficeWearPage from './pages/OfficeWearPage';
import SummerWearPage from './pages/SummerWearPage';
import RozanaWearPage from './pages/RozanaWearPage';
import BandhaniSareesPage from './pages/BandhaniSareesPage';
import CottonSuitsPage from './pages/CottonSuitsPage';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { WishlistProvider } from './context/WishlistContext';
import ScrollAnimationProvider from './components/ScrollAnimationProvider';
import HeroCarousel from './components/HeroCarousel';

const genericPageTitles: { [key: string]: string } = {
  'new-in': 'New In',
  'handbags': 'Handbags',
  'travel': 'Travel',
  'jewelry-watches': 'Jewelry & Watches',
  'decor-lifestyle': 'Décor & Lifestyle',
  'fragrances-makeup': 'Fragrances & Make-Up',
  'gifts': 'Gifts',
  'services': 'MallikaRAJ Services',
    'world-of-raana': 'World of MallikaRAJ',
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
      {/* Promotional Banner */}
      <div className="bg-red-700 text-white text-center py-2 px-4 relative">
        <button 
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-200 transition-colors"
          onClick={() => {}}
          aria-label="Previous promotion"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <p className="text-sm font-medium">Get flat 5% off on order above Rs 2500/- use code WEAVEKALA5</p>
        <button 
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-200 transition-colors"
          onClick={() => {}}
          aria-label="Close promotion"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Hero Carousel */}
      <HeroCarousel onNavigate={handleNavClick} />

      {/* Featured Collections */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-serif text-center text-red-800 mb-4">FEATURED COLLECTIONS</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Explore our handpicked selection of traditional Indian wear, each piece telling a story of heritage and craftsmanship.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="group cursor-pointer card-hover" onClick={() => handleNavClick('sarees')}>
              <div className="bg-red-50 rounded-lg overflow-hidden">
                <div className="aspect-[3/4] bg-gradient-to-br from-red-200 to-red-300 flex items-center justify-center">
                  <span className="text-red-800 font-serif text-xl">Banarasi Saree</span>
                </div>
                <div className="p-6">
                  <span className="text-xs text-red-600 font-medium uppercase tracking-wide">Sarees</span>
                  <h3 className="font-serif text-xl text-gray-900 mt-2 mb-2">Banarasi Silk Saree</h3>
                  <p className="text-gray-600 text-sm mb-4">Handwoven with golden threads</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-red-700">₹8,999</span>
                    <button className="bg-red-700 text-white px-4 py-2 text-sm hover:bg-red-800 transition-colors duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="group cursor-pointer card-hover" onClick={() => handleNavClick('suits')}>
              <div className="bg-orange-50 rounded-lg overflow-hidden">
                <div className="aspect-[3/4] bg-gradient-to-br from-orange-200 to-orange-300 flex items-center justify-center">
                  <span className="text-orange-800 font-serif text-xl">Anarkali Suit</span>
                </div>
                <div className="p-6">
                  <span className="text-xs text-orange-600 font-medium uppercase tracking-wide">Suits</span>
                  <h3 className="font-serif text-xl text-gray-900 mt-2 mb-2">Anarkali Suit Set</h3>
                  <p className="text-gray-600 text-sm mb-4">Elegant floor-length design</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-orange-700">₹4,599</span>
                    <button className="bg-orange-700 text-white px-4 py-2 text-sm hover:bg-orange-800 transition-colors duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Product 3 */}
            <div className="group cursor-pointer card-hover" onClick={() => handleNavClick('dupattas')}>
              <div className="bg-yellow-50 rounded-lg overflow-hidden">
                <div className="aspect-[3/4] bg-gradient-to-br from-yellow-200 to-yellow-300 flex items-center justify-center">
                  <span className="text-yellow-800 font-serif text-xl">Phulkari Dupatta</span>
                </div>
                <div className="p-6">
                  <span className="text-xs text-yellow-600 font-medium uppercase tracking-wide">Dupattas</span>
                  <h3 className="font-serif text-xl text-gray-900 mt-2 mb-2">Phulkari Dupatta</h3>
                  <p className="text-gray-600 text-sm mb-4">Hand-embroidered masterpiece</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-yellow-700">₹2,299</span>
                    <button className="bg-yellow-700 text-white px-4 py-2 text-sm hover:bg-yellow-800 transition-colors duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif text-red-800 mb-6">THE MallikaRAJ STORY</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At MallikaRAJ, we celebrate the rich heritage of Indian craftsmanship. Each piece in our collection 
            is carefully curated from skilled artisans across India, bringing you authentic traditional wear 
            that honors our cultural legacy while embracing contemporary style. From the vibrant Bandhani of 
            Gujarat to the intricate Phulkari of Punjab, we weave stories of tradition into every thread.
          </p>
          <button 
            onClick={() => handleNavClick('about')}
            className="border-2 border-red-700 text-red-700 px-8 py-3 text-lg font-medium hover:bg-red-700 hover:text-white transition-all duration-300"
          >
            DISCOVER OUR HERITAGE
          </button>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-serif text-center text-red-800 mb-12">WHAT OUR CUSTOMERS SAY</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-red-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4 italic">
                "The Dupattas are to die for 😍😍😍 loved the quality and the design. It was love at first sight the moment i opened the package."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-red-200 rounded-full flex items-center justify-center mr-3">
                  <span className="text-red-800 font-bold">N</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Neha S</p>
                  <p className="text-sm text-gray-600">Verified Customer</p>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4 italic">
                "Excellent quality of all collection ❣️💕 I loved all my purchases…must go with Weavkala… contribute to make Atmanirbhar Bharat ☺️"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-orange-200 rounded-full flex items-center justify-center mr-3">
                  <span className="text-orange-800 font-bold">A</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Anjali Ambekar</p>
                  <p className="text-sm text-gray-600">Verified Customer</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4 italic">
                "Simply loved the products!! Beautifully handcrafted!! Thank you weave kala team for the prompt service and supreme quality products!!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-yellow-200 rounded-full flex items-center justify-center mr-3">
                  <span className="text-yellow-800 font-bold">P</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Priya Dey</p>
                  <p className="text-sm text-gray-600">Verified Customer</p>
                </div>
              </div>
            </div>
          </div>
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
          
          {/* Main Category Pages */}
          <Route path="/tyohaar" element={<TyohaarCollectionsPage onBackClick={() => handleNavClick('collections')} />} />
          <Route path="/sarees" element={<SareesPage onBackClick={() => handleNavClick('collections')} />} />
          <Route path="/blouse" element={<BlousePage onBackClick={() => handleNavClick('collections')} />} />
          <Route path="/suit" element={<SuitPage onBackClick={() => handleNavClick('collections')} />} />
          <Route path="/dupatta" element={<DupattaPage onBackClick={() => handleNavClick('collections')} />} />
          <Route path="/stole" element={<StolePage onBackClick={() => handleNavClick('collections')} />} />
          <Route path="/fabrics" element={<FabricsPage onBackClick={() => handleNavClick('collections')} />} />
          <Route path="/jewellery" element={<JewelleryPage onBackClick={() => handleNavClick('collections')} />} />
          <Route path="/jutti" element={<JuttiPage onBackClick={() => handleNavClick('collections')} />} />
          
          {/* Collection Pages */}
          <Route path="/office-wear" element={<OfficeWearPage onBackClick={() => handleNavClick('collections')} />} />
          <Route path="/summer-wear" element={<SummerWearPage onBackClick={() => handleNavClick('collections')} />} />
          <Route path="/rozana-wear" element={<RozanaWearPage onBackClick={() => handleNavClick('collections')} />} />
          
          {/* Sub-category Pages */}
          <Route path="/sarees/bandhani" element={<BandhaniSareesPage onBackClick={() => handleNavClick('sarees')} />} />
          <Route path="/suit/cotton" element={<CottonSuitsPage onBackClick={() => handleNavClick('suit')} />} />
          
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
