'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import Rating from '@/components/Rating';
import { reviews } from '@/utils/reviews';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="section-container px-8">
      {/* Subheading and Heading */}
      <div className="text-center mb-12">
        <p className="text-primary uppercase tracking-wide">Testimonials</p>
        <h2 className="text-4xl font-bold">What Our Clients Say</h2>
      </div>

      <div className="relative mx-auto max-w-fit max-h-5/6 overflow-visible">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          navigation={{
            prevEl: '.testimonial-swiper-button-prev',
            nextEl: '.testimonial-swiper-button-next',
          }}
          modules={[Pagination, Autoplay, Navigation]}
          className="md:max-w-7xl mx-auto relative rounded pb-12"
        >
        {
          reviews.map((review, index) => (
            <SwiperSlide key={index} className='bg-no-repeat bg-cover rounded-lg' style={{ backgroundImage: `url(${review.coverImg})` }}>
              <div className="md:h-[547px] flex justify-center items-center mb-4">
                <div className='mt-16 mb-5 bg-white -bottom-16 border rounded-xl md:w-4/5 w-full p-4 relative'>
                  <img
                    src={review.image}
                    alt={review.name}
                    className="size-16 absolute -top-8 left-1/2 -translate-x-1/2 rounded-full object-cover border-4 border-white"
                  />
                  <div className='mt-10 text-center'>
                    <h3 className="text-lg font-bold dark:text-black">{review.name}</h3>
                    <p className="text-sm text-gray-600 mb-4 dark:text-gray-600">{review.role}</p>
                    <p className='text-sm text-gray-600 dark:text-gray-600 mb-4'>"{review.review}"</p>

                    <div className='w-full mx-auto flex items-center justify-center text-center'>
                      <Rating rating={review.rating} />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))
        }
        </Swiper>

        {/* Navigation Buttons */}
        <button className="testimonial-swiper-button-prev absolute -left-3 top-1/2 -translate-y-[250%] z-10 bg-white hover:bg-primary text-secondary hover:text-white p-4 rounded-full shadow-lg border border-amber-50 transition-colors">
          <FaChevronLeft className="text-xl" />
        </button>
        <button className="testimonial-swiper-button-next absolute -right-3 top-1/2 -translate-y-[250%] z-10 bg-white hover:bg-primary text-secondary hover:text-white p-4 rounded-full shadow-lg border border-amber-50 transition-colors">
          <FaChevronRight className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
