import React from 'react';
import reactDom from 'react-dom';
import App from './components/App.jsx';
import './styles/base.scss';

const app = document.querySelector('.app');

reactDom.render(<App />, app);
