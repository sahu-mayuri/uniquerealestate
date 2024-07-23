import React from 'react'
import BedroomButtonDropdown from './BedroomButtonDropdown'
import LocationButtonDropdown from './LocationButtonDropdown'
import PropertyButtonDropdown from './PropertyButtonDropdown'
import RangeSlider from './RangeSlider'
import SubLocationButtonDropdown from './SubLocationButtonDropdown'
import { gsap } from 'gsap';
export default function SaleSearchBox() {

    // function handleButton(){
    //     console.log("hello")
    //     gsap.to(".buttonBox", {duration:0.5 , width:0,padding:0 })
    // }
    // function handleLeave(){
    //     console.log("hello")
    //     gsap.to(".buttonBox", {duration:0.5 , width:'auto' ,padding:0 })
    // }
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 bg-[#F2F6F7] animate-pulse '>
                    <div className='m-4'>
                        <PropertyButtonDropdown />
                    </div>
                    <div className='m-4'>
                        <LocationButtonDropdown />
                    </div>
                    <div className='m-4'>
                        <SubLocationButtonDropdown />
                    </div>
                    <div className='m-4'>
                        <BedroomButtonDropdown />
                    </div>
                    <div className='m-4'>
                        <input className='w-full py-4 text-gray-500 outline outline-1 outline-gray-300 p-5 shadow-xs focus:outline-color-orange focus:outline-1' type='text' placeholder='Min Size (in Sqft)' />
                    </div>
                    <div className='m-4'>
                        <input className='w-full py-4 text-gray-500 outline outline-1 outline-gray-300 p-5 shadow-xs focus:outline-color-orange focus:outline-1' type='text' placeholder='Max Size (in Sqft)' />
                    </div>
                    <div className='col-span-1 md:col-span-2 lg:col-span-3 m-4 pb-8 pt-2'>
                        <RangeSlider />
                    </div>
                    <div className='col-span-1 md:col-span-2 lg:col-span-3 content-center mb-4 flex justify-center'>
                        <button className='relative bg-color-orange text-nowrap px-6 lg:px-10 py-4 lg:py-2 lg:h-16 font-poppins md:text-lg uppercase text-white hover:text-black hover:bg-white hover:outline hover:outline-1'>Search Inventory</button>
                        {/* <div className='bg-black absolute z-20 text-nowrap px-6 lg:px-10 py-4 lg:py-2 lg:h-16 font-poppins md:text-lg uppercase text-black buttonBox' onMouseEnter={handleButton} onMouseLeave={handleLeave}>Search Inventory</div> */}
                    </div>
                </div>
  )
}
