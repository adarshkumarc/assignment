import React from 'react';
import ReactDOM from 'react-dom/client'; 
import './index.css';
import App from './App';

// Get the root element from the HTML
const rootElement = document.getElementById('root');

// Create a root using React 18's createRoot
const root = ReactDOM.createRoot(rootElement);

// Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);