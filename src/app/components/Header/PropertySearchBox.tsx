import React from 'react'
import TabHome from './TabHome'
import LocationButtonDropdown from './LocationButtonDropdown'
import PropertyButtonDropdown from './PropertyButtonDropdown'
import SubLocationButtonDropdown from './SubLocationButtonDropdown'
import BedroomButtonDropdown from './BedroomButtonDropdown'

export default function PropertySearchBox() {
  return (
    <div className='px-4 mt-5'>
        <div className='flex flex-col w-full px-24 gap-2'>
            <div className='flex flex-row gap-2'>
                <TabHome name={'rent home'}/>
                <TabHome name={'Sale home'}/>    
            </div>
            <div className='grid grid-cols-3 bg-[#F2F6F7] '>
                <div className='ms-9 mt-9'>
                    <PropertyButtonDropdown/>
                </div>
                <div className='ms-9 mt-9'>
                    <LocationButtonDropdown/>
                </div>
                <div className='ms-9 mt-9 me-9'>
                    <SubLocationButtonDropdown/>
                </div>
                <div className='ms-9 mt-9 mb-9'>
                    <BedroomButtonDropdown/>
                </div>
                <div className='ms-9 mt-9 mb-9'>
                    <input className='w-full py-5 outline outline-1 outline-gray-300 p-5 shadow-xs focus:outline-color-orange focus:outline-1' type='text' placeholder='Min Size (in Sqft)'/>
                </div>
                <div className='ms-9 mt-9 me-9 mb-9'>
                    <input className='w-full py-5 outline outline-1 outline-gray-300 p-5 shadow-xs focus:outline-color-orange focus:outline-1'  type='text' placeholder='Max Size (in Sqft)'/>
                </div>
                <div className='col-span-3 content-center mb-9 flex justify-center'>
                    <button className='bg-orange-600 text-nowrap px-2 lg:px-10 lg:py-2 pb-2 lg:h-16 pt-2.5 text-xs font-poppins md:text-lg uppercase text-white'>Search Inventory</button>
                </div>
            </div>
        </div>
    </div>
  )
}
