'use client'

import { useContext, useState, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { products } from "@/utils/products";
import ProductCard from "./ProductCard";
import ProductsPopup from "./ProductsPopup";
import { ThemeContext } from "@/context/ThemeContext";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Products = ({ headline }) => {
  const { isDarkMode } = useContext(ThemeContext);
  const swiperRef = useRef(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const categories = ["Chair", "Beds", "Sofa", "Lamp"];

  const [selectedCategory, setSelectedCategory] = useState("Chair");

  // Filter products based on category
  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );

  return (
    <div className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-secondary-bg'}`}>
      <div className="section-container">
        {/* Headline */}
        <h2 className="text-5xl font-gilroy font-bold text-center my-8 ">{headline}</h2>

        {/* Category Tabs */}
        <div className="bg-[#EEEEEE] max-w-md mx-auto sm:rounded-full md:p-2.5 py-5 mb-16">
          <div className="flex flex-col sm:flex-row items-center md:justify-between justify-center gap-4 font-gilroy font-regular">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                }}
                className={`py-1.5 sm:px-5 px-8 rounded-full ${selectedCategory === category ? "bg-white " : " text-secondary"} hover:bg-primary hover:text-white transition-colors`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid with Navigation */}
        <div className="relative mx-auto max-w-fit overflow-visible">
          {/* Left Arrow */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-primary text-secondary hover:text-white p-4 rounded-full shadow-lg border border-amber-50 transition-colors"
          >
            <FaChevronLeft className="text-xl" />
          </button>

          {/* Products Grid */}
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            slidesPerView={1}
            spaceBetween={42}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 42,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 42,
              },
            }}
            modules={[Autoplay]}
            className="overflow-hidden"
            style={{ width: 'calc(4 * 270px + 3 * 42px)', maxWidth: '100%' }}
          >
            {filteredProducts.map((product, index) => (
              <SwiperSlide key={index}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Right Arrow */}
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-primary text-secondary hover:text-white p-4 rounded-full shadow-lg border border-amber-50 transition-colors"
          >
            <FaChevronRight className="text-xl" />
          </button>
        </div>

        {/* View More Button */}
        <div className="flex justify-center items-center mt-8">
          <button
            onClick={() => setIsPopupOpen(true)}
            className="text-primary font-gilroy font-medium flex items-center px-4 py-2 rounded-full hover:text-white gap-1 hover:bg-secondary transition-colors"
          >
            View More
            <img src="/images/button-icon.png" alt="" />
          </button>
        </div>

        {/* Products Popup */}
        <ProductsPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
      </div>
    </div>
  );
};

export default Products;
