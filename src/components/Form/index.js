import React from 'react';
import './styles.scss';

const Form = ({ title, onFormSubmit, children }) => {
  return (
    <div className="form">
      <h2 className="form__head">{title}</h2>

      <form onSubmit={onFormSubmit}>
        <div className="form__body">{children}</div>
      </form>
    </div>
  );
};

export default Form;
