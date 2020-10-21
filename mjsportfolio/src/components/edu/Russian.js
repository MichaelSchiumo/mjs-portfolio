import React from 'react';
import tcnj from '../../images/tcnj-logo.png';

const Russian = () => {
  return (
    <div class='relative bg-gray-800 hover:bg-gray-700'>
      <div class='h-12 bg-white md:absolute md:h-full md:w-1/2'>
        <img
          class='w-1/2 h-1/2 object-cover ml-32 -mt-16'
          src={tcnj}
          alt='Support team'
        />
      </div>
      <div class='relative max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-8'>
        <div class='md:ml-auto md:w-1/2 md:pl-10'>
          <div class='text-base leading-6 font-semibold uppercase tracking-wider text-gray-300 italic'>
            Bachelor of Arts (2012-2016)
          </div>
          <h2 class='mt-2 text-white text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10 font-legal'>
            Russian Studies
          </h2>
          <div class='mt-3 text-lg leading-7 text-gray-300'>
            <div className='font-serif text-lg'>
              <ul class='list-disc'>
                <li>
                  Boren Scholar, Russian Language and International Business.
                </li>
                <li>Academic Excellence Award Winner, TCNJ</li>
                <li>
                  Russian Scholar Laureate, American Council of Teachers of
                  Russian
                </li>
                <li>Founder and President, TCNJ Russian Club</li>
              </ul>
            </div>
          </div>
          <div class='mt-8'>
            <div class='inline-flex rounded-md shadow'>
              put view button for resume
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Russian;
