import React from 'react';
import tcnj from '../images/tcnj-logo.png';
import flatiron from '../images/flatiron-logo.png';
import tcnj2 from '../images/tcnj-logo-circle.png';

const Education2 = () => {
  return (
    <div className='lg:mb-4'>
      <div class='text-center mt-6 lg:mb-4 lg:mt-4'>
        <h2 class='text-4xl lg:text-5xl mb-2 leading-9 tracking-tight font-extrabold text-gray-700  sm:leading-10 font-legal lg:mb-0'>
          Education
        </h2>
      </div>
      <ul class='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:p-4'>
        <li class='col-span-1 flex flex-col text-center bg-white rounded-lg shadow justify-items-center border-solid border-4 border-gray-700 hover:bg-gray-300'>
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
          <div class='border-t border-gray-200'>
            <div class='inline-flex rounded-md shadow justify-items-center mb-10 lg:mt-4 lg:mb-6'>
              <a
                class='
                bg-transparent
                hover:bg-gray-800
                text-gray-700
                font-semibold
                hover:text-white
                py-2
                px-4
                border
                border-gray-700
                hover:border-transparent
                rounded'
                href='/projects'
              >
                View Projects
              </a>
            </div>
          </div>
        </li>

        <li class='col-span-1 flex flex-col text-center bg-white rounded-lg shadow justify-items-center border-solid border-4 border-gray-700 hover:bg-gray-300'>
          <div class='flex-1 flex flex-col p-8'>
            <img
              class='w-40 h-40 flex-shrink-0 mx-auto bg-black rounded-full'
              src={tcnj2}
              alt=''
            />
            <h3 class='mt-6 text-gray-900 text-xl leading-5 font-medium'>
              Bachelors of Science, Finance
            </h3>
            <dl class='mt-2 flex-grow flex flex-col justify-between'>
              <dt class='sr-only'>Title</dt>
              <dd class='text-gray-700 text-xl leading-5'>2012 - 2016</dd>
            </dl>
          </div>
          <div class='border-t border-gray-200'>
            <div class='inline-flex rounded-md shadow justify-items-center mb-10 lg:mt-4 lg:mb-6'>
              <a
                class='
                bg-transparent
                hover:bg-gray-800
                text-gray-700
                font-semibold
                hover:text-white
                py-2
                px-4
                border
                border-gray-700
                hover:border-transparent
                rounded'
                href='#'
              >
                View Achievements
              </a>
            </div>
          </div>
        </li>

        <li class='col-span-1 flex flex-col text-center bg-white rounded-lg shadow justify-items-center border-solid border-4 border-gray-700 hover:bg-gray-300'>
          <div class='flex-1 flex flex-col p-8'>
            <img
              class='w-40 h-40 flex-shrink-0 mx-auto bg-black rounded-full'
              src={tcnj2}
              alt=''
            />
            <h3 class='mt-6 text-gray-900 text-xl leading-5 font-medium'>
              Bachelors of Arts, Russian Studies
            </h3>
            <dl class='mt-2 flex-grow flex flex-col justify-between'>
              <dt class='sr-only'>Title</dt>
              <dd class='text-gray-700 text-xl leading-5'>2012 - 2016</dd>
            </dl>
          </div>
          <div class='border-t border-gray-200'>
            <div class='inline-flex rounded-md shadow justify-items-center mb-10 lg:mt-4 lg:mb-6'>
              <a
                class='
                bg-transparent
                hover:bg-gray-800
                text-gray-700
                font-semibold
                hover:text-white
                py-2
                px-4
                border
                border-gray-700
                hover:border-transparent
                rounded'
                href='#'
              >
                View Achievements
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Education2;
