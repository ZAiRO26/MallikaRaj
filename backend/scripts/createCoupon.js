const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Coupon = require('../models/Coupon');

dotenv.config();

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    const code = process.argv[2];
    const discount = parseFloat(process.argv[3]);
    if (!code || !discount) {
      console.log('Usage: node scripts/createCoupon.js <CODE> <DISCOUNT_PERCENT>');
      process.exit(1);
    }
    const existing = await Coupon.findOne({ code });
    if (existing) {
      console.log(`Coupon ${code} already exists.`);
    } else {
      const expiresAt = new Date();
      expiresAt.setDate(expiresAt.getDate() + 30);
      await Coupon.create({ code, discount, expiresAt });
      console.log(`Coupon ${code} with ${discount}% created.`);
    }
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})(); 