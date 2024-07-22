import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { SetStateAction, useState } from 'react';

export default function SubLocationButtonDropdown() {
  const subLocationList = [{ id: '1', name: 'Sub Location' },
    { id: '2', name: 'Bayonne' },
    { id: '3', name: 'Greenville' },
    { id: '4', name: 'Manhattan' },
    { id: '5', name: 'Queens' },
    { id: '6', name: 'The Heights' },
    { id: '7', name: 'Upper East Side' },
    { id: '8', name: 'West Side' }]
    const [selectedSubLocation, setSelectedSubLocation] = useState(subLocationList[0]);

  const handleSubLocationSelect = (subLocation: SetStateAction<{ id: string; name: string; }>) => {
    setSelectedSubLocation(subLocation);
  };
  return (
    <Menu as="div" className="relative inline-block text-left w-full group">
      <div className='flex flex-row'>
        <MenuButton className="inline-flex w-full items-center text-nowrap bg-white px-3 py-4 text-base font-bold text-gray-900 ring-1 ring-inset ring-gray-300 focus:outline group-hover:outline group-hover:outline-blue-200 focus:outline-blue-200">
        <div className='flex flex-row items-center'>
        <svg className='size-4 mx-2 text-color-orange' stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path d="M510.37 254.79l-12.08-76.26a132.493 132.493 0 0 0-37.16-72.95l-54.76-54.75c-19.73-19.72-45.18-32.7-72.71-37.05l-76.7-12.15c-27.51-4.36-55.69.11-80.52 12.76L107.32 49.6a132.25 132.25 0 0 0-57.79 57.8l-35.1 68.88a132.602 132.602 0 0 0-12.82 80.94l12.08 76.27a132.493 132.493 0 0 0 37.16 72.95l54.76 54.75a132.087 132.087 0 0 0 72.71 37.05l76.7 12.14c27.51 4.36 55.69-.11 80.52-12.75l69.12-35.21a132.302 132.302 0 0 0 57.79-57.8l35.1-68.87c12.71-24.96 17.2-53.3 12.82-80.96zM176 368c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm32-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm160 128c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z">
    </path>
    </svg>
    {selectedSubLocation.name}
    </div>
          <div className='w-full flex justify-end'>
          <ChevronDownIcon aria-hidden="true" className="h-5 w-5 text-gray-800 " />
          </div>
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 w-full rounded-md border border-black/50 origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in "
      >
        <div className="py-1">
          {subLocationList.map((list) => <MenuItem>
            <a key={list.id}
              href="#"
              className="block pl-10 text-base font-poppins text-black data-[focus]:bg-blue-500 data-[focus]:text-white" onClick={() => handleSubLocationSelect(list)}>
              {list.name}
            </a>
          </MenuItem>)
          }
        </div>
      </MenuItems>
    </Menu>
  )
}
