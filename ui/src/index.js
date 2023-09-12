import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

/* 
****** COMPONENT IMPORTS ******
*/
import App from './App';

/* 
*******************************
*/

/* 
****** CONTEXTS IMPORTS ******
*/
import {AuthProvider} from "./Contexts/AuthContext";
/*
*******************************
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);