"use client"
import React, { useState, useRef } from 'react'
import FeedbackCard from './FeedbackCard'

const FeedbackSlider = () => {
  const [slideIndex, setSlideIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const handlePrevSlide = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.children[0].getBoundingClientRect().width;
      carouselRef.current.scrollBy({
        left: -cardWidth,
        behavior: 'smooth',
      });
    }
  }

  const handleNextSlide = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.children[0].getBoundingClientRect().width;
      carouselRef.current.scrollBy({
        left: cardWidth,
        behavior: 'smooth',
      });
    }
  }

  const settings={
    Infinity:true
  }
  return (
    <div>
      <div id="slider" className='w-full px-4 lg:px-9 '>

        <div id="sliding-div" className='group w-full relative  bg-slider-background-color lg:px-2 '>

          <div ref={carouselRef} id="cards" className='w-full flex py-2 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide'>

            <div id="box1" className='snap-start w-full md:w-[50%] custom_screen:w-[34.15%] shrink-0 px-3 bg-slider-background-color '>
              <FeedbackCard name="Jacob William" role="SELLING AGENTS"></FeedbackCard>
            </div>
            <div id="box2" className='snap-start w-full md:w-[50%] custom_screen:w-[34.15%] shrink-0 px-3 bg-slider-background-color '>
              <FeedbackCard name="Jacob William" role="SELLING AGENTS"></FeedbackCard>
            </div>
            <div id="box3" className='snap-start w-full md:w-[50%] custom_screen:w-[34.15%] shrink-0 px-3 bg-slider-background-color '>
              <FeedbackCard></FeedbackCard>
            </div>
            <div id="box4" className='snap-start w-full md:w-[50%] custom_screen:w-[34.15%] shrink-0 px-3 bg-slider-background-color '>
              <FeedbackCard name="Jacob William" role="SELLING AGENTS"></FeedbackCard>
            </div>
            <div id="box5" className='snap-start w-full md:w-[50%] custom_screen:w-[34.15%] shrink-0 px-3 bg-slider-background-color '>
              <FeedbackCard name="Jacob William" role="SELLING AGENTS"></FeedbackCard>
            </div>
            <div id="box6" className='snap-start w-full md:w-[50%] custom_screen:w-[34.15%] shrink-0 px-3 bg-slider-background-color '>
              <FeedbackCard name="Jacob William" role="SELLING AGENTS"></FeedbackCard>
            </div>



            {/* Slider controls */}

          </div>
          <button
            type="button"
            className="opacity-0 bg-white/90 rounded-full absolute top-1/2 left-0 z-30 flex items-center justify-center size-12  dark:bg-gray-800/30 hover:bg-color-orange group-hover:opacity-100 dark:hover:bg-gray-800/60 transform -translate-y-1/2 focus:outline-none"
            onClick={handlePrevSlide}
          >
            <svg className="w-4 h-4 text-black dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
            </svg>
            <span className="sr-only">Previous</span>
          </button>

          <button
            type="button"
            className="group opacity-0 bg-white/90 rounded-full absolute top-1/2 right-0 z-30 flex items-center justify-center size-12  dark:bg-gray-800/30 hover:bg-color-orange group-hover:opacity-100 dark:hover:bg-gray-800/60 transform -translate-y-1/2 focus:outline-none"
            onClick={handleNextSlide}
          >
            <svg className="w-4 h-4 text-black  dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
            </svg>
            <span className="sr-only">Next</span>
          </button>

        </div>
      </div>
    </div>
  )
}

export default FeedbackSlider;