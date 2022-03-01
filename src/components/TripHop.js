import React from 'react';
import triphop from '../images/triphop.png';
import { FiGithub } from 'react-icons/fi';

const TripHop = () => {
  return (
    <div id='projects' className='bg-gradient-to-tr from-very-light-brown to-very-light-orange pt-14 lg:pt-24 pb-12 px-6 text-left xl:pb-24 relative'>
      <div className='relative text-3xl lg:text-5xl'>
        <h2 className='text-dark-purple text-3xl lg:text-5xl text-center'>
          My Projects
        </h2>
        <div className='absolute w-24 h-0.5 bg-dark-purple left-1/2 -translate-x-1/2 -translate-y-1/2 top-16 xl:top-20 rounded-sm'></div>
      </div>
      <div className='grid lg:grid-cols-2 lg:gap-8 xl:gap-12 place-items-center mt-20 lg:mt-32'>
        <div className=''>
          <img src={triphop} alt='triphop project' />
        </div>
        <div className='flex flex-col mt-8 sm:mt-12 lg:mt-0'>
          <p className='text-lg'>Travel Companion</p>
          <h3 className='text-2xl md:text-3xl bg-primary-white text-triphop-color inline-block w-max py-0.5 px-4 rounded-sm mt-0.5'>
            TripHop
          </h3>
          <p className='mt-3 text-lg'>
            A simple travel companion app which shows the interesting places
            around. TripHop is an app which you can use to see
            what Hotels, Restaurants or simply Attractions are in any spot of
            the world.
          </p>
          <div className='flex flex-wrap max-w-xl gap-5 mt-6'>
            <p className='bg-primary-white rounded-full flex justify-center items-center w-max py-0.5 px-5'>
              React.js
            </p>
            <p className='bg-primary-white rounded-full flex justify-center items-center w-max py-0.5 px-5'>
              MaterialUI
            </p>
            <p className='bg-primary-white rounded-full flex justify-center items-center w-max py-0.5 px-5'>
              Google Maps API
            </p>
            <p className='bg-primary-white rounded-full flex justify-center items-center w-max py-0.5 px-5'>
              Trip Advisor API
            </p>
            <p className='bg-primary-white rounded-full flex justify-center items-center w-max py-0.5 px-5'>
              Open Weather Map API
            </p>
          </div>
          <div className='flex flex-col gap-6 mt-7'>
            <a
              href='https://triphop-location-finder.netlify.app'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-gradient-to-r from-button-secondary-from-gradient to-button-secondary-to-gradient w-max rounded-sm py-2 px-6 hover:opacity-60 transition-opacity'
            >
              Watch it in action 🎯
            </a>
            <a
              href='https://github.com/dragoshcode/triphop-locations-finder-app'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-gradient-to-r from-button-secondary-from-gradient to-button-secondary-to-gradient w-max rounded-sm py-2 px-6 flex items-center gap-2 hover:opacity-60 transition-opacity'
            >
              See it within <FiGithub />{' '}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripHop;
