import React from 'react';
import {render} from 'react-dom';
import App from './App.jsx';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store.js';

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
