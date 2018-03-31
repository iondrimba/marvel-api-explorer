import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import data from './data';
import fetching from './fetching';
import fetchingError from './fetchingError';
import filter from './filter';
import search from './search';
import pagination from './pagination';
import menuOpen from './menuOpen';
import started from './started';

const RootReducer = combineReducers({
  fetching,
  error: fetchingError,
  filter,
  started,
  search,
  pagination,
  router: routerReducer,
  menuOpen,
  data
});

export default RootReducer;
