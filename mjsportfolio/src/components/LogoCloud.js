import React from 'react';

const LogoCloud = () => {
  return (
    <div className='grid grid-rows-2'>
      <div class='bg-white'>
        <div class='max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-6 lg:w-2/3'>
          <div class='grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5'>
            <div class='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
              <span className='h-12 fab fa-js-square fa-3x text-2xl'>
                {' '}
                JavaScript
              </span>
            </div>
            <div class='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
              <span className='fab fa-react fa-3x text-2xl'> React</span>
            </div>
            <div class='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
              <span className='devicon-ruby-plain fa-3x text-2xl'> Ruby</span>
            </div>
            <div class='col-span-1 flex justify-center md:col-span-3 lg:col-span-1'>
              <span className='devicon-rails-plain fa-3x text-2xl'> Rails</span>
            </div>
            <div class='col-span-2 flex justify-center md:col-span-3 lg:col-span-1'>
              <span className='devicon-postgresql-plain fa-3x text-2xl'>
                {' '}
                Postgres
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class='bg-white'>
        <div class='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-6 lg:w-2/3 lg:-mt-6'>
          <div class='grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5'>
            <div class='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
              <span className='devicon-html5-plain fa-3x text-2xl'> HTML</span>
            </div>
            <div class='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
              <span className='devicon-css3-plain fa-3x text-2xl'>CSS</span>
            </div>
            <div class='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
              <span className='devicon-express-original fa-3x text-2xl'>
                {' '}
                ExpressJS
              </span>
            </div>
            <div class='col-span-1 flex justify-center md:col-span-3 lg:col-span-1'>
              <span className='devicon-nodejs-plain fa-3x text-2xl'>
                {''}
                NodeJS
              </span>
            </div>
            <div class='col-span-2 flex justify-center md:col-span-3 lg:col-span-1'>
              <span className='devicon-mongodb-plain fa-3x text-2xl'>
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
