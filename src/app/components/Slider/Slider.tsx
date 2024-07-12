"use client"
import React, { useRef } from 'react';
import Card from '../Cards/Card';

const Sliders: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.children[0].getBoundingClientRect().width;
      carouselRef.current.scrollBy({
        left: -cardWidth,
        behavior: 'smooth',
      });
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.children[0].getBoundingClientRect().width;
      carouselRef.current.scrollBy({
        left: cardWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="w-full px-4 lg:px-8 relative overflow-hidden ">
      <div id="controls-carousel" className="relative w-full bg-slider-background-color px-4 py-2">
        {/* Carousel wrapper */}
        <div
          ref={carouselRef}
          className="flex gap-5 overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scroll-smooth scrollbar-hide"
        >
          {/* Item 1 */}
          <div className="snap-start mr-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/3 ">
            <Card />
          </div>
          {/* Item 2 */}
          <div className="snap-start mr-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/3">
            <Card />
          </div>
          {/* Item 3 */}
          <div className="snap-start mr-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/3">
            <Card />
          </div>
          {/* Item 4 */}
          <div className="snap-start mr-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/3">
            <Card />
          </div>
          {/* Item 5 */}
          <div className="snap-start mr-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/3">
            <Card />
          </div>
        </div>

        {/* Slider controls */}
        <button
          type="button"
          className="opacity-30 absolute top-1/2 left-0 z-30 flex items-center justify-center h-10 w-10 bg-white/30 dark:bg-gray-800/30 hover:bg-color-orange dark:hover:bg-gray-800/60 transform -translate-y-1/2 focus:outline-none"
          onClick={handlePrev}
        >
          <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
          </svg>
          <span className="sr-only">Previous</span>
        </button>

        <button
          type="button"
          className="absolute top-1/2 right-0 z-30 flex items-center justify-center h-10 w-10 bg-white/30 dark:bg-gray-800/30 hover:bg-color-orange dark:hover:bg-gray-800/60 transform -translate-y-1/2 focus:outline-none"
          onClick={handleNext}
        >
          <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
          </svg>
          <span className="sr-only">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Sliders;
