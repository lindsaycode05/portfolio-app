import React from 'react';
import { FiGithub } from 'react-icons/fi';
import quublyy from '../images/quublyy.png';

const Quublyy = () => {
  return (
    <div className='pt-0.5 pb-12 px-6 text-left xl:pb-24 relative'>
      <div className='grid lg:grid-cols-2 lg:gap-8 xl:gap-12 place-items-center mt-20 lg:mt-32'>
        <div>
          <img src={quublyy} alt='quublyy project' />
        </div>
        <div className='flex flex-col mt-8 sm:mt-12 lg:mt-0'>
          <p className='text-lg'>Search Engine</p>
          <h3 className='text-2xl md:text-3xl bg-primary-white text-quublyy-color inline-block w-max py-0.5 px-4 rounded-sm mt-0.5'>
            Quublyy
          </h3>
          <p className='mt-3 text-lg'>
            In the case Google is down, don't you worry, but meet Quublyy, a new
            & minimalist search app. On Quublyy you can search anything you've
            ever wished and get that in no time. Search for Websites, breaking
            News, Images or Videos.
          </p>
          <div className='flex flex-wrap max-w-xl gap-5 mt-6'>
            <p className='bg-primary-white rounded-full flex justify-center items-center w-max py-0.5 px-5'>
              React.js
            </p>
            <p className='bg-primary-white rounded-full flex justify-center items-center w-max py-0.5 px-5'>
              React Context
            </p>
            <p className='bg-primary-white rounded-full flex justify-center items-center w-max py-0.5 px-5'>
              React Router
            </p>
            <p className='bg-primary-white rounded-full flex justify-center items-center w-max py-0.5 px-5'>
              Tailwind
            </p>
            <p className='bg-primary-white rounded-full flex justify-center items-center w-max py-0.5 px-5'>
              Google Search API
            </p>
          </div>
          <div className='flex flex-col gap-6 mt-7'>
            <a
              href='https://quublyy-search-app.netlify.app'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-gradient-to-r from-button-secondary-from-gradient to-button-secondary-to-gradient w-max rounded-sm py-2 px-6 hover:opacity-60 transition-opacity'
            >
              Watch it in action 🎯
            </a>
            <a
              href='https://github.com/dragoshcode/quublyy-search-app'
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

export default Quublyy;
