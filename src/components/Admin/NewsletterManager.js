import React, { useState, useEffect } from 'react';
import { newsletterAPI } from '../../utils/api';
import { useAuth } from '../../context/AuthContext';

const NewsletterManager = () => {
  const { user } = useAuth();
  const [subs, setSubs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => { fetchSubs(); }, []);

  const fetchSubs = async () => {
    try {
      setLoading(true);
      const res = await newsletterAPI.getAll();
      setSubs(res.data);
    } catch (err) {
      setError('Failed to load subscribers');
    } finally {
      setLoading(false);
    }
  };

  const exportCSV = () => {
    const csv = 'email\n' + subs.map(s=>s.email).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'subscribers.csv';
    link.click();
  };

  if (!user?.isAdmin) return <p className="text-center py-8">Admin access required.</p>;
  if (loading) return <p className="text-center py-8">Loading...</p>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Newsletter Subscribers</h2>
        <button onClick={exportCSV} className="bg-black text-white px-4 py-2 rounded-md">Export CSV</button>
      </div>
      {error && <p className="text-red-600 mb-4">{error}</p>}
      <div className="bg-white border border-gray-200 rounded-lg overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subscribed</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {subs.map(s => (
              <tr key={s._id}>
                <td className="px-6 py-4 whitespace-nowrap">{s.email}</td>
                <td className="px-6 py-4">{new Date(s.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NewsletterManager;