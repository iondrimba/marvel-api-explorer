import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import {  Router } from 'react-router-dom';
import store from './model/store';
import { history } from './model/store';

import App from './pages/app';

render(
  <Provider store={store} >
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.querySelector('.marvel-app')
);
