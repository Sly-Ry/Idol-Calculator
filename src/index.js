import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Dropdown from './Dropdown';
import Bts1 from './pages/BTS1/Bts1';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Dropdown />
    <Bts1 />
  </React.StrictMode>
);
