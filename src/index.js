import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.css';

fetch('http://serienempfehlung.de/', {mode: 'no-cors'})
  .then(response => response.body)
  .then(body => console.log(body))

function render(shows) {
  ReactDOM.render(<App shows={shows} />, document.getElementById('root'));
}