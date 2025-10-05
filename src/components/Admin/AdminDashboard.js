import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { ordersAPI, productsAPI, couponsAPI, newsletterAPI } from '../../utils/api';
import ProductManager from './ProductManager';
import OrderManager from './OrderManager';
import CouponManager from './CouponManager';
import NewsletterManager from './NewsletterManager';
import UserManager from './UserManager';
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const AdminDashboard = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    totalOrders: 0,
    totalProducts: 0,
    totalCoupons: 0,
    totalSubscribers: 0,
    totalRevenue: 0,
    totalCustomers: 0,
    recentOrders: [],
    monthlyRevenue: [],
    ordersByStatus: [],
    topProducts: [],
    salesTrend: [],
  });
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('overview');

  // Sample data for charts (in a real app, this would come from your API)
  const sampleMonthlyData = [
    { month: 'Jan', revenue: 4000, orders: 24 },
    { month: 'Feb', revenue: 3000, orders: 18 },
    { month: 'Mar', revenue: 5000, orders: 32 },
    { month: 'Apr', revenue: 4500, orders: 28 },
    { month: 'May', revenue: 6000, orders: 38 },
    { month: 'Jun', revenue: 5500, orders: 35 },
  ];

  const sampleOrderStatus = [
    { name: 'Completed', value: 65, color: '#10B981' },
    { name: 'Processing', value: 20, color: '#3B82F6' },
    { name: 'Pending', value: 10, color: '#F59E0B' },
    { name: 'Cancelled', value: 5, color: '#EF4444' },
  ];

  const sampleSalesTrend = [
    { day: 'Mon', sales: 2400 },
    { day: 'Tue', sales: 1398 },
    { day: 'Wed', sales: 9800 },
    { day: 'Thu', sales: 3908 },
    { day: 'Fri', sales: 4800 },
    { day: 'Sat', sales: 3800 },
    { day: 'Sun', sales: 4300 },
  ];

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        const [ordersRes, productsRes, couponsRes, subscribersRes] = await Promise.all([
          ordersAPI.getAll(),
          productsAPI.getAll(),
          couponsAPI.getAll(),
          newsletterAPI.getAll(),
        ]);

        // Calculate total revenue from orders
        const totalRevenue = ordersRes.data.reduce((sum, order) => sum + order.total, 0);
        
        // Get unique customers count
        const uniqueCustomers = new Set(ordersRes.data.map(order => order.user?._id || order.user)).size;

        setStats({
          totalOrders: ordersRes.data.length,
          totalProducts: productsRes.data.length,
          totalCoupons: couponsRes.data.length,
          totalSubscribers: subscribersRes.data.length,
          totalRevenue: totalRevenue,
          totalCustomers: uniqueCustomers,
          recentOrders: ordersRes.data.slice(0, 5), // Get 5 most recent orders
          monthlyRevenue: sampleMonthlyData,
          ordersByStatus: sampleOrderStatus,
          salesTrend: sampleSalesTrend,
        });
      } catch (err) {
        console.error('Error fetching admin stats:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (!user?.isAdmin) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Access Denied</h1>
          <p className="text-gray-600">You don't have permission to access the admin dashboard.</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">RAANA Admin</h1>
              <p className="text-sm text-gray-500 mt-1">Welcome back, {user.name}</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button className="p-2 text-gray-400 hover:text-gray-500">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-5 5v-5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
              <div className="relative">
                <button className="p-2 text-gray-400 hover:text-gray-500">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-5 5v-5z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', name: 'Dashboard', icon: '📊' },
              { id: 'products', name: 'Products', icon: '📦' },
              { id: 'orders', name: 'Orders', icon: '🛒' },
              { id: 'coupons', name: 'Coupons', icon: '🎫' },
              { id: 'newsletter', name: 'Newsletter', icon: '📧' },
              { id: 'users', name: 'Users', icon: '👥' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSection(tab.id)}
                className={`flex items-center px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                  activeSection === tab.id
                    ? 'bg-blue-100 text-blue-700 border border-blue-200'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Overview Section */}
        {activeSection === 'overview' && (
          <div className="space-y-8">
            {/* Key Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Total Orders Card */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">Total Orders</p>
                    <p className="text-3xl font-bold text-gray-900">{stats.totalOrders}</p>
                    <p className="text-sm text-green-600 mt-2">↗ +12% from last month</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Total Revenue Card */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">Total Revenue</p>
                    <p className="text-3xl font-bold text-gray-900">${stats.totalRevenue.toLocaleString()}</p>
                    <p className="text-sm text-green-600 mt-2">↗ +8% from last month</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Total Customers Card */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">Total Customers</p>
                    <p className="text-3xl font-bold text-gray-900">{stats.totalCustomers}</p>
                    <p className="text-sm text-green-600 mt-2">↗ +15% from last month</p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <svg className="h-8 w-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Total Products Card */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">Total Products</p>
                    <p className="text-3xl font-bold text-gray-900">{stats.totalProducts}</p>
                    <p className="text-sm text-blue-600 mt-2">↗ +5% from last month</p>
                  </div>
                  <div className="p-3 bg-orange-50 rounded-lg">
                    <svg className="h-8 w-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Revenue Trend Chart */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Revenue Trend</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">Last 6 months</span>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={stats.monthlyRevenue}>
                    <defs>
                      <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="month" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <Tooltip />
                    <Area 
                      type="monotone" 
                      dataKey="revenue" 
                      stroke="#3B82F6" 
                      fillOpacity={1} 
                      fill="url(#colorRevenue)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Order Status Distribution */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Order Status</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">Current month</span>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={stats.ordersByStatus}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={120}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {stats.ordersByStatus.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {stats.ordersByStatus.map((status, index) => (
                    <div key={index} className="flex items-center">
                      <div 
                        className="w-3 h-3 rounded-full mr-2" 
                        style={{ backgroundColor: status.color }}
                      ></div>
                      <span className="text-sm text-gray-600">{status.name}: {status.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sales Performance and Recent Orders */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Weekly Sales Chart */}
              <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Weekly Sales</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">This week</span>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={stats.salesTrend}>
                    <XAxis dataKey="day" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <Tooltip />
                    <Bar dataKey="sales" fill="#10B981" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Recent Orders */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Recent Orders</h3>
                  <button className="text-sm text-blue-600 hover:text-blue-700">View all</button>
                </div>
                <div className="space-y-4">
                  {stats.recentOrders.slice(0, 5).map((order) => (
                    <div key={order._id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900 text-sm">
                          #{order._id.slice(-6).toUpperCase()}
                        </p>
                        <p className="text-xs text-gray-500">
                          {order.user?.name || 'Guest'}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-gray-900 text-sm">${order.total.toFixed(2)}</p>
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                          order.status === 'processing' ? 'bg-blue-100 text-blue-800' :
                          order.status === 'shipped' ? 'bg-purple-100 text-purple-800' :
                          order.status === 'delivered' ? 'bg-green-100 text-green-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {order.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Placeholder sections for other admin features */}
        {activeSection === 'products' && (
          <ProductManager />
        )}

        {activeSection === 'orders' && (
          <OrderManager />
        )}

        {activeSection === 'coupons' && (
          <CouponManager />
        )}

        {activeSection === 'newsletter' && (
          <NewsletterManager />
        )}

        {activeSection === 'users' && (
          <UserManager />
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;