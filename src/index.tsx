import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './index.css';
import Start from 'pages/Start';
import RestaurantMenu from 'pages/RestaurantMenu';

const currentComponent = 
  window.location.pathname === '/' ? <Start/> : <RestaurantMenu/>;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {currentComponent}
  </React.StrictMode>
);
