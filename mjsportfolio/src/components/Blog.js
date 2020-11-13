import React from 'react';
import headshot from '../images/Headshot.jpg';
import medium from '../images/blog/medium-icon.png';
import awsCert from '../images/blog/awsCert.jpg';
import psm from '../images/blog/psm-logo.png';
import gitFlow from '../images/blog/github-flow.jpg';
import staircase from '../images/blog/staircase.jpg';
import responsive from '../images/blog/responsive.jpg';
import lit from '../images/blog/lost_in_translation.jpg';
import insertAt from '../images/blog/insertAt.jpg';
import sumof2 from '../images/blog/sumof2.jpg';
import jsonld from '../images/blog/jsonld.png';
import Footer from './Footer.js';

const Blog = () => {
  return (
    <div class='relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-32'>
      <div class='absolute inset-0'>
        <div class='bg-white h-1/3 sm:h-2/3'></div>
      </div>
      <div class='relative max-w-7xl mx-auto'>
        <div class='text-center'>
          <h2 class='text-4xl lg:text-5xl leading-9 tracking-tight font-extrabold text-gray-700  sm:leading-10 font-legal'>
            The <span className='text-gray-900'>Latest</span>
          </h2>
          <p class='mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-900 sm:mt-4'>
            I write about the things that make me a better developer.
          </p>
        </div>
        <div class='mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none'>
          <div class='flex flex-col rounded-lg shadow-lg overflow-hidden border-solid border-4 border:gray-900'>
            <div class='flex-shrink-0'>
              <img class='h-48 w-full object-cover' src={insertAt} alt='' />
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
                  <h3 class='mt-2 text-md lg:text-lg leading-7 font-bold text-gray-900'>
                    Algorithms - Linked List, InsertAt
                  </h3>
                  <p class='mt-3 text-sm lg:text-base leading-6 text-gray-700'>
                    In the interest of improving my DS&A skills, I want to
                    walkthrough a small component of a common problem that a
                    developer is bound to encounter, either in an interview or
                    in the wild. Let’s take a look at the insertAt method for
                    Linked Lists.
                  </p>
                </div>
              </div>
              <div className='text-center mt-10 lg:mt-6'>
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
                  href='https://michaeljanschiumo.medium.com/linked-list-insertat-692af0fc970e?sk=b8ab43551481cc5513ccf98c7fcc5bc4'
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
                    <time datetime='2020-03-16'>November 8, 2020</time>
                    <span class='mx-1'>&middot;</span>
                    <span>10 min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class='flex flex-col rounded-lg shadow-lg overflow-hidden border-solid border-4'>
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
                  <h3 class='mt-2 text-md lg:text-lg leading-7 font-bold text-gray-900'>
                    I Passed the AWS CCP in 3 Days - Here's How
                  </h3>
                  <p class='mt-3 text-sm lg:text-base leading-6 text-gray-700'>
                    I am always looking for ways to give me an edge, and
                    demonstrate that I have the ability to learn new things
                    quickly and effectively. Due to the fact that AWS is the
                    industry-leading Cloud Services Provider, I decided that the
                    AWS CCP was a good place to start.
                  </p>
                </div>
              </div>
              <div className='text-center mt-10 lg:mt-6'>
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

          <div class='flex flex-col rounded-lg shadow-lg overflow-hidden border-solid border-4'>
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
                  <p class='mt-3 text-sm lg:text-base leading-6 text-gray-700'>
                    With little time to complete the certification, I decided
                    that I had to apply one of Scrum’s 5 Values: Focus. In one
                    day, I learned Scrum to the level needed to achieve this
                    certification with a 97%, with zero prior experience.
                  </p>
                </div>
              </div>
              <div className='text-center mt-10 lg:mt-6'>
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
          <div class='flex flex-col rounded-lg shadow-lg overflow-hidden border-solid border-4'>
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
                    Things I Wish I Had Known - Pull Requests
                  </h3>
                  <p class='mt-3 text-sm lg:text-base leading-6 text-gray-700'>
                    Last week was the first time that I had the opportunity to
                    work with production-level code, and I am happy to say that
                    my first-ever pull request (PR) was accepted! So, here are a
                    few of the key things that I learned.
                  </p>
                </div>
              </div>
              <div className='text-center mt-10 lg:mt-6'>
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
          <div class='flex flex-col rounded-lg shadow-lg overflow-hidden border-solid border-4'>
            <div class='flex-shrink-0'>
              <img class='h-48 w-full object-cover' src={staircase} alt='' />
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
                  <p class='mt-3 text-sm lg:text-base leading-6 text-gray-700'>
                    Write a function that accepts a positive number N. The
                    function should console.log a step shape with N levels using
                    the # character.
                  </p>
                </div>
              </div>
              <div className='text-center mt-10 lg:mt-6'>
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
          <div class='flex flex-col rounded-lg shadow-lg overflow-hidden border-solid border-4'>
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
                  <p class='mt-3 text-sm lg:text-base leading-6 text-gray-700'>
                    How do we make sure that our websites and the content
                    therein are displayed the way in which we want, and that our
                    viewers are able to access it. The answer: responsive web
                    design.
                  </p>
                </div>
              </div>
              <div className='text-center mt-10 lg:mt-6'>
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
          <div class='flex flex-col rounded-lg shadow-lg overflow-hidden border-solid border-4'>
            <div class='flex-shrink-0'>
              <img class='h-48 w-full object-cover' src={lit} alt='' />
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
                  <p class='mt-3 text-sm lg:text-base leading-6 text-gray-700'>
                    One of the reasons that I am so fascinated with language is
                    its innate ability to provide a window into the mind of a
                    native speaker. Many people have told me that Russian sounds
                    harsh, that it has a certain “intimidation factor.”
                  </p>
                </div>
              </div>
              <div className='text-center mt-10 lg:mt-6'>
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
          <div class='flex flex-col rounded-lg shadow-lg overflow-hidden border-solid border-4'>
            <div class='flex-shrink-0'>
              <img class='h-48 w-full object-covwe' src={sumof2} alt='' />
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
                    Algorithms - Sum of 2
                  </h3>
                  <p class='mt-3 text-sm lg:text-base leading-6 text-gray-700'>
                    Given an array of integers nums and an integer target,
                    return indices of the two numbers such that they add up to
                    target. You may assume that each input would have exactly
                    one solution, and you may not use the same element twice.
                    You can return the answer in any order.
                  </p>
                </div>
              </div>
              <div className='text-center mt-10 lg:mt-6'>
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
                  href='https://michaeljanschiumo.medium.com/sum-of-2-8fcf225c42d2?sk=c7458002267bf29ea202a40a5a0366ed'
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
                    <time datetime='2020-03-16'>November 05, 2020</time>
                    <span class='mx-1'>&middot;</span>
                    <span>3 min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class='flex flex-col rounded-lg shadow-lg overflow-hidden border-solid border-4'>
            <div class='flex-shrink-0'>
              <img class='h-48 w-full object-covwe' src={jsonld} alt='' />
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
                    SEO and JSON-LD
                  </h3>
                  <p class='mt-3 text-sm lg:text-base leading-6 text-gray-700'>
                    If you have sold, or want to sell, anything online, then you
                    have probably heard the term Search Engine Optimization.
                    From targeted ads to URL crawling, there are many ways to
                    make sure that your business or product is in the coveted #1
                    position on the SERP (Search Engine Results Page).
                  </p>
                </div>
              </div>
              <div className='text-center mt-10 lg:mt-6'>
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
                  href='https://michaeljanschiumo.medium.com/seo-and-json-ld-bb248267719b?sk=f2e6675e28651c0ab6c84f7e8ea39b7e'
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
                    <time datetime='2020-03-16'>September 21, 2020</time>
                    <span class='mx-1'>&middot;</span>
                    <span>5 min read</span>
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
