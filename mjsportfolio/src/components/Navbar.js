import React from 'react';
import logo from '../images/logo.png';

const Navbar = () => {
  return (
    <nav className='bg-gray-800'>
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
        <div className='relative flex items-center justify-between h-16'>
          <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
            <button
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out'
              aria-label='Main menu'
              aria-expanded='false'
            >
              <svg
                className='block h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
              <svg
                className='hidden h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
          <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
            <div className='flex-shrink-0'>
              <a href='/'>
                <img
                  className='block lg:hidden h-8 w-auto'
                  src={logo}
                  alt='logo'
                />
              </a>
              <a href='/'>
                <img
                  className='hidden lg:block h-8 w-auto'
                  src={logo}
                  alt='logo'
                />
              </a>
            </div>
            <div className='hidden sm:block sm:ml-6'>
              <div className='flex'>
                <a
                  href='#'
                  className='px-3 py-2 rounded-md text-sm font-medium leading-5 text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out'
                >
                  Home
                </a>
                <a
                  href='/education'
                  className='ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out'
                >
                  Education
                </a>
                <a
                  href='/projects'
                  className='ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out'
                >
                  Projects
                </a>
                <a
                  href='#'
                  className='ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out'
                >
                  Calendar
                </a>
              </div>
            </div>
          </div>
          <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
            <div className='ml-3 relative'>
              <div>
                <button
                  className='flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out'
                  id='user-menu'
                  aria-label='User menu'
                  aria-haspopup='true'
                ></button>
              </div>

              <div className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg'></div>
            </div>
          </div>
        </div>
      </div>
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
      </div>
    </nav>
  );
};

export default Navbar;
