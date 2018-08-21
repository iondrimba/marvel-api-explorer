import createHistory from 'history/createBrowserHistory';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { syncHistory } from 'react-router-redux';
import RootReducer from '../reducers/root';
import defaultStore from './initialState';
import Api from './api';

export const history = createHistory();
const router = syncHistory(history)
const api = new Api(process.env.API_KEY);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(RootReducer, defaultStore, composeEnhancers(
  applyMiddleware(router, thunk.withExtraArgument(api))
));
