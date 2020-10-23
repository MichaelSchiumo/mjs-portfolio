import React from 'react';
import githubFinder from '../images/github-finder.png';
import GitHubIcon from '@material-ui/icons/GitHub';
import cuisineCurator from '../images/cuisine-curator.png';
import aspirationStation from '../images/aspiration-station.png';
import LogoCloud from './LogoCloud.js';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import { Divider } from '@material-ui/core';

const Projects = () => {
  return (
    <div class='relative bg-gray-50 pt-16 pb-20 sm:px-6 lg:px-0 lg:pt-24 lg:pb-28'>
      <div class='relative max-w-7xl mx-auto px-4'>
        <div class='text-center'>
          <h2 class='text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10'>
            Original <span className='text-gray-700'>Applications</span>
          </h2>
          <p class='mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-800 sm:mt-4'>
            I strive to build applications that prioritize User Experience (UX)
            and <br />
            seamless design.
          </p>
        </div>
        <div class='mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none shadow-xl'>
          <div class='flex flex-col rounded-lg shadow-lg overflow-hidden'>
            <div class='flex-shrink-0'>
              <img class='h-48 w-full object-cover' src={githubFinder} alt='' />
            </div>
            <div class='flex-1 bg-white p-6 flex flex-col justify-between hover:bg-gray-300'>
              <div class='flex-1'>
                <p class='text-sm leading-5 font-medium text-indigo-600'>
                  <a href='#' class='hover:underline'>
                    Github Finder
                  </a>
                </p>
                <a href='#' class='block'>
                  <h3 class='mt-2 text-xl leading-7 font-semibold text-gray-900'>
                    A simple way to search for Github profiles
                  </h3>
                  <div class='mt-3 text-base text-extrabold leading-6 text-gray-800'>
                    <p mt-3 class='text-base leading-6 text-gray-800'>
                      Leveraged React Hooks and the Context API for state
                      management. Retrieved and parsed data directly from the
                      Github API. Utilized CSS and custom styles to create a
                      clean, user-friendly interface.
                    </p>
                  </div>
                </a>
              </div>
              <div class='mt-6 flex items-center'>
                <div class='flex-shrink-0'>
                  <a
                    href='https://github.com/MichaelSchiumo/my-github-finder/tree/master/Desktop/github-finder'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='icons-bar'
                  >
                    <GitHubIcon fontSize='large' />
                  </a>
                </div>
                <div class='ml-3'>
                  <p class='text-sm leading-5 font-medium text-gray-900'>
                    <a
                      href='https://msgithubfinder.netlify.app/'
                      class='hover:underline bg-transparent
                      hover:bg-gray-800
                      text-black
                      font-semibold
                      hover:text-white
                      py-2
                      px-4
                      border
                      border-black
                      hover:border-transparent
                      rounded'
                    >
                      View Demo
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class='flex flex-col rounded-lg shadow-lg overflow-hidden'>
            <div class='flex-shrink-0'>
              <img
                class='h-48 w-full object-cover'
                src={cuisineCurator}
                alt=''
              />
            </div>
            <div class='flex-1 bg-white p-6 flex flex-col justify-between hover:bg-gray-300'>
              <div class='flex-1'>
                <p class='text-sm leading-5 font-medium text-indigo-600'>
                  <a href='#' class='hover:underline'>
                    Cuisine Curator
                  </a>
                </p>
                <a href='#' class='block'>
                  <h3 class='mt-2 text-xl leading-7 font-semibold text-gray-900'>
                    Create, store, and search your recipes
                  </h3>
                  <div class='mt-3 text-base text-extrabold leading-6 text-gray-800'>
                    <p mt-3 class='text-base leading-6 text-gray-800'>
                      Integrated the Rails framework to handle MVC logic and
                      RESTful routes. Incorporated OAuth capabilities to enable
                      users to log in with Gmail. Built out full CRUD
                      functionality to manage and track recipes.
                    </p>
                  </div>
                </a>
              </div>
              <div class='mt-6 flex items-center'>
                <div class='flex-shrink-0'>
                  <a
                    href='https://github.com/MichaelSchiumo/cuisine_curator_app'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='icons-bar'
                  >
                    <GitHubIcon fontSize='large' />
                  </a>
                </div>
                <div class='ml-3'>
                  <p class='text-sm leading-5 font-medium text-gray-900'>
                    <a
                      href='https://www.youtube.com/watch?v=LUsu-GuEF9o'
                      class='hover:underline bg-transparent
                      hover:bg-gray-800
                      text-black
                      font-semibold
                      hover:text-white
                      py-2
                      px-4
                      border
                      border-black
                      hover:border-transparent
                      rounded'
                    >
                      View Demo
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class='flex flex-col rounded-lg shadow-lg overflow-hidden'>
            <div class='flex-shrink-0'>
              <img
                class='h-48 w-full object-cover'
                src={aspirationStation}
                alt=''
              />
            </div>
            <div class='flex-1 bg-white p-6 flex flex-col justify-between hover:bg-gray-300'>
              <div class='flex-1'>
                <p class='text-sm leading-5 font-medium text-indigo-600'>
                  <a href='#' class='hover:underline'>
                    Aspiration Station
                  </a>
                </p>
                <a href='#' class='block'>
                  <h3 class='mt-2 text-xl leading-7 font-semibold text-gray-900'>
                    Track your aspirations and ambitions
                  </h3>
                  <div class='mt-3 text-base text-extrabold leading-6 text-gray-800'>
                    <p mt-3 class='text-base leading-6 text-gray-800'>
                      Constructed a full Rails API to manage data for rendering
                      on frontend. Integrated Redux functionality in tandem with
                      React to manage state.
                    </p>
                  </div>
                </a>
              </div>
              <div class='mt-6 flex items-center'>
                <div class='flex-shrink-0'>
                  <a
                    href='https://github.com/MichaelSchiumo/aspiration-station'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='icons-bar'
                  >
                    <GitHubIcon fontSize='large' />
                  </a>
                </div>
                <div class='ml-3'>
                  <p class='text-sm leading-5 font-medium text-gray-900'>
                    <a
                      href='https://www.youtube.com/watch?v=aDXxR4CHaCQ'
                      class='hover:underline bg-transparent
                      hover:bg-gray-800
                      text-black
                      font-semibold
                      hover:text-white
                      py-2
                      px-4
                      border
                      border-black
                      hover:border-transparent
                      rounded'
                    >
                      View Demo
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='lg:w-full lg:-mb-20'>
        <LogoCloud />
      </div>
    </div>
  );
};

export default Projects;
