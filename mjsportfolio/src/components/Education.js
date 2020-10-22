import React from 'react';
import Finance from './edu/Finance.js';
import Russian from './edu/Russian.js';
import Flatiron from './edu/Flatiron.js';
import IconBar from './IconBar.js';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Divider } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

const Education = () => {
  return (
    <div className='justify-items-center'>
      <div
        id='container'
        class='grid grid-cols-3 lg:grid-cols-1 gap-4 justify-items-center p-2 h-36 mt-6 lg:p-0'
      >
        <div className='bg-white mr-40 -mb-10'>
          <div className='lg:w-3/4 mx-auto py-16 px-4 sm:py-24 sm:px-6 -mt-16 lg:px-8 lg:-mt-40'>
            <div className='text-center grid grid-cols-1'>
              <div class='quote--container'>
                <p class='quote italic'>
                  “Education is the most powerful weapon which you can use to{' '}
                  <span class='quote--highlight'>change the world</span>.”
                </p>
                <p class='quote--author'>&ndash; Nelson Mandela</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='education'>
        <div id='container' className='p-1'>
          <Flatiron />
        </div>
        <div id='container' className='p-1'>
          <Finance />
        </div>
        <div id='container' className='p-1'>
          <Russian />
        </div>
      </div>
      <div className='lg:mt-2 p-2 text-center'>
        <div>
          <Divider />
          <br></br>
          <a
            href='https://www.linkedin.com/in/michael-john-schiumo-7860b668/'
            target='_blank'
            rel='noopener noreferrer'
            className='icons-bar'
          >
            <LinkedInIcon fontSize='large' />
          </a>
          <a
            href='https://github.com/Michaelschiumo'
            target='_blank'
            rel='noopener noreferrer'
            className='icons-bar'
          >
            <GitHubIcon fontSize='large' />
          </a>
          <a
            href='mailto:michaeljanschiumo@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
            className='icons-bar'
          >
            <EmailIcon fontSize='large' />
          </a>
        </div>
        <h1 className='lg:mt-4'>Stay Connected</h1>
      </div>
    </div>
  );
};

export default Education;
