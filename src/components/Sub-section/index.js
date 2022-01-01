import React from 'react';
import ListLinks from '../List-links';
import './styles.scss';

const SubSection = ({ title, items, children }) => {
  return (
    <div>
      <div className="section__head">
        <h3>{title}</h3>
      </div>

      <div className="section__body">
        <ListLinks>{items}</ListLinks>

        {children}
      </div>
    </div>
  );
};

export default SubSection;
