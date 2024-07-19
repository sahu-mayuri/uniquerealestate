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
  const [homeSubMenu,setHomeSubMenu]=useState(false)
  const homeList = [
    { id: '1', name: 'Home Style 01' },
    { id: '2', name: 'Home Style 02' },
    { id: '3', name: 'Home Style 03' },
    { id: '4', name: 'Home Style 04' },
    { id: '5', name: 'Home Style 05' },
    { id: '6', name: 'Home Style 06' },
    { id: '7', name: 'Home Style 07' },
    { id: '8', name: 'Home Style 08' },
    { id: '9', name: 'Home Style 09' },
    { id: '10', name: 'Home Style 10' },
    { id: '11', name: 'Home Style 11' },
  ];
  function handleSubMenu(){
    setHomeSubMenu(!homeSubMenu)
  }

  return (
    <header >
      <nav className="w-full px-2 flex items-center justify-between py-1 lg:py-6 lg:px-4" aria-label="Global">
        <div className="flex pt-6 px-1 min-[520px]:px-12 md:px-12 lg:px-24 custom_screen:pt-0">
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
            <HomeHoverDropdown />
          </div>

          <div className='cursor-pointer'>
            <AboutHoverDropdown />
          </div>
          <div className='cursor-pointer'>
            <PropertyHoverDropdown />
          </div>

          <div className='cursor-pointer'>
            <NewsHoverDropdown />
          </div>
          <div>
            <PagesHoverDropdown />
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
      <Dialog className="custom_screen:hidden bg-green-300" open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
        <div className="overflow-y-auto fixed inset-0 z-10 bg-white inset-y-0 left-0 w-[20rem] md:w-[25rem] transform ease-in-out transition-all duration-1000" style={{ transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(-100%)' }}>
          <div className='flex flex-col px-8 py-10 gap-6'>
            <div className='flex flex-row items-center'>
              <div className='w-[70%] '>
                <a href="#" >
                  <img className='w-full' src='https://quarter-nextjs.vercel.app/img/logo.png' />
                </a>
              </div>
              <div className='w-[30%] flex justify-end'>
                <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  {/* Insert your XMarkIcon component or icon here */}
                </button>
                </div>
            </div>
            <hr></hr>
            <div >
              <div className='flex flex-row items-center'>
                <input type='text' placeholder='Search...' className='w-full relative text-gray-600 outline outline-1 outline-gray-300 px-5 py-4 shadow-xs focus:outline-color-orange focus:outline-1 outline-none ' />
                <svg className='absolute right-10 cursor-pointer' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z">
                  </path>
                </svg>
              </div>
            </div>
            <div>
              <div className='flex flex-row items-center'>
                <a className='text-gray-500 hover:animate-rotate_90'>Home</a>
                <div className='flex w-full justify-end '>
                <button onClick={handleSubMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 relative active:animate-rotate_90 focus:animate-rotate_90">
                  <path fillRule="evenodd" d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                </svg>
                </button>
                </div>
              </div>
             {homeSubMenu && <div className='flex flex-col gap-4 pt-4 pl-4'>
                {homeList.map((list)=>
                <a key={list.id} className='text-gray-500 text-sm font-nunito tracking-wider'>{list.name}</a>
                )}
              </div>}
            </div>
            
            <div>
              <div className='flex flex-row items-center'>
                <a className='text-gray-500'>About</a>
              </div>
            </div>
            <div>
              <div className='flex flex-row items-center'>
                <a className='text-gray-500'>Property</a>
              </div>
            </div>
          </div>
        </div>

      </Dialog>
    </header>

  )
}