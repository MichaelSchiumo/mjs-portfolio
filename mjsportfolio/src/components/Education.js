import React from 'react';
import Finance from './edu/Finance.js';
import Russian from './edu/Russian.js';
import Flatiron from './edu/Flatiron.js';

const Education = () => {
  return (
    <div className='justify-items-center'>
      <div
        id='container'
        class='grid grid-cols-1 gap-4 justify-items-center p-2 h-36 mt-6 lg:p-0'
      >
        <div className='bg-white -mb-10'>
          <div className='lg:w-3/4 mx-auto py-16 px-4 sm:py-24 sm:px-6 sm:-mt-16 lg:px-8 lg:-mt-24'>
            <div className='text-center grid grid-cols-1'>
              <blockquote className='mt-1 text-xl leading-6 font-extrabold text-gray-900 sm:leading-none sm:tracking-tight lg:text-2xl font-legal italic'>
                “Education is the most powerful weapon which you can use to
                change the world.” <br />
                <p>- Nelson Mandela</p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      <div id='education'>
        <div id='container' className='p-1'>
          <Flatiron />
        </div>
        <div id='container' className='p-1'>
          <Finance />
        </div>
        <div id='container' className='p-1'>
          <Russian />
        </div>
      </div>
    </div>
  );
};

export default Education;
