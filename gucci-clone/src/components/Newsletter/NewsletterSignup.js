import React, { useState } from 'react';
import { newsletterAPI } from '../../utils/api';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(''); // '', 'success', 'error'
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');
    setMessage('');
    setLoading(true);
    try {
      await newsletterAPI.subscribe(email);
      setStatus('success');
      setMessage('Thank you for subscribing!');
      setEmail('');
    } catch (err) {
      setStatus('error');
      setMessage(err.response?.data?.message || 'Subscription failed. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="bg-gray-50 rounded-lg p-8 shadow-sm max-w-lg mx-auto my-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Subscribe to Our Newsletter</h2>
      <p className="text-gray-600 mb-6 text-center">Get exclusive offers, updates, and luxury inspiration delivered to your inbox.</p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
      {status && (
        <div className={`mt-4 text-center ${status === 'success' ? 'text-green-600' : 'text-red-600'}`}>{message}</div>
      )}
    </div>
  );
};

export default NewsletterSignup; 