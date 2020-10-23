import React from 'react';
import flatiron from '../../images/flatiron-logo.png';

const Flatiron = () => {
  return (
    <div class='relative bg-gray-800 hover:bg-gray-900 rounded-t-lg'>
      <div class='md:absolute md:h-full md:w-1/2 h-12'>
        <img
          class='object-contain w-full h-full fill-current p-4 -ml-12'
          src={flatiron}
          alt='Support team'
        />
      </div>
      <div class='relative max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-8'>
        <div class='md:ml-auto md:w-1/2 md:pl-10'>
          <div class='text-base leading-6 font-semibold uppercase tracking-wider text-gray-300 italic'>
            Software Engineering (2019-2020)
          </div>
          <h2 class='mt-2 text-white text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10 font-legal'>
            Full Stack Development
          </h2>
          <div class='mt-3 text-lg leading-7 text-gray-300'>
            <div className='font-serif text-lg'>
              <ul class='list-disc'>
                <li>Intensive Ruby and JavaScript Program</li>
                <li>
                  Built Original Web Applications utilizing JavaScript and Ruby
                </li>
              </ul>
            </div>
          </div>
          <div class='mt-8'>
            <div class='inline-flex rounded-md shadow'>
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
        </div>
      </div>
    </div>
  );
};

export default Flatiron;
