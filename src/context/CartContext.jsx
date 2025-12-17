'use client'

import React, { createContext, useState, useEffect } from 'react';
import Swal from 'sweetalert2';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const storedCart = localStorage.getItem('panto-cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
    setIsInitialized(true);
  }, []);

  // Persist cart to localStorage whenever it changes
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('panto-cart', JSON.stringify(cartItems));
    }
  }, [cartItems, isInitialized]);

  const addToCart = (product) => {
    if (cartItems.some(item => item.id === product.id)) {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'This product is already in your cart!',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
      });
    } else {
      setCartItems(prevItems => [...prevItems, product]);
      Swal.fire({
        icon: 'success',
        title: 'Added!',
        text: 'Product has been added to your cart.',
        confirmButtonColor: '#3085d6',
      });
    }
  };

  const cartCount = cartItems.length;

  return (
    <CartContext.Provider value={{ cartCount, addToCart, cartItems }}>
      {children}
    </CartContext.Provider>
  );
};
