import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import cssVars from 'css-vars-ponyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import { store } from './state/store';
import './index.scss';
import App from './App';

cssVars({});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
