import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import CartDrawer from '../Cart/CartDrawer';

const Header = ({ onNavigate, activePage }) => {
  const { user, logout, isAuthenticated } = useAuth();
  const { getItemCount, cartItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const userMenuRef = useRef();

  // Close dropdown on click outside
  useEffect(() => {
    if (!isUserMenuOpen) return;
    function handleClickOutside(event) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isUserMenuOpen]);

  const cartItemCount = getItemCount();

  const handleNavClick = (page) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <>
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="page-container">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center">
              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black md:hidden mr-4"
              >
                <span className="sr-only">Open main menu</span>
                {!isMobileMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>

              {/* Logo/Brand Name */}
              <Link to="/" className="text-xl md:text-2xl font-bold text-black tracking-widest">
                RAANA
              </Link>
            </div>

            <div className="hidden md:flex items-center justify-end flex-1">
              {/* Desktop Navigation */}
              <nav className="flex items-center space-x-8 mr-8">
                <Link to="/" className="text-sm font-medium text-gray-700 hover:text-black tracking-widest transition-colors">
                  Home
                </Link>
                <Link to="/products" className="text-sm font-medium text-gray-700 hover:text-black tracking-widest transition-colors">
                  Products
                </Link>
                
                {/* Collections Dropdown */}
                <div className="relative group">
                  <Link to="/collections" className="text-sm font-medium text-gray-700 hover:text-black tracking-widest transition-colors flex items-center">
                    Collections
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                  
                  {/* Dropdown Menu */}
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50 border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <Link to="/women" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black transition-colors">
                      Women
                    </Link>
                    <Link to="/men" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black transition-colors">
                      Men
                    </Link>
                    <Link to="/children" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black transition-colors">
                      Children
                    </Link>
                    <Link to="/handbags" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black transition-colors">
                      Handbags
                    </Link>
                    <Link to="/jewelry-watches" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black transition-colors">
                      Jewelry & Watches
                    </Link>
                  </div>
                </div>
                <Link to="/about" className="text-sm font-medium text-gray-700 hover:text-black tracking-widest transition-colors">
                  About
                </Link>
                <Link to="/contact-us" className="text-sm font-medium text-gray-700 hover:text-black tracking-widest transition-colors">
                  Contact
                </Link>
              </nav>

              {/* Right Side Actions */}
              <div className="flex items-center space-x-2 md:space-x-4">
                {/* Search Button - Desktop */}
                <button className="hidden md:flex p-2 rounded-md text-gray-600 hover:text-black hover:bg-gray-100 transition-colors min-w-[44px] min-h-[44px] items-center justify-center" aria-label="Search">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </button>

              {/* Cart Button */}
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 rounded-md text-gray-600 hover:text-black hover:bg-gray-100 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center" 
                aria-label={`Shopping cart with ${cartItemCount} items`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5-6m0 0h15M17 21a2 2 0 100-4 2 2 0 000 4zM9 21a2 2 0 100-4 2 2 0 000 4z"></path>
                </svg>
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </button>

              {/* User Menu */}
              <div className="relative" ref={userMenuRef}>
                {user ? (
                  <>
                    <button
                      onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                      className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-black transition-colors min-h-[44px]"
                    >
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-2">
                        <span className="text-sm font-medium text-gray-700">
                          {user.name?.charAt(0).toUpperCase() || 'U'}
                        </span>
                      </div>
                      <span className="hidden lg:block">{user.name}</span>
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* User Dropdown Menu */}
                    {isUserMenuOpen && (
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50 border border-gray-200">
                        <Link
                          to="/profile"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black transition-colors"
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          Profile
                        </Link>
                        <Link
                          to="/my-orders"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black transition-colors"
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          My Orders
                        </Link>
                        {user.isAdmin && (
                          <Link
                            to="/admin"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black transition-colors"
                            onClick={() => setIsUserMenuOpen(false)}
                          >
                            Admin Dashboard
                          </Link>
                        )}
                        <hr className="my-2" />
                        <button
                          onClick={() => {
                            logout();
                            setIsUserMenuOpen(false);
                          }}
                          className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                        >
                          Sign Out
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to="/auth"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 transition-colors min-h-[44px]"
                  >
                    Sign In
                  </Link>
                )}
              </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-1 border-t border-gray-200 bg-white shadow-lg">
            {/* Mobile Search */}
            <div className="px-4 pb-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-base"
                />
                <svg className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Mobile Navigation Links */}
            <Link
              to="/"
              className="block px-4 py-4 text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 transition-colors border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/products"
              className="block px-4 py-4 text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 transition-colors border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/collections"
              className="block px-4 py-4 text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 transition-colors border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Collections
            </Link>
            <Link
              to="/women"
              className="block px-4 py-3 text-base font-medium text-gray-600 hover:text-black hover:bg-gray-50 transition-colors pl-8 border-b border-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Women
            </Link>
            <Link
              to="/men"
              className="block px-4 py-3 text-base font-medium text-gray-600 hover:text-black hover:bg-gray-50 transition-colors pl-8 border-b border-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Men
            </Link>
            <Link
              to="/children"
              className="block px-4 py-3 text-base font-medium text-gray-600 hover:text-black hover:bg-gray-50 transition-colors pl-8 border-b border-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Children
            </Link>
            <Link
              to="/about"
              className="block px-4 py-4 text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 transition-colors border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact-us"
              className="block px-4 py-4 text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 transition-colors border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>

            {/* Mobile User Actions */}
            {user ? (
              <div className="border-t border-gray-200 pt-3 mt-3">
                <div className="px-4 py-2">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                      <span className="text-sm font-medium text-gray-700">
                        {user.name?.charAt(0).toUpperCase() || 'U'}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{user.name}</p>
                      <p className="text-xs text-gray-500">{user.email}</p>
                    </div>
                  </div>
                </div>
                <Link
                  to="/profile"
                  className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Profile
                </Link>
                <Link
                  to="/orders"
                  className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Orders
                </Link>
                {user.role === 'admin' && (
                  <Link
                    to="/admin"
                    className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Admin Dashboard
                  </Link>
                )}
                <button
                  onClick={() => {
                    logout();
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-4 py-3 text-base font-medium text-red-600 hover:bg-red-50 transition-colors"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="border-t border-gray-200 pt-3 mt-3">
                <Link
                  to="/auth"
                  className="block mx-4 py-3 px-4 bg-black text-white text-center font-medium rounded-lg hover:bg-gray-800 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign In
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header;