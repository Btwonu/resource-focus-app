import React from 'react';
import './styles.scss';

const ListLinks = ({ children }) => {
  return (
    <div className="list-links">
      <ul>{children}</ul>
    </div>
  );
};

export default ListLinks;
