import React from 'react';
import reactDom from 'react-dom';
import App from './components/App.jsx';
import './config/firebase.config';
import './styles/styles.scss';

const app = document.querySelector('.app');

reactDom.render(<App />, app);
