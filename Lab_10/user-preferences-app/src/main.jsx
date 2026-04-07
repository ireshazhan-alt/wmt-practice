import React from 'react'
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client'
import { PreferencesProvider } from './context/PreferencesContext.jsx';
import './index.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PreferencesProvider>
      <App />
    </PreferencesProvider>
  </React.StrictMode>,
);
