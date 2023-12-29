import React from 'react';
import ReactDOM from 'react-dom/client';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css';
import Store from './store/store';

import App from './App';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

    <App />

  </BrowserRouter>
);


