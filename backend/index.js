const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// MongoDB connection with fallback to Memory Server
const connectDB = async () => {
  try {
    // First try to connect to local MongoDB
    const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/raana-store';
    console.log('Attempting to connect to MongoDB:', mongoUri);
    
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
    });
    
    console.log('✅ MongoDB connected successfully');
    
    // Create admin user if it doesn't exist
    await createAdminUser();
    
  } catch (err) {
    console.error('❌ Local MongoDB connection failed:', err.message);
    console.log('🔄 Falling back to MongoDB Memory Server...');
    
    try {
      const { MongoMemoryServer } = require('mongodb-memory-server');
      
      const mongod = await MongoMemoryServer.create({
        instance: {
          port: 27018, // Use different port to avoid conflicts
          dbName: 'raana-store'
        }
      });
      
      const memoryUri = mongod.getUri();
      console.log('MongoDB Memory Server URI:', memoryUri);
      
      await mongoose.connect(memoryUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      
      console.log('✅ MongoDB Memory Server connected successfully');
      
      // Create admin user if it doesn't exist
      await createAdminUser();
      
      // Store mongod instance for cleanup
      global.mongod = mongod;
      
    } catch (memoryErr) {
      console.error('❌ MongoDB Memory Server connection error:', memoryErr);
      process.exit(1);
    }
  }
};

// Function to create admin user
const createAdminUser = async () => {
  try {
    const User = require('./models/User');
    const bcrypt = require('bcryptjs');
    
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@raana.com';
    const adminPassword = process.env.ADMIN_PASSWORD || 'Admin123!';
    
    const existingAdmin = await User.findOne({ email: adminEmail });
    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash(adminPassword, 10);
      
      const adminUser = new User({
        name: 'RAANA Admin',
        email: adminEmail,
        password: hashedPassword,
        isAdmin: true
      });
      
      await adminUser.save();
      console.log('✅ Admin user created automatically');
      console.log(`📧 Email: ${adminEmail}`);
      console.log(`🔑 Password: ${adminPassword}`);
    } else {
      console.log('ℹ️  Admin user already exists');
    }
  } catch (error) {
    console.log('⚠️  Admin user creation skipped:', error.message);
  }
};

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('Shutting down gracefully...');
  if (global.mongod) {
    await global.mongod.stop();
  }
  process.exit(0);
});

connectDB();

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
// Admin routes
app.use('/api/admin', require('./routes/admin'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});