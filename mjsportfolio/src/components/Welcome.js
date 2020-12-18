import React from 'react';
import headshot from '../images/Headshot.jpg';
import Typing from 'react-typing-animation';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

const Welcome = () => {
  return (
    <div className='text-center grid lg:grid-cols-1 xl:mb-16'>
      <section class='bg-white overflow-hidden'>
        <div class='relative max-w-screen-xl mx-auto pt-10 pb-2 lg:px-16 lg:py-10'>
          <div class='relative lg:flex lg:items-center'>
            <div class='hidden lg:block lg:flex-shrink-0'>
              <img
                class='h-64 w-64 rounded-full xl:h-80 xl:w-80'
                src={headshot}
                alt=''
              />
              <div className='text-center mt-10'>
                <h1 className='mt-1 text-xl leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none sm:tracking-tight lg:text-2xl lg:mb-2'>
                  {' '}
                  Michael J. Schiumo
                </h1>
                <h1 class='text-base leading-6 font-semibold text-indigo-600 tracking-wide uppercase'>
                  QA Engineer, Simulmedia
                </h1>
              </div>
            </div>

            <div class='relative lg:ml-10'>
              <div class='bg-white'>
                <div class='max-w-screen-xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
                  <div class='text-center'>
                    <p class='mt-1 text-4xl leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl lg:mb-10'>
                      I Build Elegant Solutions to Complex Problems.
                    </p>
                    <div class='max-w-xl mt-5 mx-auto text-xl leading-7 text-gray-500 lg:mt-16'>
                      <Typing speed={50}>
                        <div>
                          <span className='lg:text-6xl text-gray-700'>[</span>
                          <span className='text-base text-lg leading-6 font-semibold text-gray-800 tracking-wide uppercase'>
                            {' '}
                            Hello, World! I'm Michael.{' '}
                          </span>
                          <Typing.Delay ms={1000} />
                          <span className='text-base text-lg leading-6 font-semibold text-gray-800 tracking-wide uppercase'>
                            {' '}
                            Welcome to my page!{' '}
                          </span>
                          <span className='lg:text-6xl text-gray-700'>]</span>
                        </div>
                      </Typing>
                    </div>
                    <div className='mt-16'>
                      <a
                        href='/about'
                        class='bg-gray-800
                      hover:bg-gray-700
                      text-white
                      font-semibold
                      hover:text-white
                      py-2
                      px-4
                      border
                      border-black
                      hover:border-transparent
                      rounded'
                      >
                        Learn More About Me{' '}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Welcome;
