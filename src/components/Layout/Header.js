import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import CartDrawer from '../Cart/CartDrawer';

const Header = ({ onNavigate, activePage }) => {
  const { user, logout, isAuthenticated } = useAuth();
  const { getItemCount } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const cartItemCount = getItemCount();

  const handleNavClick = (page) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <>
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <button 
                onClick={() => handleNavClick('home')}
                className="text-2xl font-bold text-gray-900 hover:text-gray-700"
              >
                RAANA
              </button>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button 
                onClick={() => handleNavClick('home')}
                className={`px-3 py-2 text-sm font-medium ${
                  activePage === 'home' ? 'text-black border-b-2 border-black' : 'text-gray-700 hover:text-black'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => handleNavClick('products')}
                className={`px-3 py-2 text-sm font-medium ${
                  activePage === 'products' ? 'text-black border-b-2 border-black' : 'text-gray-700 hover:text-black'
                }`}
              >
                Products
              </button>
              <button 
                onClick={() => handleNavClick('women')}
                className={`px-3 py-2 text-sm font-medium ${
                  activePage === 'women' ? 'text-black border-b-2 border-black' : 'text-gray-700 hover:text-black'
                }`}
              >
                Women
              </button>
              <button 
                onClick={() => handleNavClick('men')}
                className={`px-3 py-2 text-sm font-medium ${
                  activePage === 'men' ? 'text-black border-b-2 border-black' : 'text-gray-700 hover:text-black'
                }`}
              >
                Men
              </button>
              <button 
                onClick={() => handleNavClick('about')}
                className={`px-3 py-2 text-sm font-medium ${
                  activePage === 'about' ? 'text-black border-b-2 border-black' : 'text-gray-700 hover:text-black'
                }`}
              >
                About
              </button>
              <button 
                onClick={() => handleNavClick('contact-us')}
                className={`px-3 py-2 text-sm font-medium ${
                  activePage === 'contact-us' ? 'text-black border-b-2 border-black' : 'text-gray-700 hover:text-black'
                }`}
              >
                Contact
              </button>
            </nav>

            {/* Right side */}
            <div className="flex items-center space-x-4">
              {/* Cart */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-gray-700 hover:text-black"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                </svg>
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </button>

              {/* User Menu */}
              {isAuthenticated ? (
                <div className="relative">
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center text-gray-700 hover:text-black"
                  >
                    <span className="text-sm font-medium">{user?.name}</span>
                    <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {isUserMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                      <button
                        onClick={() => {
                          handleNavClick('profile');
                          setIsUserMenuOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Profile
                      </button>
                      <button
                        onClick={() => {
                          handleNavClick('my-orders');
                          setIsUserMenuOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Orders
                      </button>
                      {user?.isAdmin && (
                        <button
                          onClick={() => {
                            handleNavClick('admin');
                            setIsUserMenuOpen(false);
                          }}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Admin Dashboard
                        </button>
                      )}
                      <button
                        onClick={() => {
                          logout();
                          setIsUserMenuOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Sign out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => handleNavClick('auth')}
                  className="text-gray-700 hover:text-black px-3 py-2 text-sm font-medium"
                >
                  Sign in
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header; 