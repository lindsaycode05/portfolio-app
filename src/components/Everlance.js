import React from 'react';
import everlance from '../images/everlance.png';
import { FiGithub } from 'react-icons/fi';

const Everlance = () => {
  return (
    <div className='pt-0.5 pb-12 px-6 text-left xl:pb-24 relative'>
      <div className='grid lg:grid-cols-2 lg:gap-8 xl:gap-12 place-items-center mt-20 lg:mt-32'>
        <div className='lg:order-2'>
          <img src={everlance} alt='everlance project' />
        </div>
        <div className='flex flex-col mt-8 sm:mt-12 lg:mt-0 lg:order-1'>
          <p className='text-lg'>Expense Tracker</p>
          <h3 className='text-2xl md:text-3xl bg-primary-white text-everlance-color inline-block w-max py-0.5 px-4 rounded-sm mt-0.5'>
            Everlance
          </h3>
          <p className='mt-3 text-lg'>
            We live in a time where taking count of our earnings is crucial.
            Don't worry, we got you, Everlance is your daily expense tracker.
            With Everlance you can handle your expenses at the next level
          </p>
          <div className='flex flex-wrap max-w-xl gap-5 mt-6'>
            <p className='bg-primary-white rounded-full flex justify-center items-center w-max py-0.5 px-5'>
              React.js
            </p>
            <p className='bg-primary-white rounded-full flex justify-center items-center w-max py-0.5 px-5'>
              Redux
            </p>
            <p className='bg-primary-white rounded-full flex justify-center items-center w-max py-0.5 px-5'>
              React Router
            </p>
            <p className='bg-primary-white rounded-full flex justify-center items-center w-max py-0.5 px-5'>
              Tailwind
            </p>
            <p className='bg-primary-white rounded-full flex justify-center items-center w-max py-0.5 px-5'>
              Local Storage
            </p>
            <p className='bg-gray-300 rounded-full flex justify-center items-center w-max py-0.5 px-5'>
              MomentJS
            </p>
            <p className='bg-gray-300 rounded-full flex justify-center items-center w-max py-0.5 px-5'>
              HeadlessUI
            </p>
            <p className='bg-gray-300 rounded-full flex justify-center items-center w-max py-0.5 px-5'>
              ToastifyJS
            </p>
          </div>
          <div className='flex flex-col gap-6 mt-7'>
            <a
              href='https://everlance-expense-tracker.netlify.app'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-gradient-to-r from-button-secondary-from-gradient to-button-secondary-to-gradient w-max rounded-sm py-2 px-6 hover:opacity-60 transition-opacity'
            >
              Watch it in action 🎯
            </a>
            <a
              href='https://github.com/dragoshcode/everlance-expense-tracker'
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

export default Everlance;
