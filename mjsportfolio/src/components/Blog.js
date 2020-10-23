import React from 'react';
import headshot from '../images/Headshot.jpg';
import medium from '../images/blog/medium-icon.png';
import awsCert from '../images/blog/awsCert.jpg';
import psm from '../images/blog/psm-logo.png';
import gitFlow from '../images/blog/github-flow.jpg';
import staircase from '../images/blog/staircase.jpg';
import responsive from '../images/blog/responsive.jpg';
import lit from '../images/blog/lost_in_translation.jpg';
import Footer from './Footer.js';

const Blog = () => {
  return (
    <div class='relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8'>
      <div class='absolute inset-0'>
        <div class='bg-white h-1/3 sm:h-2/3'></div>
      </div>
      <div class='relative max-w-7xl mx-auto'>
        <div class='text-center'>
          <h2 class='text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10 font-legal'>
            Get the Latest
          </h2>
          <p class='mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-700 sm:mt-4'>
            I write about the things that make me a better developer.
          </p>
        </div>
        <div class='mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none'>
          <div class='flex flex-col rounded-lg shadow-lg overflow-hidden'>
            <div class='flex-shrink-0'>
              <img class='h-48 w-full object-contain' src={awsCert} alt='' />
            </div>
            <div class='flex-1 bg-white p-6 flex flex-col justify-between hover:bg-gray-300'>
              <div class='flex-1'>
                <div class='flex-shrink-0'>
                  <a href='https://medium.com/@michaeljanschiumo'>
                    <img
                      class='h-10 w-10 rounded-full hover:bg-gray-800'
                      src={medium}
                      alt=''
                    />
                  </a>
                </div>
                <div href='#' class='block'>
                  <h3 class='mt-2 text-lg leading-7 font-bold text-gray-900'>
                    I Passed the AWS CCP in 3 Days - Here's How
                  </h3>
                  <p class='mt-3 text-base leading-6 text-gray-700'>
                    As someone who is making his first foray into Tech, I am
                    always looking for ways to give me an edge, and demonstrate
                    that I have the ability to learn new things quickly and
                    effectively. Due to the fact that AWS is the
                    industry-leading Cloud Services Provider, I decided that the
                    AWS CCP was a good place to start.
                  </p>
                </div>
              </div>
              <div className='text-center lg:mt-6'>
                <a
                  className='
                bg-transparent
                hover:bg-gray-800
                text-blue-800
                font-semibold
                hover:text-white
                py-2
                px-4
                border
                border-blue-800
                hover:border-transparent
                rounded'
                  href='https://medium.com/@michaeljanschiumo/i-passed-the-aws-certified-cloud-practitioner-aws-ccp-in-3-days-heres-how-7b33d6d94f41?sk=58d6cc0a6cc0a280f2fb1ed20fc3a624'
                >
                  Read more
                </a>
              </div>
              <div class='mt-6 flex items-center'>
                <div class='flex-shrink-0'>
                  <a href='https://medium.com/@michaeljanschiumo'>
                    <img class='h-10 w-10 rounded-full' src={headshot} alt='' />
                  </a>
                </div>
                <div class='ml-3'>
                  <p class='text-sm leading-5 font-medium text-gray-900'>
                    <a
                      href='https://medium.com/@michaeljanschiumo'
                      class='hover:underline'
                    >
                      @michaeljanschiumo
                    </a>
                  </p>
                  <div class='flex text-sm leading-5 text-gray-600'>
                    <time datetime='2020-03-16'>July 11, 2020</time>
                    <span class='mx-1'>&middot;</span>
                    <span>7 min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class='flex flex-col rounded-lg shadow-lg overflow-hidden'>
            <div class='flex-shrink-0'>
              <img class='h-48 w-full object-contain' src={psm} alt='' />
            </div>
            <div class='flex-1 bg-white p-6 flex flex-col justify-between hover:bg-gray-300'>
              <div class='flex-1'>
                <div class='flex-shrink-0'>
                  <a href='https://medium.com/@michaeljanschiumo'>
                    <img
                      class='h-10 w-10 rounded-full hover:bg-gray-800'
                      src={medium}
                      alt=''
                    />
                  </a>
                </div>
                <div href='#' class='block'>
                  <h3 class='mt-2 text-lg leading-7 font-bold text-gray-900'>
                    I Passed the Professional Scrum Master I in One Day - Here's
                    How
                  </h3>
                  <p class='mt-3 text-base leading-6 text-gray-700'>
                    With little time to complete the certification, I decided
                    that I had to apply one of Scrum’s 5 Values: Focus. In just
                    one day, I learned Scrum to the level needed to achieve this
                    certification with a 97%, with zero prior experience. Here’s
                    how.
                  </p>
                </div>
              </div>
              <div className='text-center lg:mt-6'>
                <a
                  className='
                bg-transparent
                hover:bg-gray-800
                text-blue-800
                font-semibold
                hover:text-white
                py-2
                px-4
                border
                border-blue-800
                hover:border-transparent
                rounded'
                  href='https://medium.com/@michaeljanschiumo/i-passed-the-professional-scrum-master-i-psm-i-in-one-day-heres-how-a9d795f235f7?sk=97b1d30d1195f268c17c8605bf473e41'
                >
                  Read more
                </a>
              </div>
              <div class='mt-6 flex items-center'>
                <div class='flex-shrink-0'>
                  <a href='https://medium.com/@michaeljanschiumo'>
                    <img class='h-10 w-10 rounded-full' src={headshot} alt='' />
                  </a>
                </div>
                <div class='ml-3'>
                  <p class='text-sm leading-5 font-medium text-gray-900'>
                    <a
                      href='https://medium.com/@michaeljanschiumo'
                      class='hover:underline'
                    >
                      @michaeljanschiumo
                    </a>
                  </p>
                  <div class='flex text-sm leading-5 text-gray-600'>
                    <time datetime='2020-03-16'>July 1, 2020</time>
                    <span class='mx-1'>&middot;</span>
                    <span>7 min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class='flex flex-col rounded-lg shadow-lg overflow-hidden'>
            <div class='flex-shrink-0'>
              <img class='h-48 w-full object-contain' src={gitFlow} alt='' />
            </div>
            <div class='flex-1 bg-white p-6 flex flex-col justify-between hover:bg-gray-300'>
              <div class='flex-1'>
                <div class='flex-shrink-0'>
                  <a href='https://medium.com/@michaeljanschiumo'>
                    <img
                      class='h-10 w-10 rounded-full hover:bg-gray-800'
                      src={medium}
                      alt=''
                    />
                  </a>
                </div>
                <div href='#' class='block'>
                  <h3 class='mt-2 text-lg leading-7 font-bold text-gray-900'>
                    Things I Wish I Had Know - Pull Requests
                  </h3>
                  <p class='mt-3 text-base leading-6 text-gray-700'>
                    Last week was the first time that I had the opportunity to
                    work with production-level code, and I am happy to say that
                    my first-ever pull request (PR) was accepted! So, here are a
                    few of the key things that I learned in dealing with PRs.
                  </p>
                </div>
              </div>
              <div className='text-center lg:mt-6'>
                <a
                  className='
                bg-transparent
                hover:bg-gray-800
                text-blue-800
                font-semibold
                hover:text-white
                py-2
                px-4
                border
                border-blue-800
                hover:border-transparent
                rounded'
                  href='https://medium.com/@michaeljanschiumo/things-i-wish-i-had-known-pull-requests-a96e9ff8f363?sk=44244b923b0e3f4d27ff9cbe7e85f03d'
                >
                  Read more
                </a>
              </div>
              <div class='mt-6 flex items-center'>
                <div class='flex-shrink-0'>
                  <a href='https://medium.com/@michaeljanschiumo'>
                    <img class='h-10 w-10 rounded-full' src={headshot} alt='' />
                  </a>
                </div>
                <div class='ml-3'>
                  <p class='text-sm leading-5 font-medium text-gray-900'>
                    <a
                      href='https://medium.com/@michaeljanschiumo'
                      class='hover:underline'
                    >
                      @michaeljanschiumo
                    </a>
                  </p>
                  <div class='flex text-sm leading-5 text-gray-600'>
                    <time datetime='2020-03-16'>July 27, 2020</time>
                    <span class='mx-1'>&middot;</span>
                    <span>4 min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class='flex flex-col rounded-lg shadow-lg overflow-hidden'>
            <div class='flex-shrink-0'>
              <img class='h-48 w-full object-contain' src={staircase} alt='' />
            </div>
            <div class='flex-1 bg-white p-6 flex flex-col justify-between hover:bg-gray-300'>
              <div class='flex-1'>
                <div class='flex-shrink-0'>
                  <a href='https://medium.com/@michaeljanschiumo'>
                    <img
                      class='h-10 w-10 rounded-full hover:bg-gray-800'
                      src={medium}
                      alt=''
                    />
                  </a>
                </div>
                <div href='#' class='block'>
                  <h3 class='mt-2 text-lg leading-7 font-bold text-gray-900'>
                    Algorithms - The Staircase Problem
                  </h3>
                  <p class='mt-3 text-base leading-6 text-gray-700'>
                    Write a function that accepts a positive number N. The
                    function should console.log a step shape with N levels using
                    the # character. Make sure that the step has spaces on the
                    right-hand side.
                  </p>
                </div>
              </div>
              <div className='text-center lg:mt-6'>
                <a
                  className='
                bg-transparent
                hover:bg-gray-800
                text-blue-800
                font-semibold
                hover:text-white
                py-2
                px-4
                border
                border-blue-800
                hover:border-transparent
                rounded'
                  href='https://medium.com/@michaeljanschiumo/the-staircase-problem-8756efed7c17?sk=2324143df9f1934519077f442a6d4a58'
                >
                  Read more
                </a>
              </div>
              <div class='mt-6 flex items-center'>
                <div class='flex-shrink-0'>
                  <a href='https://medium.com/@michaeljanschiumo'>
                    <img class='h-10 w-10 rounded-full' src={headshot} alt='' />
                  </a>
                </div>
                <div class='ml-3'>
                  <p class='text-sm leading-5 font-medium text-gray-900'>
                    <a
                      href='https://medium.com/@michaeljanschiumo'
                      class='hover:underline'
                    >
                      @michaeljanschiumo
                    </a>
                  </p>
                  <div class='flex text-sm leading-5 text-gray-600'>
                    <time datetime='2020-03-16'>May 28, 2020</time>
                    <span class='mx-1'>&middot;</span>
                    <span>4 min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class='flex flex-col rounded-lg shadow-lg overflow-hidden'>
            <div class='flex-shrink-0'>
              <img class='h-48 w-full object-contain' src={responsive} alt='' />
            </div>
            <div class='flex-1 bg-white p-6 flex flex-col justify-between hover:bg-gray-300'>
              <div class='flex-1'>
                <div class='flex-shrink-0'>
                  <a href='https://medium.com/@michaeljanschiumo'>
                    <img
                      class='h-10 w-10 rounded-full hover:bg-gray-800'
                      src={medium}
                      alt=''
                    />
                  </a>
                </div>
                <div href='#' class='block'>
                  <h3 class='mt-2 text-lg leading-7 font-bold text-gray-900'>
                    Responsive Design - Why It's Important
                  </h3>
                  <p class='mt-3 text-base leading-6 text-gray-700'>
                    How do we make sure that our websites and the content
                    therein are displayed the way in which we want, and that our
                    viewers are able to access it without doing the dreaded
                    “pinch and flick” zoom? The answer: responsive web design.
                  </p>
                </div>
              </div>
              <div className='text-center lg:mt-6'>
                <a
                  className='
                bg-transparent
                hover:bg-gray-800
                text-blue-800
                font-semibold
                hover:text-white
                py-2
                px-4
                border
                border-blue-800
                hover:border-transparent
                rounded'
                  href='https://medium.com/@michaeljanschiumo/responsive-web-design-why-its-important-bdc5f6ad81c2?sk=1618297f959ce3fea9d7f2091267b3e8'
                >
                  Read more
                </a>
              </div>
              <div class='mt-6 flex items-center'>
                <div class='flex-shrink-0'>
                  <a href='https://medium.com/@michaeljanschiumo'>
                    <img class='h-10 w-10 rounded-full' src={headshot} alt='' />
                  </a>
                </div>
                <div class='ml-3'>
                  <p class='text-sm leading-5 font-medium text-gray-900'>
                    <a
                      href='https://medium.com/@michaeljanschiumo'
                      class='hover:underline'
                    >
                      @michaeljanschiumo
                    </a>
                  </p>
                  <div class='flex text-sm leading-5 text-gray-600'>
                    <time datetime='2020-03-16'>April 29, 2020</time>
                    <span class='mx-1'>&middot;</span>
                    <span>5 min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class='flex flex-col rounded-lg shadow-lg overflow-hidden'>
            <div class='flex-shrink-0'>
              <img class='h-48 w-full object-contain' src={lit} alt='' />
            </div>
            <div class='flex-1 bg-white p-6 flex flex-col justify-between hover:bg-gray-300'>
              <div class='flex-1'>
                <div class='flex-shrink-0'>
                  <a href='https://medium.com/@michaeljanschiumo'>
                    <img
                      class='h-10 w-10 rounded-full hover:bg-gray-800'
                      src={medium}
                      alt=''
                    />
                  </a>
                </div>
                <div href='#' class='block'>
                  <h3 class='mt-2 text-lg leading-7 font-bold text-gray-900'>
                    Lost in Translation - The Importance of Context
                  </h3>
                  <p class='mt-3 text-base leading-6 text-gray-700'>
                    One of the reasons that I am so fascinated with language is
                    its innate ability to provide a window into the mind of a
                    native speaker. Many people have told me that Russian sounds
                    harsh, that it has a certain “intimidation factor.” I have
                    to disagree.
                  </p>
                </div>
              </div>
              <div className='text-center lg:mt-6'>
                <a
                  className='
                bg-transparent
                hover:bg-gray-800
                text-blue-800
                font-semibold
                hover:text-white
                py-2
                px-4
                border
                border-blue-800
                hover:border-transparent
                rounded'
                  href='https://medium.com/@michaeljanschiumo/lost-in-translation-f44297ddc7e5?sk=ff84eacedb2f2b9bd76539634418a490'
                >
                  Read more
                </a>
              </div>
              <div class='mt-6 flex items-center'>
                <div class='flex-shrink-0'>
                  <a href='https://medium.com/@michaeljanschiumo'>
                    <img class='h-10 w-10 rounded-full' src={headshot} alt='' />
                  </a>
                </div>
                <div class='ml-3'>
                  <p class='text-sm leading-5 font-medium text-gray-900'>
                    <a
                      href='https://medium.com/@michaeljanschiumo'
                      class='hover:underline'
                    >
                      @michaeljanschiumo
                    </a>
                  </p>
                  <div class='flex text-sm leading-5 text-gray-600'>
                    <time datetime='2020-03-16'>May 20, 2020</time>
                    <span class='mx-1'>&middot;</span>
                    <span>8 min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
