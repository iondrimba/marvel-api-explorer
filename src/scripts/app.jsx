import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/root';
import AppContainer from './container/appContainer';
import RootReducer from './reducers/root';
import defaultStore from './model/initialState';
import Styles from '../scss/app.scss';
import Api from './model/api';

const api = new Api(process.env.API_KEY);
const store = createStore(RootReducer, defaultStore, applyMiddleware(thunk.withExtraArgument(api)));

render(
  <Provider store={store} >
    <AppContainer />
  </Provider>,
  document.getElementById('marvel-app')
);
