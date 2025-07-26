const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String },
}, { timestamps: true });

// A user can leave only one review per product
reviewSchema.index({ user: 1, product: 1 }, { unique: true });
// Speed up queries fetching reviews by product
reviewSchema.index({ product: 1 });

module.exports = mongoose.model('Review', reviewSchema); 