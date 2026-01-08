'use client'

import { useContext } from 'react';
import { IoClose } from 'react-icons/io5';
import { FiTrash2, FiShoppingBag } from 'react-icons/fi';
import { CartContext } from '@/context/CartContext';
import { ThemeContext } from '@/context/ThemeContext';
import { getImgUrl } from '@/utils/getImgUrl';

const CartPopup = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const { isDarkMode } = useContext(ThemeContext);

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop with blur */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Cart Sidebar */}
      <div
        className={`relative w-full max-w-md h-full shadow-2xl flex flex-col ${
          isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-secondary'
        } animate-slide-in-right`}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FiShoppingBag className="text-2xl text-primary" />
            <h2 className="text-xl font-gilroy font-bold">Your Cart</h2>
            <span className="bg-primary text-white text-sm px-2 py-0.5 rounded-full">
              {cartItems.length}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <IoClose className="text-2xl" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length > 0 ? (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className={`flex gap-4 p-3 rounded-xl ${
                    isDarkMode ? 'bg-gray-800' : 'bg-[#F7F7F7]'
                  }`}
                >
                  {/* Product Image */}
                  <div className="w-20 h-20 bg-white dark:bg-gray-700 rounded-lg flex items-center justify-center p-2 flex-shrink-0">
                    <img
                      src={getImgUrl(item.imageUrl)}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-semibold text-sm dark:text-white">
                        {item.name}
                      </h3>
                      <p className="text-xs text-gray-400">{item.category}</p>
                    </div>
                    <p className="text-primary font-bold">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="self-start p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full transition-colors"
                    title="Remove from cart"
                  >
                    <FiTrash2 />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <FiShoppingBag className="text-6xl text-gray-300 dark:text-gray-600 mb-4" />
              <p className="text-lg text-gray-500 dark:text-gray-400">
                Your cart is empty
              </p>
              <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">
                Add some products to get started
              </p>
            </div>
          )}
        </div>

        {/* Footer with Total and Checkout */}
        {cartItems.length > 0 && (
          <div className="border-t border-gray-200 dark:border-gray-700 p-6 space-y-4">
            {/* Subtotal */}
            <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
              <span>Subtotal ({cartItems.length} items)</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>

            {/* Total */}
            <div className="flex justify-between items-center">
              <span className="text-lg font-gilroy font-bold">Total</span>
              <span className="text-2xl font-gilroy font-bold text-primary">
                ${totalPrice.toFixed(2)}
              </span>
            </div>

            {/* Buttons */}
            <div className="space-y-3">
              <button className="w-full py-3 bg-primary hover:bg-primary/90 text-white font-gilroy font-medium rounded-full transition-colors">
                Checkout
              </button>
              <button
                onClick={clearCart}
                className="w-full py-3 border border-gray-300 dark:border-gray-600 hover:border-red-500 hover:text-red-500 font-gilroy font-medium rounded-full transition-colors"
              >
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPopup;
