import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://your-actual-railway-url.railway.app/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth API
export const authAPI = {
  register: (userData) => api.post('/auth/register', userData),
  login: (credentials) => api.post('/auth/login', credentials),
};

// Products API
export const productsAPI = {
  getAll: () => api.get('/products'),
  getById: (id) => api.get(`/products/${id}`),
  create: (productData) => api.post('/products', productData),
  update: (id, productData) => api.put(`/products/${id}`, productData),
  delete: (id) => api.delete(`/products/${id}`),
};

// Orders API
export const ordersAPI = {
  create: (orderData) => api.post('/orders', orderData),
  getUserOrders: (userId) => api.get(`/orders/user/${userId}`),
  getAll: () => api.get('/orders'),
  updateStatus: (id, status) => api.put(`/orders/${id}`, { status }),
};

// Payment API
export const paymentAPI = {
  createIntent: (amount) => api.post('/payment/create-intent', { amount }),
};

// Coupons API
export const couponsAPI = {
  validate: (code) => api.post('/coupons/validate', { code }),
  create: (couponData) => api.post('/coupons', couponData),
  getAll: () => api.get('/coupons'),
  delete: (id) => api.delete(`/coupons/${id}`),
};

// Newsletter API
export const newsletterAPI = {
  subscribe: (email) => api.post('/newsletter/subscribe', { email }),
  getAll: () => api.get('/newsletter'),
};

// Reviews API
export const reviewsAPI = {
  getByProduct: (productId) => api.get(`/reviews/product/${productId}`),
  createOrUpdate: (productId, reviewData) => api.post(`/reviews/product/${productId}`, reviewData),
  delete: (id) => api.delete(`/reviews/${id}`),
};

// Wishlist API
export const wishlistAPI = {
  getMy: () => api.get('/wishlist'),
  add: (productId) => api.post(`/wishlist/${productId}`),
  remove: (productId) => api.delete(`/wishlist/${productId}`),
};

// Waitlist API
export const waitlistAPI = {
  subscribe: (productId, email) => api.post(`/waitlist/product/${productId}`, { email }),
};

export default api; 