import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import CartDrawer from '../Cart/CartDrawer';

const Header = ({ onNavigate, activePage }) => {
  const { user, logout } = useAuth();
  const { getItemCount } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({});
  const userMenuRef = useRef();

  const toggleSection = (sectionName) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionName]: !prev[sectionName]
    }));
  };

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
              <div className="flex items-center">
                <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">M</span>
                </div>
                <Link to="/" className="text-xl md:text-2xl font-serif text-red-800 tracking-widest">
                  MallikaRAJ
                </Link>
              </div>
            </div>

            <div className="hidden md:flex items-center justify-end flex-1">
              {/* Desktop Navigation */}
              <nav className="flex items-center space-x-8 mr-8">
                <Link to="/" className="text-sm font-medium text-gray-700 hover:text-red-700 tracking-widest transition-colors">
                  Home
                </Link>
                
                {/* Tyohaar Collections Dropdown */}
                <div className="relative group">
                  <Link to="/tyohaar-collections" className="text-sm font-medium text-gray-700 hover:text-red-700 tracking-widest transition-colors flex items-center">
                    Tyohaar Collections
                    <span className="ml-1 text-xs bg-red-600 text-white px-1 py-0.5 rounded">NEW</span>
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                  
                  {/* Tyohaar Dropdown Menu */}
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50 border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <Link to="/tyohaar/suit" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors">
                      Suit
                    </Link>
                    <Link to="/tyohaar/sarees" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors">
                      Sarees
                    </Link>
                    <Link to="/tyohaar/dupatta" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors">
                      Dupatta
                    </Link>
                  </div>
                </div>

                <Link to="/shop" className="text-sm font-medium text-gray-700 hover:text-red-700 tracking-widest transition-colors">
                  Shop
                </Link>
                
                {/* Collections Dropdown */}
                <div className="relative group">
                  <Link to="/collections" className="text-sm font-medium text-gray-700 hover:text-red-700 tracking-widest transition-colors flex items-center">
                    Collections
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                  
                  {/* Collections Dropdown Menu */}
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50 border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <Link to="/collections/office-wear" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors">
                      Office Wear
                    </Link>
                    <Link to="/collections/summer-wear" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors">
                      Summer Wear
                    </Link>
                    <Link to="/collections/rozana-wear" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors">
                      Rozana Wear
                    </Link>
                  </div>
                </div>

                {/* Sarees Dropdown */}
                <div className="relative group">
                  <Link to="/sarees" className="text-sm font-medium text-gray-700 hover:text-red-700 tracking-widest transition-colors flex items-center">
                    Sarees
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                  
                  {/* Sarees Dropdown Menu */}
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50 border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <Link to="/sarees/bandhani-pichwai" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors">
                      Bandhani Pichwai Sari
                    </Link>
                    <Link to="/sarees/ajrakh" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors">
                      Ajrakh saris
                    </Link>
                    <Link to="/sarees/metallic-linen" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors">
                      Metallic Linen Sari
                    </Link>
                    <Link to="/sarees/jamdani" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors">
                      Jamdani
                    </Link>
                    <Link to="/sarees/handwoven" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors">
                      Handwoven Saris (new)
                    </Link>
                    <Link to="/sarees/linen" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors">
                      Linen
                    </Link>
                    <Link to="/sarees/tissue-linen" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors">
                      Tissue Linen Saris
                    </Link>
                    <Link to="/sarees/patola" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors">
                      Patola
                    </Link>
                    <Link to="/sarees/bandhani" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors">
                      Bandhani Saree
                    </Link>
                    <Link to="/sarees/kota" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors">
                      Kota
                    </Link>
                    <Link to="/sarees/cotton" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors">
                      Cotton Sarees
                    </Link>
                    <Link to="/sarees/chiffon" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors">
                      Chiffon
                    </Link>
                    <Link to="/sarees/chanderi" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors">
                      Chanderi Saree
                    </Link>
                    <Link to="/sarees/silk" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors">
                      Silk Saree
                    </Link>
                    <Link to="/sarees/bags" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors">
                      Saree Bags
                    </Link>
                  </div>
                </div>

                {/* Blouse Dropdown */}
                <div className="relative group">
                  <Link to="/blouse" className="text-sm font-medium text-gray-700 hover:text-red-700 tracking-widest transition-colors flex items-center">
                    Blouse
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                  
                  {/* Blouse Dropdown Menu */}
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50 border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <Link to="/blouse/stitched" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors">
                      Stitched Blouse
                    </Link>
                    <Link to="/blouse/unstitched" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors">
                      Un Stitched Blouse
                    </Link>
                  </div>
                </div>

                <Link to="/suit" className="text-sm font-medium text-gray-700 hover:text-red-700 tracking-widest transition-colors">
                  Suit
                </Link>
                <Link to="/dupatta" className="text-sm font-medium text-gray-700 hover:text-red-700 tracking-widest transition-colors">
                  Dupatta
                </Link>
                <Link to="/stole" className="text-sm font-medium text-gray-700 hover:text-red-700 tracking-widest transition-colors">
                  Stole
                </Link>
                <Link to="/fabrics" className="text-sm font-medium text-gray-700 hover:text-red-700 tracking-widest transition-colors">
                  Fabrics
                </Link>
                <Link to="/jewellery" className="text-sm font-medium text-gray-700 hover:text-red-700 tracking-widest transition-colors">
                  Jewellery
                </Link>
                <Link to="/jutti" className="text-sm font-medium text-gray-700 hover:text-red-700 tracking-widest transition-colors">
                  Jutti
                </Link>
                <Link to="/contact-us" className="text-sm font-medium text-gray-700 hover:text-red-700 tracking-widest transition-colors">
                  Contact Us
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
            <div className="px-4 pb-3 bg-gray-50">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                />
                <svg className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Mobile Navigation Links */}
            <div className="max-h-96 overflow-y-auto">
            <Link
              to="/"
              className="flex items-center px-4 py-4 text-base font-medium text-gray-700 hover:text-red-700 hover:bg-red-50 transition-all duration-200 border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </Link>
            
            {/* Tyohaar Collections - NEW */}
            <div className="border-b border-gray-100">
              <button
                onClick={() => toggleSection('tyohaar')}
                className="flex items-center justify-between w-full px-4 py-4 text-base font-medium text-gray-700 hover:text-red-700 hover:bg-red-50 transition-all duration-200 text-left"
              >
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                  <span>Tyohaar Collections</span>
                  <span className="ml-2 text-xs bg-red-600 text-white px-2 py-1 rounded-full font-medium">NEW</span>
                </div>
                <svg 
                  className={`w-5 h-5 transition-transform duration-200 ${expandedSections.tyohaar ? 'rotate-90' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              {expandedSections.tyohaar && (
                <div className="bg-red-50 border-l-4 border-red-500">
                  <Link
                    to="/tyohaar/suit"
                    className="flex items-center px-8 py-3 text-sm text-gray-600 hover:text-red-700 hover:bg-red-100 transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Suit
                  </Link>
                  <Link
                    to="/tyohaar/sarees"
                    className="flex items-center px-8 py-3 text-sm text-gray-600 hover:text-red-700 hover:bg-red-100 transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Sarees
                  </Link>
                  <Link
                    to="/tyohaar/dupatta"
                    className="flex items-center px-8 py-3 text-sm text-gray-600 hover:text-red-700 hover:bg-red-100 transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Dupatta
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/shop"
              className="flex items-center px-4 py-4 text-base font-medium text-gray-700 hover:text-red-700 hover:bg-red-50 transition-all duration-200 border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              Shop
            </Link>
            
            {/* Collections */}
            <div className="border-b border-gray-100">
              <button
                onClick={() => toggleSection('collections')}
                className="flex items-center justify-between w-full px-4 py-4 text-base font-medium text-gray-700 hover:text-red-700 hover:bg-red-50 transition-all duration-200 text-left"
              >
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  Collections
                </div>
                <svg 
                  className={`w-5 h-5 transition-transform duration-200 ${expandedSections.collections ? 'rotate-90' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              {expandedSections.collections && (
                <div className="bg-gray-50 border-l-4 border-gray-400">
                  <Link
                    to="/collections/office-wear"
                    className="flex items-center px-8 py-3 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100 transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Office Wear
                  </Link>
                  <Link
                    to="/collections/summer-wear"
                    className="flex items-center px-8 py-3 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100 transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Summer Wear
                  </Link>
                  <Link
                    to="/collections/rozana-wear"
                    className="flex items-center px-8 py-3 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100 transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Rozana Wear
                  </Link>
                </div>
              )}
            </div>

            {/* Sarees */}
            <div className="border-b border-gray-100">
              <button
                onClick={() => toggleSection('sarees')}
                className="flex items-center justify-between w-full px-4 py-4 text-base font-medium text-gray-700 hover:text-red-700 hover:bg-red-50 transition-all duration-200 text-left"
              >
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4 4 4 0 004-4V5z" />
                  </svg>
                  Sarees
                </div>
                <svg 
                  className={`w-5 h-5 transition-transform duration-200 ${expandedSections.sarees ? 'rotate-90' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              {expandedSections.sarees && (
                <div className="bg-purple-50 border-l-4 border-purple-500 max-h-64 overflow-y-auto">
                  <Link
                    to="/sarees/bandhani-pichwai"
                    className="flex items-center px-8 py-3 text-sm text-gray-600 hover:text-purple-700 hover:bg-purple-100 transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Bandhani Pichwai Sari
                  </Link>
                  <Link
                    to="/sarees/ajrakh"
                    className="flex items-center px-8 py-3 text-sm text-gray-600 hover:text-purple-700 hover:bg-purple-100 transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Ajrakh saris
                  </Link>
                  <Link
                    to="/sarees/metallic-linen"
                    className="flex items-center px-8 py-3 text-sm text-gray-600 hover:text-purple-700 hover:bg-purple-100 transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Metallic Linen Sari
                  </Link>
                  <Link
                    to="/sarees/jamdani"
                    className="flex items-center px-8 py-3 text-sm text-gray-600 hover:text-purple-700 hover:bg-purple-100 transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Jamdani
                  </Link>
                  <Link
                    to="/sarees/handwoven"
                    className="flex items-center px-8 py-3 text-sm text-gray-600 hover:text-purple-700 hover:bg-purple-100 transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Handwoven Saris (new)
                  </Link>
                  <Link
                    to="/sarees/linen"
                    className="flex items-center px-8 py-3 text-sm text-gray-600 hover:text-purple-700 hover:bg-purple-100 transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Linen
                  </Link>
                  <Link
                    to="/sarees/tissue-linen"
                    className="flex items-center px-8 py-3 text-sm text-gray-600 hover:text-purple-700 hover:bg-purple-100 transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Tissue Linen Saris
                  </Link>
                  <Link
                    to="/sarees/patola"
                    className="flex items-center px-8 py-3 text-sm text-gray-600 hover:text-purple-700 hover:bg-purple-100 transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Patola
                  </Link>
                  <Link
                    to="/sarees/bandhani"
                    className="flex items-center px-8 py-3 text-sm text-gray-600 hover:text-purple-700 hover:bg-purple-100 transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Bandhani Saree
                  </Link>
                  <Link
                    to="/sarees/kota"
                    className="flex items-center px-8 py-3 text-sm text-gray-600 hover:text-purple-700 hover:bg-purple-100 transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Kota
                  </Link>
                  <Link
                    to="/sarees/cotton"
                    className="flex items-center px-8 py-3 text-sm text-gray-600 hover:text-purple-700 hover:bg-purple-100 transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Cotton Sarees
                  </Link>
                  <Link
                    to="/sarees/chiffon"
                    className="flex items-center px-8 py-3 text-sm text-gray-600 hover:text-purple-700 hover:bg-purple-100 transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Chiffon
                  </Link>
                  <Link
                    to="/sarees/chanderi"
                    className="flex items-center px-8 py-3 text-sm text-gray-600 hover:text-purple-700 hover:bg-purple-100 transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Chanderi Saree
                  </Link>
                  <Link
                    to="/sarees/silk"
                    className="flex items-center px-8 py-3 text-sm text-gray-600 hover:text-purple-700 hover:bg-purple-100 transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Silk Saree
                  </Link>
                  <Link
                    to="/sarees/bags"
                    className="flex items-center px-8 py-3 text-sm text-gray-600 hover:text-purple-700 hover:bg-purple-100 transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Saree Bags
                  </Link>
                </div>
              )}
            </div>

            {/* Blouse */}
            <div className="border-b border-gray-100">
              <button
                onClick={() => toggleSection('blouse')}
                className="flex items-center justify-between w-full px-4 py-4 text-base font-medium text-gray-700 hover:text-purple-700 hover:bg-purple-50 transition-all duration-200 text-left"
              >
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5H9a2 2 0 00-2 2v10a4 4 0 004 4h6a2 2 0 002-2V7a2 2 0 00-2-2z" />
                  </svg>
                  Blouse
                </div>
                <svg 
                  className={`w-5 h-5 transition-transform duration-200 ${expandedSections.blouse ? 'rotate-90' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              {expandedSections.blouse && (
                <div className="bg-purple-50">
                  <Link
                    to="/blouse/stitched"
                    className="flex items-center px-8 py-3 text-sm text-gray-600 hover:text-purple-700 hover:bg-purple-100 transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Stitched Blouse
                  </Link>
                  <Link
                    to="/blouse/unstitched"
                    className="flex items-center px-8 py-3 text-sm text-gray-600 hover:text-purple-700 hover:bg-purple-100 transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    Un Stitched Blouse
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/suit"
              className="flex items-center px-4 py-4 text-base font-medium text-gray-700 hover:text-purple-700 hover:bg-purple-50 transition-all duration-200 border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg className="w-5 h-5 mr-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Suit
            </Link>
            
            <Link
              to="/dupatta"
              className="flex items-center px-4 py-4 text-base font-medium text-gray-700 hover:text-purple-700 hover:bg-purple-50 transition-all duration-200 border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg className="w-5 h-5 mr-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5H9a2 2 0 00-2 2v10a4 4 0 004 4h6a2 2 0 002-2V7a2 2 0 00-2-2z" />
              </svg>
              Dupatta
            </Link>
            
            <Link
              to="/stole"
              className="flex items-center px-4 py-4 text-base font-medium text-gray-700 hover:text-purple-700 hover:bg-purple-50 transition-all duration-200 border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg className="w-5 h-5 mr-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5H9a2 2 0 00-2 2v10a4 4 0 004 4h6a2 2 0 002-2V7a2 2 0 00-2-2z" />
              </svg>
              Stole
            </Link>
            
            <Link
              to="/fabrics"
              className="flex items-center px-4 py-4 text-base font-medium text-gray-700 hover:text-purple-700 hover:bg-purple-50 transition-all duration-200 border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg className="w-5 h-5 mr-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Fabrics
            </Link>
            
            <Link
              to="/jewellery"
              className="flex items-center px-4 py-4 text-base font-medium text-gray-700 hover:text-purple-700 hover:bg-purple-50 transition-all duration-200 border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg className="w-5 h-5 mr-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
              </svg>
              Jewellery
            </Link>
            
            <Link
              to="/jutti"
              className="flex items-center px-4 py-4 text-base font-medium text-gray-700 hover:text-purple-700 hover:bg-purple-50 transition-all duration-200 border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg className="w-5 h-5 mr-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
              </svg>
              Jutti
            </Link>
            
            <Link
              to="/contact-us"
              className="flex items-center px-4 py-4 text-base font-medium text-gray-700 hover:text-purple-700 hover:bg-purple-50 transition-all duration-200 border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg className="w-5 h-5 mr-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Us
            </Link>
            </div>

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