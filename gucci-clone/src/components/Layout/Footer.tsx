import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-red-50 border-t border-red-100 mt-16">
      <div className="page-container section-spacing">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Collections Section */}
          <div className="observe-fade">
            <h3 className="footer-section-title text-red-800">COLLECTIONS</h3>
            <ul className="footer-links">
              <li><Link to="/sarees" className="footer-link hover:text-red-600">Sarees</Link></li>
              <li><Link to="/blouse" className="footer-link hover:text-red-600">Blouse</Link></li>
              <li><Link to="/suit" className="footer-link hover:text-red-600">Suit</Link></li>
              <li><Link to="/dupatta" className="footer-link hover:text-red-600">Dupatta</Link></li>
              <li><Link to="/stole" className="footer-link hover:text-red-600">Stole</Link></li>
              <li><Link to="/fabrics" className="footer-link hover:text-red-600">Fabrics</Link></li>
              <li><Link to="/jewellery" className="footer-link hover:text-red-600">Jewellery</Link></li>
              <li><Link to="/tyohaar-collections" className="footer-link hover:text-red-600">Tyohaar Collections</Link></li>
            </ul>
          </div>

          {/* Customer Care Section */}
          <div className="observe-fade animate-delay-200">
            <h3 className="footer-section-title text-red-800">CUSTOMER CARE</h3>
            <ul className="footer-links">
              <li><Link to="/contact" className="footer-link hover:text-red-600">Contact Us</Link></li>
              <li><Link to="/shipping" className="footer-link hover:text-red-600">Shipping & Delivery</Link></li>
              <li><Link to="/returns" className="footer-link hover:text-red-600">Returns & Exchanges</Link></li>
              <li><Link to="/size-guide" className="footer-link hover:text-red-600">Size Guide</Link></li>
              <li><Link to="/care-instructions" className="footer-link hover:text-red-600">Care Instructions</Link></li>
            </ul>
          </div>

          {/* About MallikaRAJ Section */}
          <div className="footer-section">
            <h3 className="footer-section-title text-red-800">ABOUT MallikaRAJ</h3>
            <ul className="footer-links">
              <li><Link to="/our-story" className="footer-link hover:text-red-600">Our Story</Link></li>
              <li><Link to="/artisans" className="footer-link hover:text-red-600">Our Artisans</Link></li>
              <li><Link to="/sustainability" className="footer-link hover:text-red-600">Sustainability</Link></li>
              <li><Link to="/heritage" className="footer-link hover:text-red-600">Indian Heritage</Link></li>
              <li><Link to="/careers" className="footer-link hover:text-red-600">Careers</Link></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="observe-fade animate-delay-400">
            <h3 className="footer-section-title text-red-800">LEGAL</h3>
            <ul className="footer-links">
              <li><Link to="/terms" className="footer-link hover:text-red-600">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="footer-link hover:text-red-600">Privacy Policy</Link></li>
              <li><Link to="/refund-policy" className="footer-link hover:text-red-600">Refund Policy</Link></li>
              <li><Link to="/shipping-policy" className="footer-link hover:text-red-600">Shipping Policy</Link></li>
              <li><Link to="/accessibility" className="footer-link hover:text-red-600">Accessibility</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-red-100 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            
            {/* Customer Service */}
            <div className="observe-fade">
              <h4 className="footer-section-title mb-4 text-red-800">CUSTOMER SERVICE</h4>
              <p className="footer-text mb-2 text-gray-700">Monday to Saturday 10am - 7pm IST</p>
              <p className="footer-text mb-4 text-gray-700">+91 98765 43210</p>
              <Link to="/contact" className="footer-link hover:text-red-600">Email us</Link>
            </div>

            {/* Newsletter */}
            <div className="observe-fade animate-delay-200">
              <h4 className="footer-section-title mb-4 text-red-800">NEWSLETTER</h4>
              <p className="footer-text mb-4 text-gray-700">Subscribe to get updates on new collections and exclusive offers.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="footer-input flex-1 mr-3 border-red-200 focus:border-red-500"
                />
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded transition-colors">SUBSCRIBE</button>
              </div>
            </div>

            {/* Social Media */}
            <div className="observe-fade animate-delay-300">
              <h4 className="footer-section-title mb-4 text-red-800">FOLLOW US</h4>
              <div className="flex space-x-4">
                <button className="footer-social-link text-red-600 hover:text-red-800" aria-label="Facebook" onClick={() => window.open('https://facebook.com/mallikaraj', '_blank')}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </button>
                <button className="footer-social-link text-red-600 hover:text-red-800" aria-label="Instagram" onClick={() => window.open('https://instagram.com/mallikaraj', '_blank')}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297L3.323 17.49c-.49-.49-.49-1.297 0-1.787l1.803-1.803c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323L3.323 5.451c-.49-.49-.49-1.297 0-1.787s1.297-.49 1.787 0l1.803 1.803c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297l1.803-1.803c.49-.49 1.297-.49 1.787 0s.49 1.297 0 1.787l-1.803 1.803c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323l1.803 1.803c.49.49.49 1.297 0 1.787s-1.297.49-1.787 0l-1.803-1.803c-.875.807-2.026 1.297-3.323 1.297z"/>
                  </svg>
                </button>
                <button className="footer-social-link text-red-600 hover:text-red-800" aria-label="YouTube" onClick={() => window.open('https://youtube.com/mallikaraj', '_blank')}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-red-100 mt-8 pt-6">
          <div className="text-center">
            <p className="footer-text text-gray-700">© 2024 MallikaRAJ. All rights reserved. | Celebrating Indian Heritage Through Fashion</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;