import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../reducers/root';
import defaultStore from './initialState';
import Api from './api';

export const history = createBrowserHistory();

const api = new Api(process.env.PUBLIC_API_KEY, 'bff1bb03adcde1c4dcb3417d64511e0b');
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(RootReducer(history), defaultStore,
  composeEnhancers(
    applyMiddleware(routerMiddleware(history), thunk.withExtraArgument(api))
  ));
