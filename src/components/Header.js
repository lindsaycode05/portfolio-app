import React, { useState } from 'react';
import blackLogo from '../images/black-logo.png';
import { HiMenu } from 'react-icons/hi';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => setShowMenu(!showMenu);

  return (
    <div className='bg-primary-white flex justify-between items-center py-4 px-4 md:px-16 lg:px-24'>
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
            <a href='#about'>About</a>
            <a href='#projects'>Projects</a>
            <a href='#contact'>Contact</a>
            <a
              href='#'
              className='text-primary-white bg-dark-purple rounded flex justify-center px-1'
            >
              Download Resume
            </a>
          </div>
        )}
      </div>
      <div className='md:flex gap-7 font-sofia hidden'>
        <a href='#about'>About</a>
        <a href='#projects'>Projects</a>
        <a href='#contact'>Contact</a>
        <a href='#' className='text-primary-white bg-dark-purple rounded px-5'>
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Header;
