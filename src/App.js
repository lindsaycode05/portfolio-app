import React from 'react';
import { Header, Hero, About, TechStack, TripHop } from './components/index';

const App = () => {
  return (
    <div className='bg-primary-white overflow-x-hidden'>
      <Header />
      <Hero />
      <About />
      <TechStack />
      <TripHop />
    </div>
  );
};

export default App;
