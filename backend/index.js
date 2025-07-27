const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// Basic route
app.get('/', (req, res) => {
  res.send('Gucci Backend API Running');
});

// Auth routes
app.use('/api/auth', require('./routes/auth'));
// Product routes
app.use('/api/products', require('./routes/products'));
// Order routes
app.use('/api/orders', require('./routes/orders'));
// Payment route
app.use('/api/payment', require('./routes/payment'));
// Coupon routes
app.use('/api/coupons', require('./routes/coupons'));
// Wishlist routes
app.use('/api/wishlist', require('./routes/wishlist'));
// Waitlist routes
app.use('/api/waitlist', require('./routes/waitlist'));
// Newsletter routes
app.use('/api/newsletter', require('./routes/newsletter'));
// Register reviews routes
app.use('/api/reviews', require('./routes/reviews'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 