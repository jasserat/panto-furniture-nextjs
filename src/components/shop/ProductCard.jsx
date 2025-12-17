'use client'

import { useContext } from 'react'
import { FiPlus } from "react-icons/fi";
import Rating from '@/components/Rating'
import { CartContext } from '@/context/CartContext';
import { getImgUrl } from '@/utils/getImgUrl';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div key={product.id} className="w-[268.09px] h-[492px] flex flex-col rounded-2xl overflow-hidden shadow-sm">
      <div className='bg-[#FAFAFA] h-[312px] flex items-center justify-center p-8'>
        <img
          src={getImgUrl(`${product.imageUrl}`)}
          alt={product.name}
          className="w-full h-full object-contain"
        />
      </div>

      <div className={`p-6 dark:bg-black bg-white flex-1 flex flex-col`}>
        <h4 className='text-base mb-1'>{product.category}</h4>
        <h3 className="font-semibold text-xl mb-2">{product.name}</h3>
        <Rating rating={product.rating} />
        <div className='mt-auto flex justify-between items-center'>
          <p className="text-secondary dark:text-white font-bold text-lg"><sup>$</sup> <span className=''>{product.price}</span></p>
          <button className='bg-secondary p-2 rounded-full text-white'
            onClick={() => addToCart(product)}
          >
            <FiPlus />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
