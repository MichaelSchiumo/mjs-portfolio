import React from 'react';

const Logos2 = () => {
  return (
    <div>
      <div class='bg-white'>
        <div class='max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
          <div class='grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5'>
            <div class='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
              <span className='h-12 fab fa-js-square fa-3x text-2xl text-black'>
                {' '}
                JavaScript
              </span>
            </div>
            <div class='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
              <span className='fab fa-react fa-3x text-2xl text-black'>
                {' '}
                React
              </span>
            </div>
            <div class='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
              <span className='devicon-ruby-plain fa-3x text-2xl text-black'>
                {' '}
                Ruby
              </span>
            </div>
            <div class='col-span-1 flex justify-center md:col-span-3 lg:col-span-1'>
              <span className='devicon-rails-plain fa-3x text-2xl text-black'>
                {' '}
                Rails
              </span>
            </div>
            <div class='col-span-2 flex justify-center md:col-span-3 lg:col-span-1'>
              <span className='devicon-postgresql-plain fa-3x text-2xl text-black'>
                {' '}
                Postgres
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logos2;
