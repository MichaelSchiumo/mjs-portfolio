import React from 'react';
import awsCert from '../images/blog/awsCert.jpg';
import psm from '../images/blog/psm-logo.png';
import Logos1 from './Logos1';
import portrait from '../images/cropped-portrait.jpg';

const About = () => {
  return (
    <div class='bg-white'>
      <div>
        <div class='max-w-6xl mx-auto text-center py-16 px-2 sm:py-20 sm:px-6 lg:px-8'>
          <h2 class='text-3xl -mt-6 lg:p-2 lg:text-5xl lg:leading-9 tracking-tight font-extrabold text-gray-700 lg:-mt-8'>
            Background<span className='text-gray-900'> and </span>Certifications
          </h2>
          <img
            src={portrait}
            class='mt-4 h-48 xl:h-64 text-lg rounded-full mx-auto'
          />
          <p class='max-w-3xl text-sm mt-4 lg:text-lg lg:mt-4 text-gray-900 mx-auto pr-6 lg:pr-0 sm:text-center lg:text-left'>
            Prior to becoming a Developer, I have worked in multiple fields,
            including Finance at Merrill Lynch, International Diplomacy at US
            Department of State, and Renewable Energy with Vivint Solar. I am
            fluent in Russian, and have lived and worked abroad in Kazakhstan
            for Ambassador Krol and the American Chamber of Commerce. With my
            skills in Web Development, I hope to unify my talents to enrich the
            lives of others through technology.
          </p>
          <p class='max-w-3xl text-sm mt-4 lg:text-lg lg:mt-4 text-gray-900 mx-auto pr-6 lg:pr-0 sm:text-center lg:text-left'>
            When I'm not coding, I am an avid soccer player. I love to write,
            ski, and be in the outdoors. I have a Jack Russell named Rudy, who
            keeps me on my toes at all times. Most of all, I enjoy speaking
            Russian and learning new cultures and languages.
          </p>
          <p class='max-w-3xl mt-4 text-sm lg:text-lg lg:mt-4 text-gray-900 mx-auto pr-6 lg:pr-0 sm:text-center lg:text-left'>
            Below are the technologies that I currently use, as well as
            additional certifications that I hold.
          </p>
          <p class='max-w-3xl mt-4 text-sm lg:text-2xl lg:mt-4 text-gray-900 mx-auto pr-6 lg:pr-0 sm:text-center lg:text-center extrabold font-legal lg:shadow-2xl'>
            Ruby, Rails, JavaScript, React, ExpressJS, HTML, CSS, SQL, MongoDB,
            Postgres
          </p>
        </div>
      </div>
      <div>
        <div class='-mt-10 mb-4 grid gap-5 mx-auto px-2 lg:grid-cols-2 lg:max-w-6xl lg:px-20'>
          <div class='flex flex-col rounded-lg shadow-lg overflow-hidden border-solid border-4'>
            <div class='flex-shrink-0'>
              <img class='h-48 w-full object-contain' src={psm} alt='' />
            </div>
            <div class='flex-1 bg-white p-6 flex flex-col justify-between hover:bg-gray-300'>
              <div class='flex-1'>
                <p class='text-sm leading-5 font-medium text-indigo-600'></p>

                <h3 class='mt-2 text-xl leading-7 font-semibold text-gray-900 text-left'>
                  Professional Scrum Master (PSM) I
                </h3>
                <div class='mt-3 text-base text-extrabold leading-6 text-gray-800 text-center'>
                  <p mt-3 class='text-base leading-6 text-gray-800 text-left'>
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
                <h3 class='mt-2 text-xl leading-7 font-semibold text-gray-900 text-left'>
                  Amazon Web Services Certified Cloud Practitioner (CCP)
                </h3>
                <div class='mt-3 text-base text-extrabold leading-6 text-gray-800'>
                  <p mt-3 class='text-base leading-6 text-gray-800 text-left'>
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
