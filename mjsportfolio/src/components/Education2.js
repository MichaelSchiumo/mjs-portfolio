import React from 'react';
import tcnj from '../images/tcnj-logo.png';
import flatiron from '../images/flatiron-logo.png';
import tcnj2 from '../images/tcnj-logo-circle.png';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

const Education2 = () => {
  return (
    <div className='md:mb-40 md:mt-10 lg:mb-4 xl:mb-20'>
      <div class='text-center mt-6 lg:mb-4 lg:mt-20'>
        <h2 class='text-4xl lg:text-5xl mb-2 leading-9 tracking-tight font-extrabold text-gray-700  sm:leading-10 font-legal lg:mb-0'>
          Education
        </h2>
      </div>
      <ul class='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:p-4 lg:px-26 xl:px-40'>
        <Flippy
          flipOnHover={false}
          flipOnClick={false}
          flipDirection='horizontal'
        >
          <FrontSide>
            <li class='col-span-1 flex flex-col text-center bg-gray-700 rounded-lg justify-items-center border-solid border-4 border-gray-800 hover:bg-gray-900'>
              <div class='flex-1 flex flex-col p-8'>
                <img
                  class='w-40 h-40 flex-shrink-0 mx-auto bg-black rounded-full'
                  src={flatiron}
                  alt=''
                />
                <h3 class='mt-6 text-white text-xl leading-5 font-medium'>
                  Full Stack Web Development
                </h3>
                <dl class='mt-2 flex-grow flex flex-col justify-between'>
                  <dt class='sr-only'>Title</dt>
                  <dd class='text-indigo-400 text-xl leading-5'>2019 - 2020</dd>
                </dl>
              </div>
              <div class='border-t border-gray-200'>
                <div class='inline-flex rounded-md justify-items-center mb-4 mt-4 lg:mt-4 lg:mb-6'>
                  <a
                    class='bg-gray-300 hover:bg-gray-500 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center'
                    href='/projects'
                  >
                    View Projects
                  </a>
                </div>
              </div>
            </li>
          </FrontSide>
          <BackSide>
            <li class='col-span-1 flex flex-col text-center bg-gray-700 rounded-lg justify-items-center border-solid border-4 border-gray-700 hover:bg-gray-800'>
              <div class='flex-1 flex flex-col p-8'>
                <img
                  class='w-40 h-40 flex-shrink-0 mx-auto bg-black rounded-full'
                  src={flatiron}
                  alt=''
                />
                <h3 class='mt-6 text-white text-xl leading-5 font-medium'>
                  Full Stack Web Development
                </h3>
                <dl class='mt-2 flex-grow flex flex-col justify-between'>
                  <dt class='sr-only'>Title</dt>
                  <dd class='text-indigo-400 text-xl leading-5'>2019 - 2020</dd>
                </dl>
              </div>
              <div class='border-t border-gray-200'>
                <div class='inline-flex rounded-md justify-items-center mb-10 lg:mt-4 lg:mb-6'>
                  <a
                    class='bg-gray-300 hover:bg-gray-500 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center'
                    href='/projects'
                  >
                    View Projects
                  </a>
                </div>
              </div>
            </li>
          </BackSide>
        </Flippy>
        <Flippy
          flipOnHover={false}
          flipOnClick={true}
          flipDirection='horizontal'
        >
          <FrontSide>
            <li class='col-span-1 flex flex-col text-center bg-gray-700 rounded-lg justify-items-center border-solid border-4 border-gray-800 hover:bg-gray-900'>
              <div class='flex-1 flex flex-col p-8'>
                <img
                  class='w-40 h-40 flex-shrink-0 mx-auto bg-gray-700 rounded-full'
                  src={tcnj2}
                  alt=''
                />
                <h3 class='mt-6 text-white text-xl leading-5 font-medium'>
                  Bachelors of Science, Finance
                </h3>
                <dl class='mt-2 flex-grow flex flex-col justify-between'>
                  <dt class='sr-only'>Title</dt>
                  <dd class='text-indigo-400 text-xl leading-5'>2012 - 2016</dd>
                </dl>
              </div>
              <div class='border-t border-gray-200'>
                <div class='inline-flex rounded-md justify-items-center mb-6 mt-4 lg:mt-4 lg:mb-6'>
                  <a
                    class='
                    bg-gray-300 hover:bg-gray-500 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center'
                    href='#'
                  >
                    View Achievements
                  </a>
                </div>
              </div>
            </li>
          </FrontSide>
          <BackSide>
            <li class='py-4 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left'>
              <div class='space-y-6 xl:space-y-10'>
                <div class='space-y-2 xl:flex xl:items-center xl:justify-between'>
                  <div class='font-medium text-lg leading-6 space-y-1'>
                    <p class='text-indigo-400'>
                      The College of New Jersey (TCNJ)
                    </p>
                  </div>
                  <ul class='flex justify-center space-x-5'></ul>
                </div>
              </div>

              <div className='text-white mt-4'>
                <ul className='list-disc'>
                  <li className='p-2'>Graduated Cum Laude, 3.6 GPA</li>
                  <li className='p-2'>
                    Named to the Dean's List for every semester
                  </li>
                  <li className='p-2'>
                    Member of the TCNJ Men's Varsity Soccer Team (2012 - 2016)
                  </li>
                  <li className='p-2'>
                    Member of Beta Alpha Psi Honor Society for students of
                    Finance
                  </li>
                  <p className='p-3 mt-20'></p>
                </ul>
              </div>
            </li>
          </BackSide>
        </Flippy>
        <Flippy
          flipOnHover={false}
          flipOnClick={true}
          flipDirection='horizontal'
        >
          <FrontSide>
            <li class='col-span-1 flex flex-col text-center bg-gray-700 rounded-lg justify-items-center border-solid border-4 border-gray-800 hover:bg-gray-900'>
              <div class='flex-1 flex flex-col p-8'>
                <img
                  class='w-40 h-40 flex-shrink-0 mx-auto bg-black rounded-full'
                  src={tcnj2}
                  alt=''
                />
                <h3 class='mt-6 text-white text-xl leading-5 font-medium'>
                  Bachelors of Arts, Russian Studies
                </h3>
                <dl class='mt-2 flex-grow flex flex-col justify-between'>
                  <dt class='sr-only'>Title</dt>
                  <dd class='text-indigo-400 text-xl leading-5'>2012 - 2016</dd>
                </dl>
              </div>
              <div class='border-t border-gray-200'>
                <div class='inline-flex rounded-md justify-items-center mb-10 mt-4 lg:mt-4 lg:mb-6'>
                  <a
                    class='
                    bg-gray-300 hover:bg-gray-500 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center'
                    href='#'
                  >
                    View Achievements
                  </a>
                </div>
              </div>
            </li>
          </FrontSide>

          <BackSide>
            <li class='py-4 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left'>
              <div class='space-y-6 xl:space-y-10'>
                <div class='space-y-2 xl:flex xl:items-center xl:justify-between'>
                  <div class='font-medium text-lg leading-6 space-y-1'>
                    <p class='text-indigo-400'>
                      The College of New Jersey (TCNJ)
                    </p>
                  </div>
                  <ul class='flex justify-center space-x-5'></ul>
                </div>
              </div>

              <div className='text-white lg:mt-4'>
                <ul className='list-disc'>
                  <li className='p-2'>
                    Boren Scholar, Russian Language and International Business
                  </li>
                  <li className='p-1'>
                    Academic Excellence Award Winner, TCNJ
                  </li>
                  <li className='p-1'>
                    Russian Scholar Laureate, American Council of Teachers of
                    Russian
                  </li>
                  <li className='p-1'>
                    Founder and President, TCNJ Russian Club
                  </li>
                  <li className='p-1'>
                    Published Original Capstone, Kindle Unlimited, 2018
                  </li>
                  <div class='inline-flex rounded-md text-center mb-2 mt-2 lg:mb-4 lg:ml-20 lg:mt-4'>
                    <a
                      class='
                    bg-gray-300 hover:bg-gray-500 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center'
                      href='https://www.amazon.com/Resource-Curse-Russias-Greatest-Blessing-ebook/dp/B07BTLC43P/ref=sr_1_1?dchild=1&keywords=schiumo&qid=1603811864&sr=8-1'
                    >
                      View Publication
                    </a>
                  </div>
                </ul>
              </div>
            </li>
          </BackSide>
        </Flippy>
      </ul>
    </div>
  );
};

export default Education2;
