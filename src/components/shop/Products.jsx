'use client'

import { useContext, useState } from "react";
import { products } from "@/utils/products";
import ProductCard from "./ProductCard";
import { ThemeContext } from "@/context/ThemeContext";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Products = ({ headline }) => {
  const { isDarkMode } = useContext(ThemeContext);

  const categories = ["Chair", "Beds", "Sofa", "Lamp"];

  const [selectedCategory, setSelectedCategory] = useState("Chair");
  const [visibleProducts, setVisibleProducts] = useState(4);
  const [startIndex, setStartIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState('');

  // Filter products based on category
  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );

  const loadMoreProducts = () => {
    setVisibleProducts((prev) => prev + 4);
  };

  // Navigation handlers
  const handleNext = () => {
    if (startIndex + visibleProducts < filteredProducts.length && !isAnimating) {
      setSlideDirection('left');
      setIsAnimating(true);
      setTimeout(() => {
        setStartIndex((prev) => prev + 1);
        setIsAnimating(false);
        setSlideDirection('');
      }, 300);
    }
  };

  const handlePrevious = () => {
    if (startIndex > 0 && !isAnimating) {
      setSlideDirection('right');
      setIsAnimating(true);
      setTimeout(() => {
        setStartIndex((prev) => prev - 1);
        setIsAnimating(false);
        setSlideDirection('');
      }, 300);
    }
  };

  // Get current slice of products
  const currentProducts = filteredProducts.slice(startIndex, startIndex + visibleProducts);

  return (
    <div className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-secondary-bg'}`}>
      <div className="section-container">
        {/* Headline */}
        <h2 className="text-4xl font-bold text-center my-8 ">{headline}</h2>

        {/* Category Tabs */}
        <div className="bg-[#EEEEEE] max-w-md mx-auto sm:rounded-full md:p-2.5 py-5 mb-16">
          <div className="flex flex-col sm:flex-row items-center md:justify-between justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setVisibleProducts(4); // Reset product view count
                  setStartIndex(0); // Reset start index
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
          {startIndex > 0 && (
            <button
              onClick={handlePrevious}
              className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-primary text-secondary hover:text-white p-4 rounded-full shadow-lg border border-amber-50 transition-colors"
            >
              <FaChevronLeft className="text-xl" />
            </button>
          )}

          {/* Products Grid */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[42px] transition-all duration-300 justify-items-center ${
              slideDirection === 'left' ? 'opacity-0 translate-x-10' :
              slideDirection === 'right' ? 'opacity-0 -translate-x-10' :
              'opacity-100 translate-x-0'
            }`}
          >
            {currentProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>

          {/* Right Arrow */}
          {startIndex + visibleProducts < filteredProducts.length && (
            <button
              onClick={handleNext}
              className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-primary text-secondary hover:text-white p-4 rounded-full shadow-lg border border-amber-50 transition-colors"
            >
              <FaChevronRight className="text-xl" />
            </button>
          )}
        </div>

        {/* Load More Button */}
        {visibleProducts < filteredProducts.length && (
          <div className="flex justify-center items-center mt-8">
            <button
              onClick={loadMoreProducts}
              className="text-primary font-bold flex items-center px-4 py-2 rounded-full hover:text-white gap-1 hover:bg-secondary transition-colors"
            >
              View More
              <img src="/images/button-icon.png" alt="" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
