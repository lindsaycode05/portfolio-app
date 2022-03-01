import React from 'react';
import gmail from '../images/gmail.png';
import linkedin from '../images/in.png';
import whiteLogo from '../images/white-logo.png';

const Footer = () => {
  return (
    <div
      id='contact'
      className='bg-dark-purple pt-14 lg:pt-24 pb-12 text-primary-white px-6 text-center xl:pb-16 relative flex flex-col items-center'
    >
      <div className='relative'>
        <h2 className='text-3xl lg:text-6xl'>Let's continue talking</h2>
        <div className='absolute w-24 h-0.5 bg-primary-white left-1/2 -translate-x-1/2 -translate-y-1/2 top-16 xl:top-20 rounded-sm'></div>
      </div>
      <p className='mt-10 xl:text-2xl'>
        Feel free to message or email me. <br /> I am excited to hear from you.
      </p>
      <div className='grid md:grid-cols-2 mt-10 md:place-items-center md:gap-12 xl:gap-52 xl:mt-28 2xl:gap-64 relative'>
        <div className='absolute w-0.5 h-72 bg-primary-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-sm hidden xl:block'></div>
        <div className='md:order-2'>
          <form
            method='post'
            name='contact'
            netlify
            className='flex flex-col gap-4'
            onSubmit='submit'
          >
            <input type='hidden' name='form-name' value='contact' />
            <input
              type='text'
              name='name'
              className='bg-light-purple outline-none py-2 px-5 rounded-sm text-primary-white'
              required
              placeholder='Your name'
            />
            <input
              type='email'
              name='email'
              className='bg-light-purple outline-none py-2 px-5 rounded-sm text-primary-white'
              required
              placeholder='Your email'
            />
            <textarea
              name='message'
              id=''
              cols='30'
              rows='4'
              className='bg-light-purple outline-none resize-none py-2 px-5 rounded-sm text-primary-white'
              required
              placeholder='Your message'
            ></textarea>
            <button
              type='submit'
              className='bg-primary-white text-black w-max px-6 py-1 rounded-sm mt-2 hover:opacity-60 transition-opacity'
            >
              Send
            </button>
          </form>
        </div>
        <div className='flex flex-col md:flex-row md:items-center md:order-1 mt-24 md:mt-0 gap-10'>
          <div className='flex flex-col items-center'>
            <img src={linkedin} alt='linkedin' className='w-12' />
            <a
              href='https://www.linkedin.com/in/dragoshcode/'
              target='_blank'
              rel='noopener noreferrer'
              className='underline'
            >
              Dragosh Gheceanu
            </a>
          </div>
          <div className='flex flex-col items-center gap-1 lg:mt-2'>
            <img src={gmail} alt='gmail' className='w-12' />
            <p>dragoshcode@gmail.com</p>
          </div>
        </div>
      </div>
      <img src={whiteLogo} alt='logo' className='w-12 mt-16 lg:w-20' />
    </div>
  );
};

export default Footer;
