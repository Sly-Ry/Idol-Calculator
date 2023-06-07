import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Dropdown from './Dropdown';
import App from './BTS1/App';


const bts = ReactDOM.createRoot(document.getElementById('bts'));
bts.render(
  <React.StrictMode>
    <Dropdown />
    <App />
  </React.StrictMode>
);
