const mongoose = require('mongoose');
const Product = require('../models/Product');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const sampleProducts = [
  {
    name: "RAANA GG Marmont Small Shoulder Bag",
    description: "The GG Marmont Small Shoulder Bag features the iconic GG logo and a chain shoulder strap. Crafted from soft matelassé leather with antique gold hardware.",
    price: 2980,
    originalPrice: 2980,
    images: [
      "/Images/luxury-handbag-1.svg",
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
    ],
    category: "handbags",
    subcategory: "shoulder-bags",
    brand: "RAANA",
    materials: ["leather", "brass"],
    colors: ["black", "beige", "red"],
    sizes: ["small"],
    stock: 15,
    sku: "RAANA-000001",
    weight: 850,
    dimensions: { length: 26, width: 7, height: 15 },
    isLimitedEdition: false,
    isNewArrival: true,
    isOnSale: false,
    tags: ["luxury", "shoulder-bag", "leather", "classic"],
    featured: true,
    active: true
  },
  {
    name: "RAANA Ace Embroidered Sneakers",
    description: "The Ace sneakers feature the iconic bee embroidery and are crafted from premium leather with a comfortable rubber sole. Perfect for casual luxury.",
    price: 790,
    originalPrice: 790,
    images: [
      "/Images/luxury-shoes-1.svg",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=712&q=80"
    ],
    category: "shoes",
    subcategory: "sneakers",
    brand: "RAANA",
    materials: ["leather", "rubber"],
    colors: ["white", "black"],
    sizes: ["36", "37", "38", "39", "40", "41", "42"],
    stock: 25,
    sku: "RAANA-000002",
    weight: 450,
    dimensions: { length: 28, width: 10, height: 8 },
    isLimitedEdition: false,
    isNewArrival: false,
    isOnSale: false,
    tags: ["sneakers", "casual", "luxury", "embroidered"],
    featured: true,
    active: true
  },
  {
    name: "RAANA Dionysus Small Shoulder Bag",
    description: "The Dionysus bag features the iconic tiger head closure and is crafted from GG Supreme canvas with leather trim. A statement piece for any occasion.",
    price: 3200,
    originalPrice: 3200,
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=725&q=80",
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
    ],
    category: "handbags",
    subcategory: "shoulder-bags",
    brand: "RAANA",
    materials: ["canvas", "leather", "brass"],
    colors: ["brown", "black"],
    sizes: ["small", "medium"],
    stock: 8,
    sku: "RAANA-000003",
    weight: 950,
    dimensions: { length: 28, width: 8, height: 18 },
    isLimitedEdition: true,
    isNewArrival: false,
    isOnSale: false,
    tags: ["limited-edition", "canvas", "tiger-head", "statement"],
    featured: true,
    active: true
  },
  {
    name: "RAANA Silk Blouse",
    description: "Elegant silk blouse with intricate floral embroidery. Perfect for both professional and evening wear. Made from 100% pure silk.",
    price: 1200,
    originalPrice: 1500,
    images: [
      "/Images/luxury-dress-1.svg",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
    ],
    category: "ready-to-wear",
    subcategory: "blouses",
    brand: "RAANA",
    materials: ["silk", "cotton"],
    colors: ["white", "cream", "pink"],
    sizes: ["XS", "S", "M", "L", "XL"],
    stock: 20,
    sku: "RAANA-000004",
    weight: 180,
    dimensions: { length: 65, width: 45, height: 2 },
    isLimitedEdition: false,
    isNewArrival: false,
    isOnSale: true,
    tags: ["silk", "blouse", "embroidery", "elegant"],
    featured: false,
    active: true
  },
  {
    name: "RAANA Leather Wallet",
    description: "Premium leather wallet with multiple card slots and coin compartment. Features the RAANA logo embossed in gold.",
    price: 450,
    originalPrice: 450,
    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&auto=format&fit=crop&w=735&q=80",
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=711&q=80"
    ],
    category: "accessories",
    subcategory: "wallets",
    brand: "RAANA",
    materials: ["leather", "brass"],
    colors: ["brown", "black", "tan"],
    sizes: ["standard"],
    stock: 30,
    sku: "RAANA-000005",
    weight: 120,
    dimensions: { length: 11, width: 9, height: 2 },
    isLimitedEdition: false,
    isNewArrival: false,
    isOnSale: false,
    tags: ["wallet", "leather", "accessories", "premium"],
    featured: false,
    active: true
  },
  {
    name: "RAANA Luxury Watch",
    description: "Exquisite Swiss-made luxury watch with gold-plated case and leather strap. Features precision movement and elegant design.",
    price: 3500,
    originalPrice: 3500,
    images: [
      "/Images/luxury-watch-1.svg",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    category: "watches",
    subcategory: "luxury-watches",
    brand: "RAANA",
    materials: ["gold", "leather", "sapphire-crystal"],
    colors: ["gold", "brown"],
    sizes: ["standard"],
    stock: 5,
    sku: "RAANA-000006",
    weight: 150,
    dimensions: { length: 4, width: 4, height: 1 },
    isLimitedEdition: true,
    isNewArrival: true,
    isOnSale: false,
    tags: ["luxury", "watch", "swiss-made", "gold"],
    featured: true,
    active: true
  },
  {
    name: "RAANA Diamond Necklace",
    description: "Stunning diamond necklace with 18k gold chain. Features a brilliant-cut center diamond with smaller accent stones.",
    price: 8500,
    originalPrice: 8500,
    images: [
      "/Images/luxury-jewelry-1.svg",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    category: "jewelry",
    subcategory: "necklaces",
    brand: "RAANA",
    materials: ["18k-gold", "diamond"],
    colors: ["gold"],
    sizes: ["standard"],
    stock: 3,
    sku: "RAANA-000007",
    weight: 25,
    dimensions: { length: 45, width: 2, height: 0.5 },
    isLimitedEdition: true,
    isNewArrival: true,
    isOnSale: false,
    tags: ["luxury", "jewelry", "diamond", "necklace", "18k-gold"],
    featured: true,
    active: true
  },
  {
    name: "RAANA Designer Sunglasses",
    description: "Premium designer sunglasses with tortoiseshell frames and gradient lenses. UV protection with luxury styling.",
    price: 650,
    originalPrice: 650,
    images: [
      "/Images/luxury-sunglasses-1.svg",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    ],
    category: "accessories",
    subcategory: "sunglasses",
    brand: "RAANA",
    materials: ["acetate", "metal", "glass"],
    colors: ["tortoiseshell", "black"],
    sizes: ["standard"],
    stock: 12,
    sku: "RAANA-000008",
    weight: 35,
    dimensions: { length: 14, width: 5, height: 4 },
    isLimitedEdition: false,
    isNewArrival: true,
    isOnSale: false,
    tags: ["sunglasses", "designer", "luxury", "uv-protection"],
    featured: false,
    active: true
  }
];

const sampleUsers = [
  {
    name: "Admin User",
    email: "admin@raana.com",
    password: "admin123",
    isAdmin: true
  },
  {
    name: "John Doe",
    email: "john@example.com",
    password: "password123",
    isAdmin: false
  }
];

async function seedDatabase() {
  try {
    // Connect to MongoDB with fallback to Memory Server
    const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/raana-store';
    
    try {
      await mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000
      });
      console.log('Connected to MongoDB');
    } catch (err) {
      console.log('Local MongoDB not available, connecting to Memory Server...');
      // Connect to the same Memory Server instance as the main app
      await mongoose.connect('mongodb://127.0.0.1:27018/', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Connected to MongoDB Memory Server');
    }

    // Clear existing data
    await Product.deleteMany({});
    await User.deleteMany({});
    console.log('Cleared existing data');

    // Create admin user
    for (const userData of sampleUsers) {
      const hashedPassword = await bcrypt.hash(userData.password, 12);
      await User.create({
        ...userData,
        password: hashedPassword
      });
    }
    console.log('Created sample users');

    // Create products
    await Product.insertMany(sampleProducts);
    console.log('Created sample products');

    console.log('Database seeded successfully!');
    console.log('\nSample Admin Login:');
    console.log('Email: admin@raana.com');
    console.log('Password: admin123');
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

// Run seeder if called directly
if (require.main === module) {
  seedDatabase();
}

module.exports = { seedDatabase, sampleProducts, sampleUsers };