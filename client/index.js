import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Footer from './components/Footer.js';
import Header from './components/Header.js';

import './styles/main.scss';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Footer />, document.getElementById('footer'));