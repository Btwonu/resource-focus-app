import React from 'react';
import Logo from '../Logo';
import reactLogo from '../../images/logo-react.png';
import './styles.scss';

const Hero = () => {
  return (
    <div className="hero">
      <h1 className="hero__head">React</h1>

      <Logo src={reactLogo} />

      <div className="hero__body">
        <p>A JavaScript library for building user interfaces</p>

        <a href="">Documentation</a>
      </div>
    </div>
  );
};

export default Hero;
