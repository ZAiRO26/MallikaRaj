import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 mt-16">
      <div className="page-container section-spacing">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Services Section */}
          <div className="observe-fade">
            <h3 className="footer-section-title">SERVICES</h3>
            <ul className="footer-links">
              <li><Link to="/contact" className="footer-link">Contact us</Link></li>
              <li><Link to="/faq" className="footer-link">FAQ</Link></li>
              <li><Link to="/store-locator" className="footer-link">Find a store</Link></li>
              <li><Link to="/beauty-products" className="footer-link">Stores selling beauty products</Link></li>
              <li><Link to="/apple-watch" className="footer-link">Stores selling Apple Watch Hermès</Link></li>
              <li><Link to="/gifting" className="footer-link">Gifting</Link></li>
              <li><Link to="/made-to-measure" className="footer-link">Made to measure</Link></li>
              <li><Link to="/maintenance" className="footer-link">Maintenance and repair</Link></li>
            </ul>
          </div>

          {/* Orders Section */}
          <div className="observe-fade animate-delay-200">
            <h3 className="footer-section-title">ORDERS</h3>
            <ul className="footer-links">
              <li><Link to="/payment" className="footer-link">Payment</Link></li>
              <li><Link to="/shipping" className="footer-link">Shipping</Link></li>
              <li><Link to="/collect-in-store" className="footer-link">Collect in store</Link></li>
              <li><Link to="/track-orders" className="footer-link">Track orders</Link></li>
              <li><Link to="/returns" className="footer-link">Returns and exchanges</Link></li>
            </ul>
          </div>

          {/* La Maison Hermès Section */}
          <div className="observe-fade animate-delay-300">
            <h3 className="footer-section-title">LA MAISON RAANA</h3>
            <ul className="footer-links">
              <li><Link to="/sustainable-development" className="footer-link">Sustainable development</Link></li>
              <li><Link to="/foundation" className="footer-link">The Raana Foundation</Link></li>
              <li><Link to="/join-raana" className="footer-link">Join Raana</Link></li>
              <li><Link to="/finance-governance" className="footer-link">Finance & Governance</Link></li>
              <li><Link to="/partner-brands" className="footer-link">Our partner brands</Link></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="observe-fade animate-delay-400">
            <h3 className="footer-section-title">LEGAL</h3>
            <ul className="footer-links">
              <li><Link to="/terms" className="footer-link">Terms and conditions</Link></li>
              <li><Link to="/privacy" className="footer-link">Privacy & cookies</Link></li>
              <li><Link to="/binding-corporate-rules" className="footer-link">Binding Corporate Rules (BCRs)</Link></li>
              <li><Link to="/california-transparency" className="footer-link">California Transparency in Supply Chain Act</Link></li>
              <li><Link to="/transparency-coverage" className="footer-link">Transparency in coverage</Link></li>
              <li><Link to="/do-not-sell" className="footer-link">Do Not Sell/Share My Personal Information</Link></li>
              <li><Link to="/legal-issues" className="footer-link">Legal issues</Link></li>
              <li><Link to="/accessibility" className="footer-link">Accessibility</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-100 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            
            {/* Customer Service */}
            <div className="observe-fade">
              <h4 className="footer-section-title mb-4">CUSTOMER SERVICE</h4>
              <p className="footer-text mb-2">Monday to Friday 9am - 9pm EST, Saturday 10am - 1pm EST</p>
              <p className="footer-text mb-4">800 441 4488</p>
              <Link to="/contact" className="footer-link">Email us</Link>
            </div>

            {/* Newsletter */}
            <div className="observe-fade animate-delay-200">
              <h4 className="footer-section-title mb-4">NEWSLETTER</h4>
              <p className="footer-text mb-4">Receive our newsletter and discover our stories, collections, and surprises.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="footer-input flex-1 mr-3"
                />
                <button className="btn-luxury">SUBSCRIBE</button>
              </div>
            </div>

            {/* Social Media */}
            <div className="observe-fade animate-delay-300">
              <h4 className="footer-section-title mb-4">FOLLOW US</h4>
              <div className="flex space-x-4">
                <a href="#" className="footer-social-link" aria-label="Facebook">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="footer-social-link" aria-label="Instagram">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
                  </svg>
                </a>
                <a href="#" className="footer-social-link" aria-label="YouTube">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-100 mt-8 pt-6">
          <div className="text-center">
            <p className="footer-text">© 2024 RAANA. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;