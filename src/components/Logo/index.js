import React from 'react';
import './styles.scss';

const Logo = ({ src }) => {
  return (
    <div className="logo">
      <img src={src} alt="Logo" />
    </div>
  );
};

export default Logo;
