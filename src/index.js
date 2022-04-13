import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Head from './components/Head';

ReactDOM.render(
  <React.StrictMode>
    <Head name="Xepelin Movies App" />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
