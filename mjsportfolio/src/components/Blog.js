import React from 'react';
import headshot from '../images/Headshot.jpg';
import medium from '../images/blog/medium-icon.png';
import awsCert from '../images/blog/awsCert.jpg';

const Blog = () => {
  return (
    <div class='relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8'>
      <div class='absolute inset-0'>
        <div class='bg-white h-1/3 sm:h-2/3'></div>
      </div>
      <div class='relative max-w-7xl mx-auto'>
        <div class='text-center'>
          <h2 class='text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10'>
            From the blog
          </h2>
          <p class='mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-700 sm:mt-4'>
            I write about the things that have made me a better developer.
          </p>
        </div>
        <div class='mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none'>
          <div class='flex flex-col rounded-lg shadow-lg overflow-hidden'>
            <div class='flex-shrink-0'>
              <img class='h-48 w-full object-contain' src={awsCert} alt='' />
            </div>
            <div class='flex-1 bg-white p-6 flex flex-col justify-between'>
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
                    Due to the fact that AWS is the industry-leading Cloud
                    Services Provider, I decided that the AWS CCP was a good
                    place to start.
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
              <img
                class='h-48 w-full object-cover'
                src='https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
                alt=''
              />
            </div>
            <div class='flex-1 bg-white p-6 flex flex-col justify-between'>
              <div class='flex-1'>
                <p class='text-sm leading-5 font-medium text-indigo-600'>
                  <a href='#' class='hover:underline'>
                    Video
                  </a>
                </p>
                <a href='#' class='block'>
                  <h3 class='mt-2 text-xl leading-7 font-semibold text-gray-900'>
                    How to use search engine optimization to drive sales
                  </h3>
                  <p class='mt-3 text-base leading-6 text-gray-500'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Velit facilis asperiores porro quaerat doloribus, eveniet
                    dolore. Adipisci tempora aut inventore optio animi., tempore
                    temporibus quo laudantium.
                  </p>
                </a>
              </div>
              <div class='mt-6 flex items-center'>
                <div class='flex-shrink-0'>
                  <a href='#'>
                    <img
                      class='h-10 w-10 rounded-full'
                      src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                      alt=''
                    />
                  </a>
                </div>
                <div class='ml-3'>
                  <p class='text-sm leading-5 font-medium text-gray-900'>
                    <a href='#' class='hover:underline'>
                      Brenna Goyette
                    </a>
                  </p>
                  <div class='flex text-sm leading-5 text-gray-500'>
                    <time datetime='2020-03-16'>Mar 16, 2020</time>
                    <span class='mx-1'>&middot;</span>
                    <span>6 min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class='flex flex-col rounded-lg shadow-lg overflow-hidden'>
            <div class='flex-shrink-0'>
              <img
                class='h-48 w-full object-cover'
                src='https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
                alt=''
              />
            </div>
            <div class='flex-1 bg-white p-6 flex flex-col justify-between'>
              <div class='flex-1'>
                <p class='text-sm leading-5 font-medium text-indigo-600'>
                  <a href='#' class='hover:underline'>
                    {' '}
                    Case Study
                  </a>
                </p>
                <a href='#' class='block'>
                  <h3 class='mt-2 text-xl leading-7 font-semibold text-gray-900'>
                    Improve your customer experience
                  </h3>
                  <p class='mt-3 text-base leading-6 text-gray-500'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint harum rerum voluptatem quo recusandae magni placeat
                    saepe molestiae, sed excepturi cumque corporis perferendis
                    hic.
                  </p>
                </a>
              </div>
              <div class='mt-6 flex items-center'>
                <div class='flex-shrink-0'>
                  <a href='#'>
                    <img
                      class='h-10 w-10 rounded-full'
                      src='https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                      alt=''
                    />
                  </a>
                </div>
                <div class='ml-3'>
                  <p class='text-sm leading-5 font-medium text-gray-900'>
                    <a href='#' class='hover:underline'>
                      Daniela Metz
                    </a>
                  </p>
                  <div class='flex text-sm leading-5 text-gray-500'>
                    <time datetime='2020-03-16'>Mar 16, 2020</time>
                    <span class='mx-1'>&middot;</span>
                    <span>6 min read</span>
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
