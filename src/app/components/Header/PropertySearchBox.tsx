import React from 'react'
import TabHome from './TabHome'
import LocationButtonDropdown from './LocationButtonDropdown'
import PropertyButtonDropdown from './PropertyButtonDropdown'
import SubLocationButtonDropdown from './SubLocationButtonDropdown'
import BedroomButtonDropdown from './BedroomButtonDropdown'
import RangeSlider from './RangeSlider'

export default function PropertySearchBox() {
  return (
    <div className='px-2 lg:px-4 mt-24 lg:mt-5'>
        <div className='flex flex-col w-full px-1 min-[520px]:px-12 md:px-12 lg:px-24 gap-2'>
            <div className='flex max-[370px]:flex-col flex-row gap-2'>
                <TabHome name={'rent home'}/>
                <TabHome name={'Sale home'}/>    
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 bg-[#F2F6F7] '>
                <div className='m-4'>
                    <PropertyButtonDropdown/>
                </div>
                <div className='m-4'>
                    <LocationButtonDropdown/>
                </div>
                <div className='m-4'>
                    <SubLocationButtonDropdown/>
                </div>
                <div className='m-4'>
                    <BedroomButtonDropdown/>
                </div>
                <div className='m-4'>
                    <input className='w-full py-4 text-gray-500 outline outline-1 outline-gray-300 p-5 shadow-xs focus:outline-color-orange focus:outline-1' type='text' placeholder='Min Size (in Sqft)'/>
                </div>
                <div className='m-4'>
                    <input className='w-full py-4 text-gray-500 outline outline-1 outline-gray-300 p-5 shadow-xs focus:outline-color-orange focus:outline-1'  type='text' placeholder='Max Size (in Sqft)'/>
                </div>
                <div className='col-span-3 m-4 pb-8 pt-2'>
                    <RangeSlider/>
                </div>
                <div className='col-span-1 md:col-span-2 lg:col-span-3 content-center mb-4 flex justify-center'>
                    <button className='bg-color-orange text-nowrap px-6 lg:px-10 py-4 lg:py-2 lg:h-16 font-poppins md:text-lg uppercase text-white'>Search Inventory</button>
                </div>
            </div>
        </div>
    </div>
  )
}
