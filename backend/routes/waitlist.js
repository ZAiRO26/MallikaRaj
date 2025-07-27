const express = require('express');
const Waitlist = require('../models/Waitlist');
const Product = require('../models/Product');
const { requireAuth } = require('../middleware/auth');

const router = express.Router();

// Subscribe to waitlist (logged-in or guest email in body)
router.post('/product/:productId', async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ message: 'Email is required' });

    const product = await Product.findById(req.params.productId);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    await Waitlist.findOneAndUpdate(
      { product: product._id, email },
      { product: product._id, email },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );
    res.json({ message: 'Added to waitlist' });
  } catch (err) {
    console.error('Waitlist subscribe error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Admin: list waitlist entries for a product
router.get('/product/:productId', requireAuth, async (req, res) => {
  try {
    const entries = await Waitlist.find({ product: req.params.productId });
    res.json(entries);
  } catch (err) {
    console.error('Waitlist list error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router; 