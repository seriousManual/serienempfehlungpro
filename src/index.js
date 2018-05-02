import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.css';

fetch('/shows')
  .then(response => response.json())
  .then(shows => render(shows))

function render(shows) {
  ReactDOM.render(<App shows={shows} />, document.getElementById('root'));
}