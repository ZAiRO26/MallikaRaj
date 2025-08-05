import React, { useState, useEffect } from 'react';
import { couponsAPI } from '../../utils/api';
import { useAuth } from '../../context/AuthContext';

const CouponManager = () => {
  const { user } = useAuth();
  const [coupons, setCoupons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [code, setCode] = useState('');
  const [discount, setDiscount] = useState('');
  const [expiresAt, setExpiresAt] = useState('');

  useEffect(() => {
    fetchCoupons();
  }, []);

  const fetchCoupons = async () => {
    try {
      setLoading(true);
      const res = await couponsAPI.getAll();
      setCoupons(res.data);
    } catch (err) {
      setError('Failed to load coupons');
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!code || !discount || !expiresAt) return;
    try {
      await couponsAPI.create({ code, discount: parseFloat(discount), expiresAt });
      setShowForm(false);
      setCode('');
      setDiscount('');
      setExpiresAt('');
      fetchCoupons();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create coupon');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this coupon?')) return;
    try {
      await couponsAPI.delete(id);
      fetchCoupons();
    } catch (err) {
      setError('Failed to delete coupon');
    }
  };

  if (!user?.isAdmin) return <p className="text-center py-8">Admin access required.</p>;
  if (loading) return <p className="text-center py-8">Loading...</p>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Coupon Management</h2>
        <button onClick={() => setShowForm(true)} className="bg-black text-white px-4 py-2 rounded-md">Add Coupon</button>
      </div>
      {error && <p className="text-red-600 mb-4">{error}</p>}
      <div className="bg-white shadow-sm border border-gray-200 rounded-lg overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Code</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Discount %</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expires</th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {coupons.map(c => (
              <tr key={c._id}>
                <td className="px-6 py-4 whitespace-nowrap">{c.code}</td>
                <td className="px-6 py-4">{c.discount}%</td>
                <td className="px-6 py-4">{new Date(c.expiresAt).toLocaleDateString()}</td>
                <td className="px-6 py-4">
                  <button onClick={() => handleDelete(c._id)} className="text-red-600">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h3 className="text-lg font-bold mb-4">Create Coupon</h3>
            <form onSubmit={handleCreate} className="space-y-4">
              <input value={code} onChange={e=>setCode(e.target.value)} placeholder="Code" className="w-full border px-3 py-2 rounded" />
              <input value={discount} onChange={e=>setDiscount(e.target.value)} placeholder="Discount %" type="number" className="w-full border px-3 py-2 rounded" />
              <input value={expiresAt} onChange={e=>setExpiresAt(e.target.value)} placeholder="Expires (YYYY-MM-DD)" type="date" className="w-full border px-3 py-2 rounded" />
              <div className="flex justify-end space-x-2">
                <button type="button" onClick={()=>setShowForm(false)} className="px-4 py-2 border rounded">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-black text-white rounded">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CouponManager; 