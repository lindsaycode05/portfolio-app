import React from 'react';
import layout from '../images/layout.png';

const About = () => {
  return (
    <div id='about' className='grid place-items-center md:grid-cols-2'>
      <div className='bg-primary-white px-6 md:order-2 lg:px-20'>
        <h2 className='pt-12 text-4xl relative lg:text-6xl 2xl:text-8xl'>
          What I am <br /> all{' '}
          <span className='text-about-span after:absolute after:content- after:w-3 after:h-3 after:bg-about-span after:bottom-3 after:left-36 after:rounded-full lg:after:left-60 2xl:after:left-96 2xl:after:w-5 2xl:after:h-5'>
            about
          </span>
        </h2>
        <p className='mt-6 text-gray-600 leading-7 lg:text-lg 2xl:text-2xl'>
          Hello my gorgeous friend! I am a self taught frontend developer. I
          love to{' '}
          <span className='bg-gradient-to-r from-hobbies-from-gradient to-hobbies-to-gradient bg-clip-text text-transparent'>
            meditate
          </span>{' '}
          and{' '}
          <span className='bg-gradient-to-r from-hobbies-from-gradient to-hobbies-to-gradient bg-clip-text text-transparent'>
            play piano.
          </span>{' '}
          I am passionate about{' '}
          <span className='bg-gradient-to-r from-hobbies-from-gradient to-hobbies-to-gradient bg-clip-text text-transparent'>
            programming
          </span>{' '}
          and
          <span className='bg-gradient-to-r from-hobbies-from-gradient to-hobbies-to-gradient bg-clip-text text-transparent'>
            {' '}
            problem solving
          </span>{' '}
          and I’ve come a long way to get here. Thanks for looking me up!
        </p>
        <a
          href='https://www.linkedin.com/in/dragoshcode/'
          target='_blank'
          rel='noreferrer'
          className='mt-6 inline-block  bg-gradient-to-r from-button-primary-from-gradient to-button-primary-to-gradient py-1 px-4 rounded hover:opacity-70 transition-opacity xl:text-xl xl:mt-8'
        >
          Learn about me
        </a>
      </div>
      <div className='bg-very-light-brown md:order-1 mt-10 md:mt-0'>
        <img src={layout} alt='person' className='ml-4' />
      </div>
    </div>
  );
};

export default About;
