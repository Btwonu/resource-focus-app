import React from 'react';
import ListLinks from '../List-links';

const Section = ({ title, items, children }) => {
  return (
    <div className={`section section--${title.toLowerCase()}`}>
      <div className="section__head">
        <h2>{title}</h2>
      </div>

      <div className="section__body">
        <ListLinks>{items}</ListLinks>

        {children}
      </div>
    </div>
  );
};

export default Section;
