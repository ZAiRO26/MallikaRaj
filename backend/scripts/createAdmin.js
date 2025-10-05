const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { MongoMemoryServer } = require('mongodb-memory-server');
require('dotenv').config();

async function createAdminUser() {
  try {
    // Connect to MongoDB (with Memory Server fallback)
    let mongoUri = process.env.MONGO_URI;
    
    try {
      await mongoose.connect(mongoUri);
      console.log('Connected to local MongoDB');
    } catch (localError) {
      console.log('Local MongoDB not available, starting Memory Server...');
      const mongod = await MongoMemoryServer.create();
      mongoUri = mongod.getUri();
      await mongoose.connect(mongoUri);
      console.log('Connected to MongoDB Memory Server');
    }

    // Check if admin already exists
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@raana.com';
    const adminPassword = process.env.ADMIN_PASSWORD || 'Admin123!';
    
    const existingAdmin = await User.findOne({ email: adminEmail });
    if (existingAdmin) {
      console.log('Admin user already exists');
      console.log(`Email: ${adminEmail}`);
      process.exit(0);
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(adminPassword, 10);

    // Create admin user
    const adminUser = new User({
      name: 'RAANA Admin',
      email: adminEmail,
      password: hashedPassword,
      isAdmin: true
    });

    await adminUser.save();
    console.log('✅ Admin user created successfully!');
    console.log(`📧 Email: ${adminEmail}`);
    console.log(`🔑 Password: ${adminPassword}`);
    console.log('🔐 Admin privileges: Enabled');

  } catch (error) {
    console.error('❌ Error creating admin user:', error);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
}

createAdminUser();