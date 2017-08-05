import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { ConnectedRouter } from 'react-router-redux';
import store from './model/store';
import { history } from './model/store';

import App from './views/app';

render(
  <Provider store={store} >
    <ConnectedRouter history={history}>
        <App/>
    </ConnectedRouter>
  </Provider>,
  document.getElementsByClassName('marvel-app')[0]
);
