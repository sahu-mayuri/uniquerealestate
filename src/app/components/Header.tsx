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


export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const homeList = [
    { id: '1', name: 'Home Style 01' },
    { id: '2', name: 'Home Style 02' },
    { id: '3', name: 'Home Style 03' },
    { id: '4', name: 'Home Style 04' },
    { id: '5', name: 'Home Style 05' },
    { id: '6', name: 'Home Style 06' },
  ];
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  
  const toggleDropdown = () => {
    setIsHomeDropdownOpen(!isHomeDropdownOpen);
  };

  const closeDropdown = () => {
    setIsHomeDropdownOpen(false);
  };
  return (
    <header >
      <nav className="w-full px-2 flex items-center justify-between py-1 lg:py-6 lg:px-4" aria-label="Global">
        <div className="flex pt-6 px-2 md:pt-0 md:px-0">

          <a href="#" className="lg:ms-24">
            
              <img src='https://quarter-nextjs.vercel.app/img/logo-2.png' />
            
        
          </a>
        </div>
        <div className="flex pt-6 px-3 lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-12 w-12 bg-white text-black p-3" aria-hidden="true" />
            {/* Insert your Bars3Icon component or icon here */}
          </button>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-10 lg:mr-24 ">
        
            
            
                <div className='flex flex-row items-center'>
              <a className="my-2 text-lg font-bold font-bodyfont text-white">
                Home
              </a>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3 text-white">
                  <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                </svg></span>
                </div>    
                
            
             
          
          <div className='flex flex-row items-center'>
              <a className="my-2 text-lg font-bold font-bodyfont text-white">
                About
              </a>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3 text-white">
                  <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                </svg></span>
            </div>
            
            <div className='flex flex-row items-center'>
              <a className=" my-2 text-lg font-bold font-bodyfont text-white">
                Property
              </a>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3 text-white">
                  <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                </svg></span>
            </div>
            
            <div className='flex flex-row items-center'>
              <a className="my-2 text-lg font-bold font-bodyfont text-white">
                News
              </a>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3 text-white">
                  <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                </svg></span>
            </div>
            
            <div className='flex flex-row items-center'>
              <a className="my-2 text-lg font-bold font-bodyfont text-white">
                Pages
              </a>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3 text-white">
                  <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                </svg></span>
            </div>
            
            <div className='flex items-center'>
              <a className="my-2 text-lg font-bold font-bodyfont text-white">
                Contact
              </a>
            </div>
            <div className='flex items-center'>
              <button className='my-2 text-lg font-bold font-bodyfont text-white bg-color-orange px-7 py-3 hover:text-black hover:bg-white'>Add Listing</button>
            </div>
        </div>
      </nav>
      <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
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