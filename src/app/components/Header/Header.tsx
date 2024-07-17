'use client'
import { useState } from 'react'
import {
  Dialog,
  DialogPanel
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import HomeHoverDropdown from './HomeHoverDropdown'
import AboutHoverDropdown from './AboutHoverDropdown'
import NewsHoverDropdown from './NewsHoverDropdown'
import PropertyHoverDropdown from './PropertyHoverDropDown'
import PagesHoverDropdown from './PagesHoverDropdown'


export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  return (
    <header >
      <nav className="w-full px-2 flex items-center justify-between py-1 lg:py-6 lg:px-4" aria-label="Global">
        <div className="flex pt-6 px-1 min-[520px]:px-12 md:px-12 lg:px-24 custom_screen:pt-0">
        {/* <div className="flex pt-6 px-2 md:pt-0 md:px-0"></div> */}
          <a href="#" >
            
              <img src='https://quarter-nextjs.vercel.app/img/logo-2.png' />
            
        
          </a>
        </div>
        <div className="flex pt-6 px-1 min-[520px]:px-12 lg:px-24 custom_screen:pt-0 custom_screen:hidden">
          <button
            type="button"
            className="-m-4 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-12 w-12 bg-white text-black p-3" aria-hidden="true" />
            {/* Insert your Bars3Icon component or icon here */}
          </button>
        </div>
        <div className="hidden custom_screen:flex custom_screen:flex-1 custom_screen:justify-end custom_screen:gap-x-9 xl:gap-x-10 custom_screen:mr-24 ">
        
            <div className='cursor-pointer'>
              <HomeHoverDropdown/>
            </div>
                
                <div className='cursor-pointer'>
              <AboutHoverDropdown/>
            </div>
            <div className='cursor-pointer'>
              <PropertyHoverDropdown/>
            </div>

            <div className='cursor-pointer'>
              <NewsHoverDropdown/>
            </div>
            <div>
              <PagesHoverDropdown/>
            </div>
            
            <div className='flex items-center cursor-pointer'>
              <a className="my-2 text-base xl:text-lg  font-semibold text-white">
                Contact
              </a>
            </div>
            <div className='flex items-center cursor-pointer'>
              <button className='my-2 text-sm font-semibold text-nowrap text-white bg-color-orange px-7 py-3 hover:text-black hover:bg-white'>Add Listing</button>
            </div>
            
        </div>
      </nav>
      <Dialog className="custom_screen:hidden" open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <div className='flex flex-row items-center ms-5'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-10 text-orange-600">
                  <path d="M19.006 3.705a.75.75 0 1 0-.512-1.41L6 6.838V3a.75.75 0 0 0-.75-.75h-1.5A.75.75 0 0 0 3 3v4.93l-1.006.365a.75.75 0 0 0 .512 1.41l16.5-6Z" />
                  <path fillRule="evenodd" d="M3.019 11.114 18 5.667v3.421l4.006 1.457a.75.75 0 1 1-.512 1.41l-.494-.18v8.475h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3v-9.129l.019-.007ZM18 20.25v-9.566l1.5.546v9.02H18Zm-9-6a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75H9Z" clipRule="evenodd" />
                </svg>
                <span className='text-black font-bold text-2xl px-2'>Unique Real Estate</span>
              </div>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              {/* Insert your XMarkIcon component or icon here */}
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  Features
                </a>
                <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  Marketplace
                </a>
                <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  Company
                </a>
              </div>
              <div className="py-6">
                <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
      {/* </div> */}
    </header>

  )
}