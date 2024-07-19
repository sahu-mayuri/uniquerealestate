import React, { useState } from 'react';

export default function PropertyHoverDropdown() {
  const propertyList = [
    { id: '1', name: 'Property' },
    { id: '2', name: 'Property Grid' },
    { id: '3', name: 'Property Left sidebar' },
    { id: '4', name: 'Property Right sidebar' }
  ];

  const propertyOtherList = [
    { id: '1', name: 'Cart' },
    { id: '2', name: 'Wishlist' },
    { id: '3', name: 'Checkout' },
    { id: '4', name: 'Order Tracking' },
    { id: '5', name: 'My Account' },
    { id: '6', name: 'Sign in' },
    { id: '7', name: 'Register' }
  ];

  const [showOtherPages, setShowOtherPages] = useState(false);

  const toggleOtherPages = () => {
    setShowOtherPages(!showOtherPages);
    const otherPageText = document.getElementById('otherpagetext');
    const otherPageIcon = document.getElementById('otherpageicon');
    if (otherPageText&&otherPageIcon) {
      otherPageText.style.color = '#FF5A3C';
      otherPageIcon.style.color = '#FF5A3C';
    } else {
      console.error('Element with ID "otherpagetext" not found.');
    }
  };

  const closeDropdown = () => {
    setShowOtherPages(false);
    const otherPageText = document.getElementById('otherpagetext');
    const otherPageIcon = document.getElementById('otherpageicon');
    if (otherPageText&&otherPageIcon) {
      otherPageText.style.color = '#6b7280';
      otherPageIcon.style.color = '#6b7280';
    } else {
      console.error('Element with ID "otherpagetext" not found.');
    }
  };

  return (
    <div>
      <div className="relative z-20 flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row">
        <div className="relative group" onMouseLeave={closeDropdown}>
          <div className="flex flex-row items-center w-full px-4 py-4 mt-2 text-base font-bold text-left bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat">
            <div className='flex flex-row items-center'>
              <a className="my-2 text-base xl:text-lg font-semibold text-white">
                Property
              </a>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3 text-white">
                  <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                </svg>
              </span>
            </div>  
          </div>
          <div className={`absolute z-10 ${showOtherPages ? 'block' : 'hidden'} animate-fadeIn top-20 bg-grey-200 group-hover:block`} onMouseLeave={closeDropdown}>
            <div className='w-full h-[0.340rem] bg-color-orange'></div>
            <div className="w-[15rem] pl-8 pt-6 pb-6 bg-white shadow-lg">
              <div className="grid grid-cols-1 gap-5 cursor-pointer">
                {propertyList.map((item) => (
                  <a key={item.id} className='text-gray-500 text-base font-headfont tracking-wider hover:text-color-orange'>
                    {item.name}
                  </a>
                ))}
                <div className="relative z-20 flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-start md:flex-row group">
                  <div className="flex flex-row items-center cursor-pointer " onMouseEnter={toggleOtherPages}>
                    <a id='otherpagetext' className='text-gray-500 text-base font-headfont tracking-wider '>
                      Other Pages 
                    </a>
                    <svg id='otherpageicon' className='text-gray-500 ms-14 ' stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z" />
                    </svg>
                  </div>
                  <div className={`absolute z-10 left-[13rem] ${showOtherPages ? 'block' : 'hidden'} bg-grey-200 animate-fadeIn`}>
                    <div className='w-full h-[0.340rem] bg-color-orange'></div>
                    <div className="w-[15rem] pl-8 pt-6 pb-6 bg-white shadow-lg">
                      <div className="grid grid-cols-1 gap-5 cursor-pointer">
                        {propertyOtherList.map((item) => (
                          <a key={item.id} className='text-gray-500 text-base font-headfont tracking-wider hover:text-color-orange'>
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
