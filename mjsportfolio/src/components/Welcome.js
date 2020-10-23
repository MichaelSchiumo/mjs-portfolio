import React from 'react';
import headshot from '../images/Headshot.jpg';
import Typing from 'react-typing-animation';

const Welcome = () => {
  return (
    <div className='text-center grid grid-cols-1'>
      <section class='bg-white overflow-hidden'>
        <div class='relative max-w-screen-xl mx-auto pt-10 pb-2 px-4 sm:px-6 lg:px-16 lg:py-10'>
          <div class='relative lg:flex lg:items-center'>
            <div class='hidden lg:block lg:flex-shrink-0'>
              <img
                class='h-64 w-64 rounded-full xl:h-80 xl:w-80'
                src={headshot}
                alt=''
              />
            </div>

            <div class='relative lg:ml-10'>
              <div class='bg-white'>
                <div class='max-w-screen-xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
                  <div class='text-center'>
                    <h1 class='text-base leading-6 font-semibold text-indigo-600 tracking-wide uppercase'>
                      Full Stack Engineer
                    </h1>
                    <p class='mt-1 text-4xl leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl lg:mb-10'>
                      I build elegant solutions to complex problems.
                    </p>
                    <div class='max-w-xl mt-5 mx-auto text-xl leading-7 text-gray-500'>
                      <Typing speed={50}>
                        <div>
                          <span className='text-xl text-gray-700'>
                            &lt;p&gt;
                          </span>
                          <span className='text-base text-lg leading-6 font-semibold text-gray-800 tracking-wide uppercase'>
                            Hello, World!
                          </span>
                          <Typing.Delay ms={1000} />
                          <span className='text-base text-lg leading-6 font-semibold text-gray-800 tracking-wide uppercase'>
                            {' '}
                            Welcome to my page!
                          </span>
                          <span className='text-xl text-gray-700'>
                            &lt;/p&gt;
                          </span>
                        </div>
                      </Typing>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='text-center'></div>
    </div>
  );
};

export default Welcome;
