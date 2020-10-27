import React from 'react';
import tcnj from '../images/tcnj-logo.png';
import flatiron from '../images/flatiron-logo.png';

const Education2 = () => {
  return (
    <div>
      <div class='text-center lg:mb-4 lg:mt-4'>
        <h2 class='text-4xl lg:text-5xl leading-9 tracking-tight font-extrabold text-gray-700  sm:leading-10 font-legal'>
          Education
        </h2>
      </div>
      <ul class='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
        <li class='col-span-1 flex flex-col text-center bg-white rounded-lg shadow justify-items-center'>
          <div class='flex-1 flex flex-col p-8'>
            <img
              class='w-40 h-40 flex-shrink-0 mx-auto bg-black rounded-full'
              src={flatiron}
              alt=''
            />
            <h3 class='mt-6 text-gray-900 text-xl leading-5 font-medium'>
              Full Stack Web Development
            </h3>
            <dl class='mt-2 flex-grow flex flex-col justify-between'>
              <dt class='sr-only'>Title</dt>
              <dd class='text-gray-700 text-xl leading-5'>2019 - 2020</dd>
            </dl>
          </div>
          <p className='text-gray-900 text-lg lg:mb-6'>
            Intensive Ruby and JavaScript Program
          </p>
          <div class='border-t border-gray-200'>
            <div class='inline-flex rounded-md shadow justify-items-center lg:mt-4 lg:mb-6'>
              <a
                class='
                bg-transparent
                hover:bg-blue-500
                text-blue-700
                font-semibold
                hover:text-white
                py-2
                px-4
                border
                border-blue-500
                hover:border-transparent
                rounded'
                href='/projects'
              >
                View Projects
              </a>
            </div>
          </div>
        </li>

        <li class='col-span-1 flex flex-col text-center bg-white rounded-lg shadow'>
          <div class='flex-1 flex flex-col p-8'>
            <img
              class='w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full object-contain'
              src=''
              alt=''
            />
            <h3 class='mt-6 text-gray-900 text-sm leading-5 font-medium'>
              Cody Fisher
            </h3>
            <dl class='mt-1 flex-grow flex flex-col justify-between'>
              <dt class='sr-only'>Title</dt>
              <dd class='text-gray-500 text-sm leading-5'>
                Lead Security Associate
              </dd>
              <dt class='sr-only'>Role</dt>
              <dd class='mt-3'>
                <span class='px-2 py-1 text-teal-800 text-xs leading-4 font-medium bg-teal-100 rounded-full'>
                  Admin
                </span>
              </dd>
            </dl>
          </div>
          <div class='border-t border-gray-200'>
            <div class='-mt-px flex'>
              <div class='w-0 flex-1 flex border-r border-gray-200'>
                <a
                  href='#'
                  class='relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150'
                >
                  <svg
                    class='w-5 h-5 text-gray-400'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                    <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
                  </svg>
                  <span class='ml-3'>Email</span>
                </a>
              </div>
              <div class='-ml-px w-0 flex-1 flex'>
                <a
                  href='#'
                  class='relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150'
                >
                  <svg
                    class='w-5 h-5 text-gray-400'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
                  </svg>
                  <span class='ml-3'>Call</span>
                </a>
              </div>
            </div>
          </div>
        </li>

        <li class='col-span-1 flex flex-col text-center bg-white rounded-lg shadow'>
          <div class='flex-1 flex flex-col p-8'>
            <img
              class='w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full'
              src='https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60'
              alt=''
            />
            <h3 class='mt-6 text-gray-900 text-sm leading-5 font-medium'>
              Esther Howard
            </h3>
            <dl class='mt-1 flex-grow flex flex-col justify-between'>
              <dt class='sr-only'>Title</dt>
              <dd class='text-gray-500 text-sm leading-5'>
                Assurance Administrator
              </dd>
              <dt class='sr-only'>Role</dt>
              <dd class='mt-3'>
                <span class='px-2 py-1 text-teal-800 text-xs leading-4 font-medium bg-teal-100 rounded-full'>
                  Admin
                </span>
              </dd>
            </dl>
          </div>
          <div class='border-t border-gray-200'>
            <div class='-mt-px flex'>
              <div class='w-0 flex-1 flex border-r border-gray-200'>
                <a
                  href='#'
                  class='relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150'
                >
                  <svg
                    class='w-5 h-5 text-gray-400'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                    <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
                  </svg>
                  <span class='ml-3'>Email</span>
                </a>
              </div>
              <div class='-ml-px w-0 flex-1 flex'>
                <a
                  href='#'
                  class='relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150'
                >
                  <svg
                    class='w-5 h-5 text-gray-400'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
                  </svg>
                  <span class='ml-3'>Call</span>
                </a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Education2;
