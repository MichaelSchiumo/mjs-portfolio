import React from 'react';
import awsCert from '../images/blog/awsCert.jpg';
import psm from '../images/blog/psm-logo.png';
import GitHubIcon from '@material-ui/icons/GitHub';
import LogoCloud from './LogoCloud';
import POL from '../images/pol.jpg';

const About = () => {
  return (
    <div class='relative bg-gray-50 pt-16 pb-20 sm:px-6 lg:px-0 lg:pt-16 lg:pb-28'>
      <div class='relative max-w-7xl mx-auto px-4'>
        <div class='text-center p-2 lg:p-0 border-solid border-4 lg:ml-40 lg:mr-40 hover:bg-gray-400'>
          <h2 class='leading-10 text-4xl lg:mt-2 lg:p-2 lg:text-5xl lg:leading-9 tracking-tight font-extrabold text-gray-700'>
            About <span className='text-gray-900'>Me</span>
          </h2>
          <div className='lg:mt-2 lg:p-4 lg:ml-56'>
            <img src={POL} className='rounded' />
          </div>
          <p class='sm:mt-4 mt-3 max-w-3xl mx-auto text-xl leading-7 text-gray-900'>
            Prior to becoming a Developer, I worked in multiple fields,
            including Finance, International Diplomacy, and Renewable Energy. I
            am fluent in Russian, and have lived and worked abroad in Kazakhstan
            for Ambassador Krol and the American Chamber of Commerce. With my
            skills in Web Development, I hope to unify my talents to enrich the
            lives of others through technology.
          </p>
          <div className='p-6'>
            <a
              href='/experience'
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
            >
              See Experience
            </a>
          </div>
        </div>
        <div className='text-center mt-10'>
          <h2 class='leading-10 text-4xl lg:mt-2 lg:p-2 lg:text-5xl lg:leading-9 tracking-tight font-extrabold text-gray-700'>
            Certifications
          </h2>
        </div>
        <div class='mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-2 lg:max-w-none shadow-2xl lg:px-20'>
          <div class='flex flex-col rounded-lg shadow-lg overflow-hidden border-solid border-4'>
            <div class='flex-shrink-0'>
              <img class='h-48 w-full object-contain' src={psm} alt='' />
            </div>
            <div class='flex-1 bg-white p-6 flex flex-col justify-between hover:bg-gray-300'>
              <div class='flex-1'>
                <p class='text-sm leading-5 font-medium text-indigo-600'></p>

                <h3 class='mt-2 text-xl leading-7 font-semibold text-gray-900 text-center'>
                  Professional Scrum Master (PSM) I
                </h3>
                <div class='mt-3 text-base text-extrabold leading-6 text-gray-800 text-center'>
                  <p mt-3 class='text-base leading-6 text-gray-800'>
                    The Professional Scrum Master level I (PSM I) assessment is
                    available to anyone who wishes to validate his or her depth
                    of knowledge of the PictureScrum framework and its
                    application. Those who pass the assessment will receive the
                    industry recognized PSM I Certification to demonstrate their
                    fundamental level of Scrum mastery.
                  </p>
                </div>
              </div>
              <div class='mt-6 flex justify-items-center'>
                <div class='ml-3'>
                  <p class='text-sm leading-5 font-medium text-gray-900 text-center'>
                    <a
                      href='https://www.scrum.org/professional-scrum-master-i-certification'
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
                      View Certification
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class='flex flex-col rounded-lg shadow-lg overflow-hidden border-solid border-4'>
            <div class='flex-shrink-0'>
              <img class='h-48 w-full object-contain' src={awsCert} alt='' />
            </div>
            <div class='flex-1 bg-white p-6 flex flex-col justify-between hover:bg-gray-300'>
              <div class='flex-1 text-center'>
                <h3 class='mt-2 text-xl leading-7 font-semibold text-gray-900'>
                  Amazon Web Services Certified Cloud Practitioner (CCP)
                </h3>
                <div class='mt-3 text-base text-extrabold leading-6 text-gray-800'>
                  <p mt-3 class='text-base leading-6 text-gray-800'>
                    The AWS Certified Cloud Practitioner examination is intended
                    for individuals who have the knowledge and skills necessary
                    to effectively demonstrate an overall understanding of the
                    AWS Cloud, independent of specific technical roles addressed
                    by other AWS Certifications.
                  </p>
                </div>
              </div>
              <div class='mt-6 flex items-center'>
                <div class='ml-3'>
                  <p class='text-sm leading-5 font-medium text-gray-900'>
                    <a
                      href='https://aws.amazon.com/certification/certified-cloud-practitioner/'
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
                      View Certification
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
