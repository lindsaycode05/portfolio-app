import React from 'react';
import css from '../images/css.png';
import sass from '../images/sass.png';
import tw from '../images/tailwind.png';
import mui from '../images/mui.png';
import antD from '../images/antD.png';
import chakra from '../images/chakra.png';
import react from '../images/react.png';
import redux from '../images/redux.png';
import js from '../images/js.png';
import ts from '../images/ts.png';
import git from '../images/git.png';
import npm from '../images/npm.png';
import google from '../images/googling.png';
import rtl from '../images/rtl.png';
import jest from '../images/jest.png';
import figma from '../images/figma.png';
import vscode from '../images/vscode.png';

const TechStack = () => {
  return (
    <div className='bg-dark-purple pt-14 lg:pt-24 pb-12 text-primary-white px-6 text-center xl:pb-24 relative'>
      <a
        href='https://www.figma.com/'
        target='_blank'
        rel='noopener noreferrer'
      >
        {' '}
        <img
          src={figma}
          alt='figma'
          className='absolute bottom-3 hidden xl:block w-16 -left-4 figma transition hover:scale-90'
          title='Figma'
        />
      </a>

      <a
        href='https://code.visualstudio.com/'
        target='_blank'
        rel='noopener noreferrer'
      >
        {' '}
        <img
          src={vscode}
          alt='vscode'
          className='absolute top-10 -right-5 rotate-12 hidden xl:block w-20 transition vscode hover:scale-90'
          title='Visual Studio Code'
        />
      </a>

      <div className='relative'>
        <h2 className='text-3xl lg:text-5xl'>My Tech Stack</h2>
        <div className='absolute w-24 h-0.5 bg-primary-white left-1/2 -translate-x-1/2 -translate-y-1/2 top-16 xl:top-20 rounded-sm'></div>
      </div>
      <div className='grid md:grid-cols-3 mt-16 lg:mt-28 gap-10 place-items-center'>
        <div>
          <h2 className='text-lg lg:text-2xl lg:mb-14  xl:text-4xl'>Styling</h2>
          <div className='grid grid-cols-3 place-items-center mt-4'>
            <a
              href='https://www.w3schools.com/css/'
              target='_blank'
              rel='noreferrer'
            >
              <img
                src={css}
                alt='technology'
                className='w-12 xl:w-16 hover:scale-90 transition css'
                title='CSS'
              />
            </a>
            <a
              href='https://sass-lang.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src={sass}
                alt='technology'
                className='w-16 xl:w-20 sass transition hover:scale-90'
                title='SASS'
              />
            </a>
            <a
              href='https://tailwindcss.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              {' '}
              <img
                src={tw}
                alt='technology'
                className='w-14 xl:w-16 tailwind transition hover:scale-90'
                title='Tailwind'
              />
            </a>
            <a
              href='https://mui.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              {' '}
              <img
                src={mui}
                alt='technology'
                className='w-16 xl:w-20 mui transition hover:scale-90'
                title='MaterialUI'
              />
            </a>
            <a
              href='https://ant.design/'
              target='_blank'
              rel='noopener noreferrer'
            >
              {' '}
              <img
                src={antD}
                alt='technology'
                className='w-28 xl:w-32 antD transition hover:scale-90'
                title='Ant Design'
              />
            </a>
            <a
              href='https://chakra-ui.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src={chakra}
                alt='technology'
                className='w-16 xl:w-28 chakra transition hover:scale-90'
                title='ChakraUI'
              />
            </a>
          </div>
        </div>
        <div className='functionality'>
          <h2 className='text-lg lg:text-2xl lg:mb-14 xl:text-4xl'>
            Functionality
          </h2>
          <div className='grid grid-cols-2 place-items-center mt-4 gap-y-4'>
            <a
              href='https://reactjs.org/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src={react}
                alt='technology'
                className='w-24 xl:w-28 react transition hover:scale-90'
                title='React'
              />
            </a>
            <a
              href='https://redux.js.org/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src={redux}
                alt='technology'
                className='w-16 xl:w-20 redux transition hover:scale-90'
                title='Redux'
              />
            </a>
            <a
              href='https://www.javascript.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src={js}
                alt='technology'
                className='w-10 xl:w-14 js transition hover:scale-90'
                title='JavaScript'
              />
            </a>
            <a
              href='https://www.typescriptlang.org/'
              target='_blank'
              rel='noopener noreferrer'
            >
              {' '}
              <img
                src={ts}
                alt='technology'
                className='w-12 xl:w-16 ts transition hover:scale-90'
                title='TypeScript'
              />
            </a>
          </div>
        </div>
        <div className=''>
          <h2 className='text-lg lg:text-2xl lg:mb-14 xl:text-4xl'>Tooling</h2>
          <div className='grid grid-cols-4 place-items-center mt-4 gap-y-3'>
            <a
              href='https://git-scm.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src={git}
                alt='technology'
                className='git w-12 xl:w-16 transition hover:scale-90'
                title='Git'
              />
            </a>
            <a
              href='https://www.npmjs.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='npm'
            >
              <img
                src={npm}
                alt='technology'
                className='npm w-24 xl:w-32 transition hover:scale-90'
                title='npm'
              />
            </a>
            <a
              href='https://www.google.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              {' '}
              <img
                src={google}
                alt='technology'
                className='google w-14 xl:w-20 transition hover:scale-90'
                title='Googling'
              />
            </a>
            <a
              href='https://testing-library.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='rtl'
            >
              <img
                src={rtl}
                alt='technology'
                className='rtl w-20 xl:w-24 transition hover:scale-90'
                title='React Testing Library'
              />
            </a>
            <a
              href='https://jestjs.io/'
              target='_blank'
              rel='noopener noreferrer'
              className='jest'
            >
              <img
                src={jest}
                alt='technology'
                className='jest w-16 xl:w-20 transition hover:scale-90'
                title='Jest'
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
