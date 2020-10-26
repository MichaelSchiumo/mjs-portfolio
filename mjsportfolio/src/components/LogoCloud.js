import React from 'react';

const LogoCloud = () => {
  return (
    <div className='grid grid-rows-2 h-60 mt-10 -mb-40 lg:mt-2 lg:h-48 rounded-lg'>
      <div class='bg-gray-800'>
        <div class='max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-6 lg:w-3/4'>
          <div class='grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5'>
            <div class='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
              <span className='h-12 fab fa-js-square fa-3x text-2xl text-white'>
                {' '}
                JavaScript
              </span>
            </div>
            <div class='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
              <span className='fab fa-react fa-3x text-2xl text-white'>
                {' '}
                React
              </span>
            </div>
            <div class='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
              <span className='devicon-ruby-plain fa-3x text-2xl text-white'>
                {' '}
                Ruby
              </span>
            </div>
            <div class='col-span-1 flex justify-center md:col-span-3 lg:col-span-1'>
              <span className='devicon-rails-plain fa-3x text-2xl text-white'>
                {' '}
                Rails
              </span>
            </div>
            <div class='col-span-2 flex justify-center md:col-span-3 lg:col-span-1'>
              <span className='devicon-postgresql-plain fa-3x text-2xl text-white'>
                {' '}
                Postgres
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class='bg-gray-800'>
        <div class='max-w-screen-xl mx-auto px-4 sm:px-6 mt-10 lg:px-6 lg:w-full lg:mt-6'>
          <div class='grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5'>
            <div class='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
              <span className='devicon-html5-plain fa-3x text-2xl text-white'>
                {' '}
                HTML
              </span>
            </div>
            <div class='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
              <span className='devicon-css3-plain fa-3x text-2xl text-white'>
                CSS
              </span>
            </div>
            <div class='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
              <span className='devicon-express-original fa-3x text-2xl text-white'>
                {' '}
                ExpressJS
              </span>
            </div>
            <div class='col-span-1 flex justify-center md:col-span-3 lg:col-span-1'>
              <span className='devicon-nodejs-plain fa-3x text-2xl text-white'>
                {''}
                NodeJS
              </span>
            </div>
            <div class='col-span-2 flex justify-center md:col-span-3 lg:col-span-1'>
              <span className='devicon-mongodb-plain fa-3x text-2xl text-white'>
                MongoDB
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoCloud;
