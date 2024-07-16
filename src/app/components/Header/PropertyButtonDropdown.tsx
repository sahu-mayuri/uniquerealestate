import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function PropertyButtonDropdown() {
  const propertylist = [{ id: '1', name: 'Property Type' },
  { id: '2', name: 'Apartment' },
  { id: '3', name: 'Co-op' },
  { id: '4', name: 'Condo' },
  { id: '5', name: 'Single Family Home' }]

  return (
    <Menu as="div" className="relative inline-block text-left w-full group">
      <div className='flex flex-row'>
        <MenuButton className="inline-flex w-full items-center text-nowrap bg-white px-3 py-4 text-base font-bold text-gray-900 ring-1 ring-inset ring-gray-300 focus:outline group-hover:outline group-hover:outline-blue-200 focus:outline-blue-200">
          <svg className='size-5 md:size-6 mx-2 text-color-orange' stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z">
            </path>
          </svg>
          Property Type
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
          {propertylist.map((list) => <MenuItem>
            <a
              href="#"
              className="block pl-10 text-base font-poppins text-black data-[focus]:bg-blue-500 data-[focus]:text-white" key={list.id}>
              {list.name}
            </a>
          </MenuItem>)
          }
        </div>
      </MenuItems>
    </Menu>
  )
}
