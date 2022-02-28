import React from 'react';
import { Header,Hero,About } from './components/index';

const App = () => {
  return (
    <div className='bg-primary-white'>
      <Header />
      <Hero />
      <About/>
    </div>
  );
};

export default App;
