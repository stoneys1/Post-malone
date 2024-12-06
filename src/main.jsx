import React, { StrictMode } from 'react';
import ReactDom from 'react-dom/client';
import './index.scss';
import App from './App.jsx';



ReactDom.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
