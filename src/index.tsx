import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './App.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("El elemento con id 'root' no existe en el HTML");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode> 
    <App />
  </React.StrictMode>
);


