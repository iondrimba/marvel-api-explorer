import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import data from './data';
import fetching from './fetching';
import fetchingError from './fetchingError';
import filter from './filter';
import search from './search';
import pagination from './pagination';
import menuOpen from './menuOpen';

const RootReducer = combineReducers({
  fetching: fetching,
  error: fetchingError,
  filter: filter,
  search: search,
  pagination: pagination,
  router: routerReducer,
  menuOpen: menuOpen,
  data: data
});

export default RootReducer;
