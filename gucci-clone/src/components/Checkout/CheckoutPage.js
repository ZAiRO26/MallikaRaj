import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import PaymentForm from './PaymentForm';

// Load Stripe (you'll need to add your publishable key to .env)
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const CheckoutPage = () => {
  const [step, setStep] = useState('form'); // 'form' or 'payment'
  const [orderData, setOrderData] = useState(null);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);

  const handleProceedToPayment = (data) => {
    setOrderData(data);
    setStep('payment');
  };

  const handlePaymentSuccess = (order) => {
    setOrderDetails(order);
    setOrderSuccess(true);
  };

  const handleBackToForm = () => {
    setStep('form');
  };

  if (orderSuccess) {
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Order Confirmed!</h1>
          <p className="text-gray-600 mb-6">
            Thank you for your purchase. Your order has been successfully placed.
          </p>
          <div className="bg-gray-50 p-4 rounded-md mb-6">
            <p className="text-sm text-gray-600">
              <strong>Order ID:</strong> {orderDetails?._id || 'N/A'}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Total:</strong> ${orderDetails?.total?.toFixed(2) || '0.00'}
            </p>
          </div>
          <div className="space-y-3">
            <a
              href="/"
              className="block w-full bg-black text-white py-3 px-4 rounded-md font-medium hover:bg-gray-800"
            >
              Continue Shopping
            </a>
            <a
              href="/my-orders"
              className="block w-full bg-gray-200 text-gray-900 py-3 px-4 rounded-md font-medium hover:bg-gray-300"
            >
              View Orders
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {step === 'form' ? (
        <CheckoutForm onProceedToPayment={handleProceedToPayment} />
      ) : (
        <Elements stripe={stripePromise}>
          <PaymentForm
            orderData={orderData}
            onSuccess={handlePaymentSuccess}
            onBack={handleBackToForm}
          />
        </Elements>
      )}
    </div>
  );
};

export default CheckoutPage;