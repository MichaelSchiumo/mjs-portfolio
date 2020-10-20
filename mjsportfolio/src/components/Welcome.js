import React from 'react';
import title from '../images/title.gif';

const Welcome = () => {
  return (
    <div class='grid grid-cols-1 gap-4 justify-items-center p-2 h-36 mt-6 lg:p-0'>
      <img src={title} alt='' />
      <div className='bg-white'>
        <div className='max-w-screen-xl mx-auto py-16 px-4 sm:py-24 sm:px-6 sm:-mt-16 lg:px-8 lg:-mt-24'>
          <div className='text-center grid grid-cols-1'>
            <h1 className='text-base leading-6 font-bold text-indigo-600 tracking-wide uppercase text-xl'>
              Full Stack Engineer
            </h1>
            <p className='mt-1 text-4xl leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none sm:tracking-tight lg:text-5xl font-legal'>
              Building elegant solutions to complex problems.
            </p>
            <p className='max-w-xl mt-5 mx-auto text-xl leading-7 text-gray-500'></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
