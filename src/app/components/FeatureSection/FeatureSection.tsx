"use client"
import React, { useState, useRef } from 'react'
import FeaturesCard from '../Cards/FeaturesCard'
import TopSection from '../FeedSection/TopSection'
import { FeatureCardDets } from '../Cards/Cards_details/FeatureCardDetails'


const FeatureSlider = () => {
  const [slideIndex, setSlideIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const curoselslides = FeatureCardDets.length; // total number of slides
  const slides = [...FeatureCardDets]

  // Move to the previous slide
  const handlePrevSlide = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.children[0].getBoundingClientRect().width;
      carouselRef.current.scrollBy({
        left: -cardWidth,
        behavior: 'smooth',
      });
      setSlideIndex((prevIndex) => (prevIndex - 1 + curoselslides) % curoselslides);
    }
  }

  // Move to the next slide
  const handleNextSlide = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.children[0].getBoundingClientRect().width;
      carouselRef.current.scrollBy({
        left: cardWidth,
        behavior: 'smooth',
      });
      setSlideIndex((prevIndex) => (prevIndex + 1) % curoselslides);
    }
  }

  // Move to a specific slide when a pagination button is clicked
  const handlePaginationClick = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.children[0].getBoundingClientRect().width;
      carouselRef.current.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth',
      });
      setSlideIndex(index);
    }
  }

  // Automatically move to the next slide every 5 seconds
  // useEffect(() => {
  //   const interval = setInterval(handleNextSlide, 5000);
  //   return () => clearInterval(interval);
  // }, [slideIndex]);

  return (
    <div>
      <TopSection top={'Properties'} bottom={'Feature Listing'} />
      <div id="slider" className='w-full px-4 lg:px-9'>
        <div id="sliding-div" className='group w-full relative bg-[#F9FAFB] lg:px-2'>
          <div ref={carouselRef} id="cards" className='w-full flex pb-2 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide'>
            {slides.map((items, index) => (
              <div
                key={index} // Add unique key here
                id={`box${index + 1}`}
                className={`snap-start w-full custom_small:w-[50%] custom_screen:w-[33.5%] shrink-0 ${
                  index === 0 ? 'pr-3' : index === curoselslides - 1 ? 'pl-3' : 'px-3'
                } bg-slider-background-color`} >
                <FeaturesCard 
                  url={items.url} 
                  purpose={items.purpose} 
                  location={items.location} 
                  price={items.price} 
                  text={items.text} 
                  Number_of_bedroom={items.Number_of_bedroom} 
                  Number_of_bathroom={items.Number_of_bathroom} 
                  owner_name={items.owner_name} 
                  isRent={items.isRent} 
                />
              </div>
            ))}
          </div>

          {/* Previous slide button */}
          <button
            type="button"
            className="opacity-0 bg-white/90 rounded-full absolute top-1/2 left-0 z-30 flex items-center justify-center size-12 dark:bg-gray-800/30 hover:bg-color-orange group-hover:opacity-100 dark:hover:bg-gray-800/60 transform -translate-y-1/2 focus:outline-none"
            onClick={handlePrevSlide}
          >
            <svg className="w-4 h-4 text-black dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
            </svg>
            <span className="sr-only">Previous</span>
          </button>

          {/* Next slide button */}
          <button
            type="button"
            className="group opacity-0 bg-white/90 rounded-full absolute top-1/2 right-0 z-30 flex items-center justify-center size-12 dark:bg-gray-800/30 hover:bg-color-orange group-hover:opacity-100 dark:hover:bg-gray-800/60 transform -translate-y-1/2 focus:outline-none"
            onClick={handleNextSlide}
          >
            <svg className="w-4 h-4 text-black dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
            </svg>
            <span className="sr-only">Next</span>
          </button>

          {/* Pagination buttons */}
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-5 items-center">
            {[...Array(curoselslides)].map((_, index) => (
              <a
                key={index} // Add unique key here
                onClick={() => handlePaginationClick(index)}
                className={`transition duration-500 ease-in-out rounded-full ${index === slideIndex ? 'bg-color-orange' : 'bg-gray-300'} ${index === slideIndex ? 'size-4' : 'size-3'} `}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureSlider;
