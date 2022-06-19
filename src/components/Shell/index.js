import React from 'react';
import './styles.scss';

const Shell = ({ children, className }) => {
	return <div className={'shell ' + className}>{children}</div>;
};

export default Shell;
