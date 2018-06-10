import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Footer from './components/Footer.js';

import './styles/main.scss';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Footer />, document.getElementById('footer'));