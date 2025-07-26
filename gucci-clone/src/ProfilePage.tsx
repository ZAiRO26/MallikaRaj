import React, { useState } from 'react';
import { useAuth } from './context/AuthContext';

interface ProfilePageProps {
  onBackClick: () => void;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ onBackClick }) => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States'
  });
  // Add activeSection state for sidebar navigation
  const [activeSection, setActiveSection] = useState('profile');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle profile update
    console.log('Profile updated:', formData);
    alert('Profile updated successfully!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-32 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pb-24">
      <button
        onClick={onBackClick}
        className="flex items-center text-xs font-medium text-gray-700 hover:text-black mb-8 tracking-widest"
      >
        <svg
          className="w-4 h-4 mr-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
        BACK
      </button>

      <div className="text-center mb-16">
        <h1 className="text-4xl font-serif text-gray-900 mb-6">My Profile</h1>
        <p className="text-lg text-gray-600">
          Manage your account information and preferences
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Navigation */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Account</h2>
            <nav className="space-y-2">
              <button
                className={`w-full text-left px-3 py-2 text-sm font-medium rounded-md ${activeSection === 'profile' ? 'text-black bg-gray-100' : 'text-gray-600 hover:text-black hover:bg-gray-50'}`}
                onClick={() => setActiveSection('profile')}
              >
                Profile Information
              </button>
              <button
                className={`w-full text-left px-3 py-2 text-sm font-medium rounded-md ${activeSection === 'orders' ? 'text-black bg-gray-100' : 'text-gray-600 hover:text-black hover:bg-gray-50'}`}
                onClick={() => setActiveSection('orders')}
              >
                Order History
              </button>
              <button
                className={`w-full text-left px-3 py-2 text-sm font-medium rounded-md ${activeSection === 'addresses' ? 'text-black bg-gray-100' : 'text-gray-600 hover:text-black hover:bg-gray-50'}`}
                onClick={() => setActiveSection('addresses')}
              >
                Addresses
              </button>
              <button
                className={`w-full text-left px-3 py-2 text-sm font-medium rounded-md ${activeSection === 'payments' ? 'text-black bg-gray-100' : 'text-gray-600 hover:text-black hover:bg-gray-50'}`}
                onClick={() => setActiveSection('payments')}
              >
                Payment Methods
              </button>
              <button
                className={`w-full text-left px-3 py-2 text-sm font-medium rounded-md ${activeSection === 'preferences' ? 'text-black bg-gray-100' : 'text-gray-600 hover:text-black hover:bg-gray-50'}`}
                onClick={() => setActiveSection('preferences')}
              >
                Preferences
              </button>
            </nav>
          </div>
        </div>

        {/* Profile Content */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            {activeSection === 'profile' && (
              <>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Profile Information</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                        City
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
                        State
                      </label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-2">
                        ZIP Code
                      </label>
                      <input
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                      Country
                    </label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    >
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="France">France</option>
                      <option value="Italy">Italy</option>
                      <option value="Germany">Germany</option>
                      <option value="Japan">Japan</option>
                      <option value="Australia">Australia</option>
                    </select>
                  </div>

                  <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
                    <button
                      type="button"
                      onClick={onBackClick}
                      className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md font-medium hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 bg-black text-white rounded-md font-medium hover:bg-gray-800"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </>
            )}
            {activeSection === 'orders' && (
              <>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Order History</h2>
                <p className="text-gray-600">View your past orders here. (Coming soon)</p>
              </>
            )}
            {activeSection === 'addresses' && (
              <>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Addresses</h2>
                <p className="text-gray-600">Manage your shipping and billing addresses. (Coming soon)</p>
              </>
            )}
            {activeSection === 'payments' && (
              <>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Payment Methods</h2>
                <p className="text-gray-600">Manage your saved payment methods. (Coming soon)</p>
              </>
            )}
            {activeSection === 'preferences' && (
              <>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Preferences</h2>
                <p className="text-gray-600">Set your account preferences. (Coming soon)</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage; 