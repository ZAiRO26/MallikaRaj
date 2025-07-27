const mongoose = require('mongoose');

const waitlistSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  email: { type: String, required: true },
}, { timestamps: true });

waitlistSchema.index({ product: 1, email: 1 }, { unique: true });

module.exports = mongoose.model('Waitlist', waitlistSchema); 