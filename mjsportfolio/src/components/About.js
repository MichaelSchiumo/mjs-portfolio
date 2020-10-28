import React from 'react';
import awsCert from '../images/blog/awsCert.jpg';
import psm from '../images/blog/psm-logo.png';
import GitHubIcon from '@material-ui/icons/GitHub';
import LogoCloud from './LogoCloud';
import POL from '../images/pol.jpg';
import portrait from '../images/cropped-portrait.jpg';

const About = () => {
  return (
    <div class='bg-white'>
      <div class='max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8'>
        <h2 class='text-4xl lg:-mt-2 lg:p-2 lg:text-5xl lg:leading-9 tracking-tight font-extrabold text-gray-700'>
          Background<span className='text-gray-900'> and </span>Certifications
        </h2>
        <img src={portrait} class='mt-4 h-48 text-lg rounded-full mx-auto' />
        <p class='max-w-3xl text-sm lg:text-lg lg:mt-2 text-gray-900 mx-auto'>
          Prior to becoming a Developer, I worked in multiple fields, including
          Finance, International Diplomacy, and Renewable Energy. I am fluent in
          Russian, and have lived and worked abroad in Kazakhstan for Ambassador
          Krol and the American Chamber of Commerce. With my skills in Web
          Development, I hope to unify my talents to enrich the lives of others
          through technology.
        </p>
      </div>
    </div>
  );
};

export default About;
