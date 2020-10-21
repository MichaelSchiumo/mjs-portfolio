import React from 'react';
import Finance from './edu/Finance.js';
import Russian from './edu/Russian.js';
import Flatiron from './edu/Flatiron.js';

const Education2 = () => {
  return (
    <div className='justify-items-center'>
      <div
        id='container'
        class='grid grid-cols-1 gap-4 justify-items-center p-2 h-36 mt-6 lg:p-0'
      >
        <div className='bg-white -mb-10'>
          <div className='lg:w-3/4 mx-auto py-16 px-4 sm:py-24 sm:px-6 sm:-mt-16 lg:px-8 lg:-mt-40'>
            <div className='text-center grid grid-cols-1'>
              <div class='quote--container'>
                <p class='quote'>
                  “Education is the most powerful weapon which you can use to
                  <span class='quote--highlight'>change the world</span>.”
                </p>
                <p class='quote--author'>&ndash; Nelson Mandela</p>
              </div>
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

export default Education2;
