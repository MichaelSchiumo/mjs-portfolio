import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';

const Footer = () => {
  return (
    <footer class='bg-gray-700 bottom:auto'>
      <div class='max-w-screen-xl mx-auto py-12 px-4 overflow-hidden space-y-8 sm:px-6 lg:px-8'>
        <nav class='-mx-5 -my-2 flex flex-wrap justify-center'>
          <div class='px-5 py-2'>
            <a
              href='#'
              class='text-base leading-6 text-gray-500 hover:text-gray-900'
            >
              About
            </a>
          </div>
          <div class='px-5 py-2'>
            <a
              href='#'
              class='text-base leading-6 text-gray-500 hover:text-gray-900'
            >
              Blog
            </a>
          </div>
          <div class='px-5 py-2'>
            <a
              href='#'
              class='text-base leading-6 text-gray-500 hover:text-gray-900'
            >
              Jobs
            </a>
          </div>
          <div class='px-5 py-2'>
            <a
              href='#'
              class='text-base leading-6 text-gray-500 hover:text-gray-900'
            >
              Press
            </a>
          </div>
          <div class='px-5 py-2'>
            <a
              href='#'
              class='text-base leading-6 text-gray-500 hover:text-gray-900'
            >
              Accessibility
            </a>
          </div>
          <div class='px-5 py-2'>
            <a
              href='#'
              class='text-base leading-6 text-gray-500 hover:text-gray-900'
            >
              Partners
            </a>
          </div>
        </nav>
        <div class='mt-8 flex justify-center space-x-6'>
          <a
            href='https://www.linkedin.com/in/michael-john-schiumo-7860b668/'
            class='text-gray-400 hover:text-gray-500'
          >
            <span class='sr-only'>LinkedIn</span>
            <LinkedInIcon className='text-white' fontSize='large' />
          </a>
          <a
            href='https://github.com/Michaelschiumo'
            class='text-gray-400 hover:text-gray-500'
          >
            <span class='sr-only'>GitHub</span>
            <GitHubIcon className='text-white' fontSize='large' />
          </a>
          <a
            href='mailto:michaeljanschiumo@gmail.com'
            class='text-gray-400 hover:text-gray-500'
          >
            <span class='sr-only'>Email</span>
            <EmailIcon className='text-white' fontSize='large' />
          </a>
        </div>
        <p class='mt-8 text-center text-base leading-6 text-gray-400'>
          &copy; 2020 Michael J. Schiumo. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
