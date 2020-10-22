import React from 'react';
import Finance from './edu/Finance.js';
import Russian from './edu/Russian.js';
import Flatiron from './edu/Flatiron.js';

const Education = () => {
  return (
    <div className='justify-items-center'>
      <div
        id='container'
        class='grid grid-cols-3 lg:grid-cols-1 gap-4 justify-items-center p-2 h-36 mt-6 lg:p-0'
      >
        <div className='bg-white mr-40 -mb-10'>
          <div className='lg:w-3/4 mx-auto py-16 px-4 sm:py-24 sm:px-6 -mt-16 lg:px-8 lg:-mt-40'>
            <div className='text-center grid grid-cols-1'>
              <div class='quote--container bg-gray-100'>
                <p class='quote italic'>
                  “Education is the most powerful weapon which you can use to{' '}
                  <span class='quote--highlight'>change the world</span>.”
                </p>
                <p class='quote--author'>&ndash; Nelson Mandela</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='education'>
        <div id='container' className='p-2'>
          <Flatiron />
        </div>
        <div id='container' className='p-2'>
          <Finance />
        </div>
        <div id='container' className='p-2'>
          <Russian />
        </div>
      </div>
    </div>
  );
};

export default Education;
