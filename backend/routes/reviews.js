const express = require('express');
const Review = require('../models/Review');
const { requireAuth } = require('../middleware/auth');

const router = express.Router();

// Get reviews for a specific product
router.get('/product/:productId', async (req, res) => {
  try {
    const reviews = await Review.find({ product: req.params.productId })
      .populate('user', 'name');
    res.json(reviews);
  } catch (err) {
    console.error('Get reviews error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create or update a review for a product
router.post('/product/:productId', requireAuth, async (req, res) => {
  try {
    const { rating, comment } = req.body;
    if (!rating) return res.status(400).json({ message: 'Rating is required' });

    let review = await Review.findOne({ product: req.params.productId, user: req.user._id });
    if (review) {
      review.rating = rating;
      review.comment = comment;
      await review.save();
      return res.json(review);
    }

    review = new Review({
      product: req.params.productId,
      user: req.user._id,
      rating,
      comment,
    });
    await review.save();
    res.status(201).json(review);
  } catch (err) {
    console.error('Create review error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete a review (user can delete own review, admin can delete any)
router.delete('/:id', requireAuth, async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) return res.status(404).json({ message: 'Review not found' });

    if (review.user.toString() !== req.user._id.toString() && !req.user.isAdmin) {
      return res.status(403).json({ message: 'Not authorized' });
    }

    await review.remove();
    res.json({ message: 'Review removed' });
  } catch (err) {
    console.error('Delete review error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router; 