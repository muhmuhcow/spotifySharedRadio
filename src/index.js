import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store';
console.log(store.getState());
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
