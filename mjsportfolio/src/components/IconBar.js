import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

const IconBar = () => {
  return (
    <div className='bg-white -mt-24 lg:-mt-32'>
      <div class='w-1/3 mx-auto py-12 px-4 sm:px-6 lg:px-8'>
        <div class='grid grid-cols-3 gap-10 lg:gap-2'>
          <div class='col-span-1 flex justify-center'>
            <a
              href='https://www.linkedin.com/in/cindy-kei/'
              target='_blank'
              rel='noopener noreferrer'
              className='icons-bar'
            >
              <LinkedInIcon fontSize='large' />
            </a>
          </div>
          <div class='col-span-1 flex justify-center'>
            <a
              href='https://github.com/myk245'
              target='_blank'
              rel='noopener noreferrer'
              className='icons-bar'
            >
              <GitHubIcon fontSize='large' />
            </a>
          </div>
          <div class='col-span-1 flex justify-center'>
            <a
              href='https://twitter.com/KeiCindy'
              target='_blank'
              rel='noopener noreferrer'
              className='icons-bar'
            >
              <EmailIcon fontSize='large' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IconBar;
