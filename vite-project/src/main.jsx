import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

// Use createRoot to render the main component
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
