import React from 'react';
import './styles.scss';

const Form = ({ onFormSubmit, children }) => {
  return (
    <div className="form">
      <form onSubmit={onFormSubmit}>{children}</form>
    </div>
  );
};

export default Form;
