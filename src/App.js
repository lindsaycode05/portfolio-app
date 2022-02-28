import React from 'react';
import { Header,Hero,About,TechStack } from './components/index';

const App = () => {
  return (
    <div className='bg-primary-white overflow-x-hidden'>
      <Header />
      <Hero />
      <About/>
      <TechStack/>
    </div>
  );
};

export default App;
