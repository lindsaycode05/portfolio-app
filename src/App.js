import React from 'react';
import {
  Header,
  Hero,
  About,
  TechStack,
  TripHop,
  Everlance,
  Quublyy
} from './components/index';

const App = () => {
  return (
    <div className='bg-primary-white overflow-x-hidden'>
      <Header />
      <Hero />
      <About />
      <TechStack />
      <div className='bg-gradient-to-tr from-very-light-brown to-very-light-orange'>
        <TripHop />
        <Everlance />
        <Quublyy/>
      </div>
    </div>
  );
};

export default App;
