import React from 'react';
import hero from '../images/hero.png';

const Hero = () => {
  return (
    <div className='grid gap-14 md:grid-cols-2 md:place-items-center min-h-screen bg-gradient-to-tr from-very-light-brown to-very-light-orange px-6 sm:px-12 py-14 sm:py-16 xl:px-24'>
      <div className=''>
        <p className='text-7xl xl:text-8xl bg-gradient-to-tr from-hero-number-primary to-hero-number-secondary bg-clip-text text-transparent'>
          24 / 7
        </p>
        <h1 className='text-4xl xl:text-5xl'>
          Frontend Engineer & <br /> Web Lover
        </h1>
        <p className='mt-4 text-gray-600 text-lg pr-20 xl:text-xl xl:mt-8'>
          I'm a tiny frontend dev who is exploring the daily innovations &
          trends of web development. I love my craft{' '}
        </p>
        <a
          href='#projects'
          className='mt-6 inline-block bg-gradient-to-r from-button-primary-from-gradient to-button-primary-to-gradient py-1 px-4 rounded hover:opacity-70 transition-opacity xl:text-xl xl:mt-8'
        >
          View work
        </a>
      </div>
      <div className=''>
        <img src={hero} alt='tech' />
      </div>
    </div>
  );
};

export default Hero;
