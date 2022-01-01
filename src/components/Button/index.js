import React from 'react';
import { useState } from 'react';
import './styles.scss';

const Button = () => {
  const [state, setState] = useState();

  return (
    <>
      <button>Add link</button>
      <p>{state}</p>
    </>
  );
};

export default Button;
