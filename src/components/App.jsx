import React from 'react';
import Hero from './Hero';
import Section from './Section';
import Shell from './Shell';
import Divider from './Divider';

const App = () => {
  return (
    <div className="wrapper">
      <Shell>
        <Hero />
        <Divider />
        <Section />
      </Shell>
    </div>
  );
};

export default App;
