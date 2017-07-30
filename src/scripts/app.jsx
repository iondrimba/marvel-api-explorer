import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from './reducers/root';
import defaultStore from './model/initialState';
import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';

import HomeContainer from './container/homeContainer';
import DetailCharacterContainer from './container/detailCharacterContainer';
import DetailComicContainer from './container/detailComicContainer';
import Styles from '../scss/app.scss';
import Api from './model/api';

const history = createHistory();
const router = routerMiddleware(history)

const api = new Api(process.env.API_KEY);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(RootReducer, defaultStore, composeEnhancers(
  applyMiddleware(router, thunk.withExtraArgument(api))
));

render(
  <Provider store={store} >
    <ConnectedRouter history={history}>
      <div>
        <Route path="/:type?/:page?" render={HomeContainer} />
        <Route path="/characters/detail/:id" component={DetailCharacterContainer} />
        <Route path="/comics/detail/:id" component={DetailComicContainer} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('marvel-app')
);
