import React, { useState } from 'react';
import blackLogo from '../images/black-logo.png';
import { HiMenu } from 'react-icons/hi';
import { FiGithub } from 'react-icons/fi';
import { RiLinkedinLine } from 'react-icons/ri';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => setShowMenu(!showMenu);

  return (
    <div className='bg-primary-white flex justify-between items-center py-4 px-4 sm:px-16 lg:px-24'>
      <div className='flex flex-col items-center'>
        <img src={blackLogo} alt='logo' className='w-16' />
        <p className='font-sofia'>Dragosh Gheceanu</p>
      </div>
      <div className='md:hidden relative'>
        <HiMenu
          className='text-4xl cursor-pointer hover:opacity-70 transition-opacity'
          onClick={handleMenu}
        />
        {showMenu && (
          <div className='flex flex-col gap-4 absolute font-sofia right-0 top-24 w-40 bg-primary-white px-3 py-4 rounded slide-left'>
            <a href='#about' onClick={handleMenu}>
              About
            </a>
            <a href='#projects' onClick={handleMenu}>
              Projects
            </a>
            <a href='#contact' onClick={handleMenu}>
              Contact
            </a>
            <div className='flex gap-4'>
              {' '}
              <a
                href='https://www.github.com/dragoshcode'
                target='_blank'
                rel='noopener noreferrer'
                onClick={handleMenu}
              >
                <FiGithub />
              </a>
              <a
                href='https://www.linkedin.com/in/dragoshcode'
                target='_blank'
                rel='noopener noreferrer'
                onClick={handleMenu}
              >
                <RiLinkedinLine />
              </a>
            </div>
          </div>
        )}
      </div>
      <div className='md:flex gap-7 font-sofia hidden'>
        <a href='#about' className='hover:opacity-70 transition-opacity'>
          About
        </a>
        <a href='#projects' className='hover:opacity-70 transition-opacity'>
          Projects
        </a>
        <a href='#contact' className='hover:opacity-70 transition-opacity'>
          Contact
        </a>
        <a
          href='https://www.github.com/dragoshcode'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:opacity-70 transition-opacity mt-1'
        >
          <FiGithub />
        </a>
        <a
          href='https://www.linkedin.com/in/dragoshcode'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:opacity-70 transition-opacity mt-1'
        >
          <RiLinkedinLine />
        </a>
      </div>
    </div>
  );
};

export default Header;
