import React from 'react';
import logo from '../images/logo.png';

const Navbar = () => {
  return (
    <nav className='bg-gray-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center'>
            <div href='/' className='flex-shrink-0'>
              <a href='/'>
                <img
                  className='block lg:hidden h-8 w-auto'
                  src={logo}
                  alt='MJS logo'
                  href='/'
                />
              </a>
              <a href='/'>
                <img
                  className='hidden lg:block h-8 w-auto'
                  src={logo}
                  alt='MJS logo'
                  href='/'
                />
              </a>
            </div>
            <div className='hidden sm:block sm:ml-6'>
              <div className='flex'>
                <a
                  href='#'
                  className='px-3 py-2 rounded-md text-sm font-medium leading-5 text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out'
                >
                  About
                </a>
                <a
                  href='#'
                  className='ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out'
                >
                  Education
                </a>
                <a
                  href='#'
                  className='ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out'
                >
                  Projects
                </a>
                <a
                  href='#'
                  className='ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out'
                >
                  Blog
                </a>
              </div>
            </div>
          </div>
          <div className='hidden sm:ml-6 sm:block'>
            <div className='flex items-center'>
              <div className='ml-3 relative'>
                <div>
                  <button
                    className='flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out'
                    id='user-menu'
                    aria-label='User menu'
                    aria-haspopup='true'
                  ></button>
                </div>
              </div>
            </div>
          </div>
          <div className='-mr-2 flex sm:hidden'>
            {/* Mobile menu button */}
            <button
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out'
              aria-label='Main menu'
              aria-expanded='false'
            >
              {/* Icon when menu is closed. Heroicon name: menu Menu open: "hidden",
             Menu closed: "block" */}
              <svg
                className='block h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
              {/* Icon when menu is open. Heroicon name: x Menu open: "block", Menu
             closed: "hidden" */}
              <svg
                className='hidden h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu, toggle classNamees based on menu state. Menu open: "block", Menu
     closed: "hidden" */}
      <div className='hidden sm:hidden'>
        <div className='px-2 pt-2 pb-3'>
          <a
            href='#'
            className='block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out'
          >
            Dashboard
          </a>
          <a
            href='#'
            className='mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out'
          >
            Team
          </a>
          <a
            href='#'
            className='mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out'
          >
            Projects
          </a>
          <a
            href='#'
            className='mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out'
          >
            Calendar
          </a>
        </div>
        <div className='pt-4 pb-3 border-t border-gray-700'>
          <div className='flex items-center px-5'>
            <div className='flex-shrink-0'>
              <img
                className='h-10 w-10 rounded-full'
                src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                alt=''
              />
            </div>
            <div className='ml-3'>
              <div className='text-base font-medium leading-6 text-white'>
                Tom Cook
              </div>
              <div className='text-sm font-medium leading-5 text-gray-400'>
                tom@example.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
