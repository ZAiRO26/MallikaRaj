import React, { createContext, useContext, useEffect, useState } from 'react';
import { wishlistAPI } from '../utils/api';
import { useAuth } from './AuthContext';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchWishlist = async () => {
    if (!isAuthenticated) return setWishlist([]);
    try {
      setLoading(true);
      const res = await wishlistAPI.getMy();
      setWishlist(res.data);
    } catch (err) {
      console.error('Failed to fetch wishlist', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWishlist();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  const addToWishlist = async (productId) => {
    try {
      const res = await wishlistAPI.add(productId);
      setWishlist(res.data);
    } catch (err) {
      console.error('Add wishlist error', err);
    }
  };

  const removeFromWishlist = async (productId) => {
    try {
      const res = await wishlistAPI.remove(productId);
      setWishlist(res.data);
    } catch (err) {
      console.error('Remove wishlist error', err);
    }
  };

  const value = {
    wishlist,
    loading,
    addToWishlist,
    removeFromWishlist,
  };

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
};

export const useWishlist = () => useContext(WishlistContext); 