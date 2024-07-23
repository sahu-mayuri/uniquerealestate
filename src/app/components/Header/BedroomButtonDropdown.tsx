import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { SetStateAction, useState } from 'react';

export default function BedroomButtonDropdown() {
  const bedroomList = [{ id: '1', name: 'Bedrooms' },
    { id: '2', name: '1' },
    { id: '3', name: '2' },
    { id: '4', name: '3' },
    { id: '5', name: '4' }]
    const [selectedBedroom, setSelectedBedroom] = useState(bedroomList[0]);

  const handleBedroomSelect = (bedroom: SetStateAction<{ id: string; name: string; }>) => {
    setSelectedBedroom(bedroom);
  };
  return (
    <Menu as="div" className="relative inline-block text-left w-full group">
      <div className='flex flex-row'>
        <MenuButton className="inline-flex w-full items-center text-nowrap bg-white px-3 py-4 text-base font-bold text-gray-900 ring-1 ring-inset ring-gray-300 focus:outline group-hover:outline group-hover:outline-blue-200 focus:outline-blue-200">
        <div className='flex flex-row items-center'>
        <svg className='size-4 mx-2 text-color-orange' stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M208 320h384c8.8 0 16-7.2 16-16V48c0-8.8-7.2-16-16-16H448v128l-48-32-48 32V32H208c-8.8 0-16 7.2-16 16v256c0 8.8 7.2 16 16 16zm416 64H128V16c0-8.8-7.2-16-16-16H16C7.2 0 0 7.2 0 16v32c0 8.8 7.2 16 16 16h48v368c0 8.8 7.2 16 16 16h82.9c-1.8 5-2.9 10.4-2.9 16 0 26.5 21.5 48 48 48s48-21.5 48-48c0-5.6-1.2-11-2.9-16H451c-1.8 5-2.9 10.4-2.9 16 0 26.5 21.5 48 48 48s48-21.5 48-48c0-5.6-1.2-11-2.9-16H624c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16z" /><svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M208 320h384c8.8 0 16-7.2 16-16V48c0-8.8-7.2-16-16-16H448v128l-48-32-48 32V32H208c-8.8 0-16 7.2-16 16v256c0 8.8 7.2 16 16 16zm416 64H128V16c0-8.8-7.2-16-16-16H16C7.2 0 0 7.2 0 16v32c0 8.8 7.2 16 16 16h48v368c0 8.8 7.2 16 16 16h82.9c-1.8 5-2.9 10.4-2.9 16 0 26.5 21.5 48 48 48s48-21.5 48-48c0-5.6-1.2-11-2.9-16H451c-1.8 5-2.9 10.4-2.9 16 0 26.5 21.5 48 48 48s48-21.5 48-48c0-5.6-1.2-11-2.9-16H624c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16z">
    </path></svg></svg>
          {selectedBedroom.name}
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
          {bedroomList.map((list) => <MenuItem key={list.id} >
            <a
              href="#"
              className="block pl-10 text-base font-poppins text-black data-[focus]:bg-blue-500 data-[focus]:text-white" onClick={() => handleBedroomSelect(list)}>
              {list.name}
            </a>
          </MenuItem>)
          }
        </div>
      </MenuItems>
    </Menu>
  )
}
