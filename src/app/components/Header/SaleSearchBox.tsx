import React from 'react'
import BedroomButtonDropdown from './BedroomButtonDropdown'
import LocationButtonDropdown from './LocationButtonDropdown'
import PropertyButtonDropdown from './PropertyButtonDropdown'
import RangeSlider from './RangeSlider'
import SubLocationButtonDropdown from './SubLocationButtonDropdown'

export default function SaleSearchBox() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 bg-[#F2F6F7] '>
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
                        <button className='bg-color-orange text-nowrap px-6 lg:px-10 py-4 lg:py-2 lg:h-16 font-poppins md:text-lg uppercase text-white'>Search Inventory</button>
                    </div>
                </div>
  )
}
