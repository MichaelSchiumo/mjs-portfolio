import React from 'react';
import tcnj from '../../images/tcnj-logo.png';

const Finance = () => {
  return (
    <div class='relative bg-gray-800 hover:bg-gray-900 rounded-t-lg'>
      <div class='h-12 md:absolute md:h-full md:w-1/2'>
        <img
          class='w-1/2 h-1/2 object-contain ml-32'
          src={tcnj}
          alt='Support team'
        />
      </div>
      <div class='relative max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-8'>
        <div class='md:ml-auto md:w-1/2 md:pl-10'>
          <div class='text-base leading-6 font-semibold uppercase tracking-wider text-gray-300 italic'>
            Bachelor of Science (2012-2016)
          </div>
          <h2 class='mt-2 text-white text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10 font-legal'>
            Finance
          </h2>

          <div class='mt-3 text-lg leading-7 text-gray-300'>
            <div className='font-serif text-lg'>
              <ul class='list-disc'>
                <li>Graduated Cum Laude.</li>
                <li>Achieved Dean's List for every eligible semester.</li>
                <li>Member of TCNJ Varsity Men's Soccer.</li>
                <li>
                  Member of Beta Alpha Psi Honor Society for Students of
                  Finance.
                </li>
                <li>
                  Member of Delta Sigma Pi, America's Foremost Business
                  Fraternity.
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
                href='https://business.tcnj.edu/2017/06/26/alumnus-participates-in-international-future-energy-exposition/'
              >
                View Achievements
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finance;
