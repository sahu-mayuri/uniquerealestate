import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function LocationButtonDropdown() {
  return (
    <Menu as="div" className="relative inline-block text-left w-full">
      <div>
        <MenuButton className="inline-flex w-full items-center bg-white px-3 py-5 text-base font-bold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
        <svg className='me-2 ms-2 text-color-orange' stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 480 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
  <path d="M438.66 212.33l-11.24-28.1-19.93-49.83C390.38 91.63 349.57 64 303.5 64h-127c-46.06 0-86.88 27.63-103.99 70.4l-19.93 49.83-11.24 28.1C17.22 221.5 0 244.66 0 272v48c0 16.12 6.16 30.67 16 41.93V416c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h256v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-54.07c9.84-11.25 16-25.8 16-41.93v-48c0-27.34-17.22-50.5-41.34-59.67zm-306.73-54.16c7.29-18.22 24.94-30.17 44.57-30.17h127c19.63 0 37.28 11.95 44.57 30.17L368 208H112l19.93-49.83zM80 319.8c-19.2 0-32-12.76-32-31.9S60.8 256 80 256s48 28.71 48 47.85-28.8 15.95-48 15.95zm320 0c-19.2 0-48 3.19-48-15.95S380.8 256 400 256s32 12.76 32 31.9-12.8 31.9-32 31.9z">
  </path>
</svg>

          Location
          <ChevronDownIcon aria-hidden="true" className="ml-24 h-5 w-5 text-gray-800 " />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 w-full origin-top-right  bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              chicago
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              London
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Los Angeles
            </a>
          </MenuItem>
          <form action="#" method="POST">
            <MenuItem>
              <button
                type="submit"
                className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              >
                New York
              </button>
            </MenuItem>
          </form>
        </div>
      </MenuItems>
    </Menu>
  )
}
