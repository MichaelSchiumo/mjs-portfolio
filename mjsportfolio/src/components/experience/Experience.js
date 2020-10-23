import React from 'react';
import mixy from '../../images/mixy.svg';
import usDept from '../../images/dept-state.jpg';
import bofa2 from '../../images/bofa2.jpg';
import amcham from '../../images/amcham.jpg';
import vivint from '../../images/vivint.png';
import ameriprise from '../../images/ameriprise.jpg';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import expo from '../../images/expo.jpg';
import { Link } from 'react-router-dom';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

import { Divider } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';

const Experience = () => {
  return (
    <div class='bg-gray-700'>
      <div class='mx-auto py-12 px-4 max-w-screen-xl sm:px-6 lg:px-8 lg:py-24'>
        <div class='space-y-12'>
          <div class='space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none'>
            <h2 class='text-3xl leading-9 font-extrabold text-white tracking-tight sm:text-4xl'>
              Professional <span className='text-gray-900'>Experience</span>
            </h2>
          </div>
          <ul class='space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8'>
            <Flippy
              flipOnHover={false}
              flipOnClick={true}
              flipDirection='horizontal'
            >
              <FrontSide>
                <li class='mb-24 py-10 px-6 bg-gray-800 text-center rounded-lg lg:mb-0 xl:px-10 xl:text-left'>
                  <div class='space-y-6 xl:space-y-10'>
                    <a href='https://www.hellomixy.com'>
                      <img
                        src={mixy}
                        className='mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56 bg-white'
                      />
                    </a>
                    <div class='space-y-2 xl:flex xl:items-center xl:justify-between'>
                      <div class='font-medium text-lg leading-6 space-y-1'>
                        <h4 class='text-white'>Full Stack Web Developer</h4>
                        <p class='text-indigo-400'>Mixy</p>
                      </div>

                      <ul class='flex justify-center space-x-5'>
                        <li>
                          <a
                            href='https://www.linkedin.com/company/mixy/'
                            class='text-gray-400 hover:text-gray-300 transition ease-in-out duration-150'
                          >
                            <span class='sr-only'>LinkedIn</span>
                            <svg
                              class='w-5 h-5'
                              fill='currentColor'
                              viewBox='0 0 20 20'
                            >
                              <path
                                fill-rule='evenodd'
                                d='M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z'
                                clip-rule='evenodd'
                              />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className='text-center'>
                      <button className='bg-gray-300 hover:bg-gray-500 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center lg:-mt-2'>
                        See More
                      </button>
                    </div>
                  </div>
                </li>
              </FrontSide>
              <BackSide>
                <li class='py-4 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left'>
                  <div class='space-y-6 xl:space-y-10'>
                    <div class='space-y-2 xl:flex xl:items-center xl:justify-between'>
                      <div class='font-medium text-lg leading-6 space-y-1'>
                        <h4 class='text-white'>07/20 - Present</h4>
                        <p class='text-indigo-400'>Plano, TX (Remote)</p>
                      </div>
                      <ul class='flex justify-center space-x-5'></ul>
                    </div>
                  </div>

                  <div className='text-white mt-4'>
                    <ul className='list-disc'>
                      <li className='p-1'>
                        Implement UI features that leverage third-party
                        integrations, such as Stripe, Shopify, and AWS, to
                        provide a harmonious User Experience (UX) for Mixy
                        customers and clients operating in the Health Food
                        Industry.
                      </li>
                      <li className='p-1'>
                        Extend existing backend functionality with Rails for
                        managing customer data, transactions, and Cloud
                        technology.
                      </li>
                      <li className='p-1'>
                        Design customized features on the frontend using React
                        and tailored components from Tailwind CSS.
                      </li>
                    </ul>
                  </div>
                </li>
              </BackSide>
            </Flippy>
            <Flippy
              flipOnHover={false}
              flipOnClick={true}
              flipDirection='horizontal'
            >
              <FrontSide>
                <li class='mb-24 py-10 px-6 bg-gray-800 text-center rounded-lg lg:mb-0 xl:px-10 xl:text-left'>
                  <div class='space-y-6 xl:space-y-10'>
                    <a href='http://www.usapavilion2017.org/'>
                      <img
                        class='mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56'
                        src={usDept}
                        alt=''
                      />
                    </a>
                    <div class='space-y-2 xl:flex xl:items-center xl:justify-between'>
                      <div class='font-medium text-lg leading-6 space-y-1'>
                        <h4 class='text-white'>Cultural Ambassador</h4>
                        <p class='text-indigo-400'>US Department of State</p>
                      </div>

                      <ul class='flex justify-center space-x-5'>
                        <li>
                          <a
                            href='https://www.linkedin.com/company/usapavilionastanaexpo2017/about/'
                            class='text-gray-400 hover:text-gray-300 transition ease-in-out duration-150'
                          >
                            <span class='sr-only'>LinkedIn</span>
                            <svg
                              class='w-5 h-5'
                              fill='currentColor'
                              viewBox='0 0 20 20'
                            >
                              <path
                                fill-rule='evenodd'
                                d='M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z'
                                clip-rule='evenodd'
                              />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className='text-center'>
                      <button className='bg-gray-300 hover:bg-gray-500 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center'>
                        See More
                      </button>
                    </div>
                  </div>
                </li>
              </FrontSide>
              <BackSide>
                <li class='py-4 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left'>
                  <div class='space-y-6 xl:space-y-10'>
                    <div class='space-y-2 xl:flex xl:items-center xl:justify-between'>
                      <div class='font-medium text-lg leading-6 space-y-1'>
                        <h4 class='text-white'>05/17 - 09/17</h4>
                        <p class='text-indigo-400'>Astana, Kazakhstan</p>
                      </div>
                      <ul class='flex justify-center space-x-5'></ul>
                    </div>
                  </div>
                  <div className='text-white mt-4'>
                    <ul className='list-disc'>
                      <li className='p-2'>
                        Employed language skills and knowledge of energy
                        technologies to educate nearly 3.9 million guests in
                        Russian, English, and Kazakh, increasing understanding
                        of energy policy as related to the US.
                      </li>
                      <li className='p-2'>
                        Collaborated with Ambassador Krol, executives, and
                        stakeholders of the Pavilion to improve operations and
                        team cohesiveness.
                      </li>
                    </ul>
                  </div>
                  <div className='text-center mt-4 text-white'>
                    <a
                      href='http://www.usapavilion2017.org/first-impressions-of-the-worlds-fair-what-expo-means-to-me/index.html'
                      className='bg-gray-300 hover:bg-gray-500 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center'
                    >
                      Visit USAP
                    </a>
                  </div>
                </li>
              </BackSide>
            </Flippy>
            <Flippy
              flipOnHover={false}
              flipOnClick={true}
              flipDirection='horizontal'
            >
              <FrontSide>
                <li class='mb-24 py-10 px-6 bg-gray-800 text-center rounded-lg lg:mb-0 xl:px-10 xl:text-left'>
                  <div class='space-y-6 xl:space-y-10'>
                    <img
                      class='mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56'
                      src={bofa2}
                      alt=''
                    />
                    <div class='space-y-2 xl:flex xl:items-center xl:justify-between'>
                      <div class='font-medium text-lg leading-6 space-y-1'>
                        <h4 class='text-white'>Financial Analyst</h4>
                        <p class='text-indigo-400'>Bank of America</p>
                      </div>

                      <ul class='flex justify-center space-x-5'>
                        <li>
                          <a
                            href='https://www.linkedin.com/company/bank-of-america/'
                            class='text-gray-400 hover:text-gray-300 transition ease-in-out duration-150'
                          >
                            <span class='sr-only'>LinkedIn</span>
                            <svg
                              class='w-5 h-5'
                              fill='currentColor'
                              viewBox='0 0 20 20'
                            >
                              <path
                                fill-rule='evenodd'
                                d='M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z'
                                clip-rule='evenodd'
                              />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className='text-center'>
                      <button className='bg-gray-300 hover:bg-gray-500 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center lg:-mt-4'>
                        See More
                      </button>
                    </div>
                  </div>
                </li>
              </FrontSide>
              <BackSide>
                <li class='py-4 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left'>
                  <div class='space-y-6 xl:space-y-10'>
                    <div class='space-y-2 xl:flex xl:items-center xl:justify-between'>
                      <div class='font-medium text-lg leading-6 space-y-1'>
                        <h4 class='text-white'>06/16 - 09/16</h4>
                        <p class='text-indigo-400'>New York, NY</p>
                      </div>
                      <ul class='flex justify-center space-x-5'></ul>
                    </div>
                  </div>
                  <div className='text-white mt-4'>
                    <ul className='list-disc'>
                      <li className='p-2'>
                        Managed divisional Profit & Loss (P&L) schedules for CFO
                        to determine proper asset allocation in future quarters.
                      </li>
                      <li className='p-2'>
                        Focused on revenues and expenses of the Wealth
                        Management segment to furnish comprehensive reports.
                      </li>
                      <li className='p-2'>
                        Attended 5-10 Revenue Roundtables with Wealth Management
                        business executives, garnering greater understanding of
                        high-level organizational and bank-wide goals.
                      </li>
                    </ul>
                  </div>
                </li>
              </BackSide>
            </Flippy>
            <Flippy
              flipOnHover={false}
              flipOnClick={true}
              flipDirection='horizontal'
            >
              <FrontSide>
                <li class='mb-24 py-10 px-6 bg-gray-800 text-center rounded-lg lg:mb-0 xl:px-10 xl:text-left'>
                  <div class='space-y-6 xl:space-y-10'>
                    <a href='http://amcham.kz/'>
                      <img
                        class='mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56'
                        src={amcham}
                        alt=''
                      />
                    </a>
                    <div class='space-y-2 xl:flex xl:items-center xl:justify-between'>
                      <div class='font-medium text-lg leading-6 space-y-1'>
                        <h4 class='text-white'>
                          Economic Policy / Translation
                        </h4>
                        <p class='text-indigo-400'>
                          American Chamber of Commerce
                        </p>
                      </div>
                    </div>
                    <div className='text-center'>
                      <button className='bg-gray-300 hover:bg-gray-500 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center lg:-mt-4'>
                        See More
                      </button>
                    </div>
                  </div>
                </li>
              </FrontSide>
              <BackSide>
                <li class='py-4 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left'>
                  <div class='space-y-6 xl:space-y-10'>
                    <div class='space-y-2 xl:flex xl:items-center xl:justify-between'>
                      <div class='font-medium text-lg leading-6 space-y-1'>
                        <h4 class='text-white'>01/15 - 08/15</h4>
                        <p class='text-indigo-400'>Almaty, Kazakhstan</p>
                      </div>
                      <ul class='flex justify-center space-x-5'></ul>
                    </div>
                  </div>
                  <div className='text-white mt-4'>
                    <ul className='list-disc'>
                      <li className='p-1'>
                        Conducted research on Tax Code and Accounting Practices
                        following the 2014 Tax Overhaul in Kazakhstan, updating
                        practices for more accessibility in international
                        markets and Foreign Direct Investment.
                      </li>
                      <li className='p-1'>
                        Facilitated biweekly meetings with top executives
                        concerning stimulation of the budding Kazakh business
                        climate.
                      </li>
                      <li className='p-1'>
                        Wrote and translated articles for Investors' Voice,
                        focusing on the Oil Industry.
                      </li>
                    </ul>
                  </div>
                  <div className='text-center mt-4 text-white'>
                    <a
                      href='http://amcham.kz/publications'
                      className='bg-gray-300 hover:bg-gray-500 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center'
                    >
                      Visit AmCham
                    </a>
                  </div>
                </li>
              </BackSide>
            </Flippy>
            <Flippy
              flipOnHover={false}
              flipOnClick={true}
              flipDirection='horizontal'
            >
              <FrontSide>
                <li class='mb-24 py-10 px-6 bg-gray-800 text-center rounded-lg lg:mb-0 xl:px-10 xl:text-left'>
                  <div class='space-y-6 xl:space-y-10'>
                    <a href='https://www.vivintsolar.com/'>
                      <img
                        class='mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56'
                        src={vivint}
                        alt=''
                      />
                    </a>
                    <div class='space-y-2 xl:flex xl:items-center xl:justify-between'>
                      <div class='font-medium text-lg leading-6 space-y-1'>
                        <h4 class='text-white'>Energy Consultant</h4>
                        <p class='text-indigo-400'>Vivint Solar</p>
                      </div>

                      <ul class='flex justify-center space-x-5'>
                        <li>
                          <a
                            href='https://www.linkedin.com/company/vivintsolar/'
                            class='text-gray-400 hover:text-gray-300 transition ease-in-out duration-150'
                          >
                            <span class='sr-only'>LinkedIn</span>
                            <svg
                              class='w-5 h-5'
                              fill='currentColor'
                              viewBox='0 0 20 20'
                            >
                              <path
                                fill-rule='evenodd'
                                d='M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z'
                                clip-rule='evenodd'
                              />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className='text-center'>
                      <button className='bg-gray-300 hover:bg-gray-500 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center lg:mt-4'>
                        See More
                      </button>
                    </div>
                  </div>
                </li>
              </FrontSide>
              <BackSide>
                <li class='py-4 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left'>
                  <div class='space-y-6 xl:space-y-10'>
                    <div class='space-y-2 xl:flex xl:items-center xl:justify-between'>
                      <div class='font-medium text-lg leading-6 space-y-1'>
                        <h4 class='text-white'>12/17 - 03/18</h4>
                        <p class='text-indigo-400'>Northern New Jersey</p>
                      </div>
                      <ul class='flex justify-center space-x-5'></ul>
                    </div>
                  </div>
                  <div className='text-white mt-2'>
                    <ul className='list-disc'>
                      <li>
                        Generated $40,000+ of revenue in newly identified,
                        targeted markets.
                      </li>
                      <li className='p-1'>
                        Employed expert-level knowledge of solar technologies to
                        create professional schematics, cost-benefit analyses,
                        and determine the appropriate leasing or ownership plan
                        for the customer.
                      </li>
                      <li className='p-1'>
                        Guided homeowners through the entire cycle of solar
                        adoption to maximize cost savings, efficiency, and
                        effectiveness.
                      </li>
                      <li className='p-1'>
                        Generated leads, scheduled appointments, and conducted
                        consultations to drive private solar installations.
                      </li>
                    </ul>
                  </div>
                </li>
              </BackSide>
            </Flippy>
            <Flippy
              flipOnHover={false}
              flipOnClick={true}
              flipDirection='horizontal'
            >
              <FrontSide>
                <li class='mb-24 py-10 px-6 bg-gray-800 text-center rounded-lg lg:mb-0 xl:px-10 xl:text-left'>
                  <div class='space-y-6 xl:space-y-10'>
                    <a href='https://www.ameriprise.com/'>
                      <img
                        class='mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56'
                        src={ameriprise}
                        alt=''
                      />
                    </a>
                    <div class='space-y-2 xl:flex xl:items-center xl:justify-between'>
                      <div class='font-medium text-lg leading-6 space-y-1'>
                        <h4 class='text-white'>Finance Intern</h4>
                        <p class='text-indigo-400'>Ameriprise Financial</p>
                      </div>

                      <ul class='flex justify-center space-x-5'>
                        <li>
                          <a
                            href='https://www.linkedin.com/company/ameriprise-financial-services-llc/'
                            class='text-gray-400 hover:text-gray-300 transition ease-in-out duration-150'
                          >
                            <span class='sr-only'>LinkedIn</span>
                            <svg
                              class='w-5 h-5'
                              fill='currentColor'
                              viewBox='0 0 20 20'
                            >
                              <path
                                fill-rule='evenodd'
                                d='M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z'
                                clip-rule='evenodd'
                              />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className='text-center'>
                      <button className='bg-gray-300 hover:bg-gray-500 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center lg:mt-4'>
                        See More
                      </button>
                    </div>
                  </div>
                </li>
              </FrontSide>
              <BackSide>
                <li class='py-4 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-left'>
                  <div class='space-y-6 xl:space-y-10'>
                    <div class='space-y-2 xl:flex xl:items-center xl:justify-between'>
                      <div class='font-medium text-lg leading-6 space-y-1'>
                        <h4 class='text-white mt-2'>09/14 - 10/14</h4>
                        <p class='text-indigo-400'>Charlotte, NC</p>
                      </div>
                      <ul class='flex justify-center space-x-5'></ul>
                    </div>
                  </div>
                  <div className='text-white lg:mt-6'>
                    <ul className='list-disc'>
                      <li className='lg:p-2'>
                        Shadowed a Certified Financial Planning Professional.
                      </li>
                      <li className='lg:p-2'>
                        Utilized software to predict and ensure positive
                        outcomes for clients.
                      </li>
                      <li className='lg:p-2'>
                        Attended client meetings to better understand financial
                        strategies.
                      </li>
                      <p className='mt-40'></p>
                    </ul>
                  </div>
                </li>
              </BackSide>
            </Flippy>
          </ul>
        </div>
      </div>
      <div className='text-center mb-2 lg:mb-10'>
        <Link
          className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center'
          to='resume.pdf'
          target='_blank'
          download
          id='button'
        >
          Download Resume
        </Link>
      </div>
      <div>
        <div className='text-center text-white'>
          <div>
            <Divider />
            <br></br>
            <a
              href='https://www.linkedin.com/in/michael-john-schiumo-7860b668/'
              target='_blank'
              rel='noopener noreferrer'
              className='icons-bar'
            >
              <LinkedInIcon className='text-white' fontSize='large' />
            </a>
            <a
              href='https://github.com/Michaelschiumo'
              target='_blank'
              rel='noopener noreferrer'
              className='icons-bar'
            >
              <GitHubIcon className='text-white' fontSize='large' />
            </a>
            <a
              href='mailto:michaeljanschiumo@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
              className='icons-bar'
            >
              <EmailIcon className='text-white' fontSize='large' />
            </a>
          </div>
          <h1 className='lg:mt-4'>Stay Connected</h1>
        </div>
      </div>
    </div>
  );
};

export default Experience;
