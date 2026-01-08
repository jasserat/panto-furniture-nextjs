'use client'

import { useContext } from 'react';
import { FiPlus } from 'react-icons/fi';
import { CartContext } from '@/context/CartContext';
import { getImgUrl } from '@/utils/getImgUrl';
import Rating from '@/components/Rating';

// Component to highlight matching text
const HighlightText = ({ text, highlight }) => {
  if (!highlight.trim()) {
    return <span>{text}</span>;
  }

  const regex = new RegExp(`(${highlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  const parts = text.split(regex);

  return (
    <span>
      {parts.map((part, index) =>
        regex.test(part) ? (
          <mark key={index} className="bg-primary/30 text-inherit rounded px-0.5">
            {part}
          </mark>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </span>
  );
};

const PopupProductCard = ({ product, searchQuery }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="w-full h-full flex flex-col rounded-xl overflow-hidden shadow-sm bg-white dark:bg-gray-800 hover:shadow-md transition-shadow">
      <div className="bg-[#FAFAFA] dark:bg-gray-700 h-[180px] flex items-center justify-center p-4">
        <img
          src={getImgUrl(`${product.imageUrl}`)}
          alt={product.name}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="p-4 flex-1 flex flex-col">
        <h4 className="text-xs text-gray-400 mb-1">
          <HighlightText text={product.category} highlight={searchQuery} />
        </h4>
        <h3 className="font-semibold text-sm mb-1 dark:text-white">
          <HighlightText text={product.name} highlight={searchQuery} />
        </h3>
        <Rating rating={product.rating} />
        <div className="mt-auto flex justify-between items-center pt-2">
          <p className="text-secondary dark:text-white font-bold text-sm">
            <sup>$</sup>{' '}
            <HighlightText text={product.price.toString()} highlight={searchQuery} />
          </p>
          <button
            className="bg-secondary hover:bg-primary p-1.5 rounded-full text-white transition-colors"
            onClick={() => addToCart(product)}
          >
            <FiPlus className="text-sm" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupProductCard;
