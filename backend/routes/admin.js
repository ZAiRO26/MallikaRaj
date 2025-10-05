const express = require('express');
const Order = require('../models/Order');
const Product = require('../models/Product');
const Coupon = require('../models/Coupon');
const Subscriber = require('../models/Subscriber');
const { requireAuth, requireAdmin } = require('../middleware/auth');

const router = express.Router();

// Get order statistics
router.get('/orders/stats', requireAuth, requireAdmin, async (req, res) => {
  try {
    const totalOrders = await Order.countDocuments();
    const ordersByStatus = await Order.aggregate([
      { $group: { _id: '$status', count: { $sum: 1 } } }
    ]);
    
    const recentOrders = await Order.find()
      .populate('user', 'name email')
      .populate('products.product', 'name price')
      .sort({ createdAt: -1 })
      .limit(10);
    
    // Monthly revenue for the last 6 months
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
    
    const monthlyRevenue = await Order.aggregate([
      { 
        $match: { 
          createdAt: { $gte: sixMonthsAgo },
          status: { $in: ['delivered', 'shipped', 'processing'] }
        }
      },
      {
        $group: {
          _id: { 
            year: { $year: '$createdAt' },
            month: { $month: '$createdAt' }
          },
          revenue: { $sum: '$total' }
        }
      },
      { $sort: { '_id.year': 1, '_id.month': 1 } }
    ]);
    
    // Weekly sales trend
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    
    const salesTrend = await Order.aggregate([
      { 
        $match: { 
          createdAt: { $gte: oneWeekAgo },
          status: { $in: ['delivered', 'shipped', 'processing'] }
        }
      },
      {
        $group: {
          _id: { $dayOfWeek: '$createdAt' },
          sales: { $sum: 1 }
        }
      },
      { $sort: { '_id': 1 } }
    ]);
    
    res.json({
      count: totalOrders,
      byStatus: ordersByStatus.map(item => ({
        name: item._id,
        value: item.count,
        color: item._id === 'pending' ? '#F59E0B' :
               item._id === 'processing' ? '#3B82F6' :
               item._id === 'shipped' ? '#10B981' :
               item._id === 'delivered' ? '#8B5CF6' : '#6B7280'
      })),
      recent: recentOrders,
      monthlyRevenue: monthlyRevenue.map(item => ({
        month: new Date(item._id.year, item._id.month - 1).toLocaleDateString('en-US', { month: 'short' }),
        revenue: item.revenue
      })),
      salesTrend: salesTrend.map(item => ({
        day: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][item._id - 1],
        sales: item.sales
      }))
    });
  } catch (err) {
    console.error('Get order stats error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get product statistics
router.get('/products/stats', requireAuth, requireAdmin, async (req, res) => {
  try {
    const totalProducts = await Product.countDocuments();
    const productsByCategory = await Product.aggregate([
      { $group: { _id: '$category', count: { $sum: 1 } } }
    ]);
    
    res.json({
      count: totalProducts,
      byCategory: productsByCategory
    });
  } catch (err) {
    console.error('Get product stats error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get coupon statistics
router.get('/coupons/stats', requireAuth, requireAdmin, async (req, res) => {
  try {
    const activeCoupons = await Coupon.countDocuments({
      expiresAt: { $gt: new Date() }
    });
    
    res.json({
      active: activeCoupons
    });
  } catch (err) {
    console.error('Get coupon stats error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get newsletter statistics
router.get('/newsletter/stats', requireAuth, requireAdmin, async (req, res) => {
  try {
    const subscriberCount = await Subscriber.countDocuments();
    
    res.json({
      count: subscriberCount
    });
  } catch (err) {
    console.error('Get newsletter stats error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;