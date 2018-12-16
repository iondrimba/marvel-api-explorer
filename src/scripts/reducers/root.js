import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import data from './data';
import fetching from './fetching';
import fetchingError from './fetchingError';
import filter from './filter';
import search from './search';
import pagination from './pagination';
import menuOpen from './menuOpen';
import started from './started';

const RootReducer = (history) => combineReducers({
  fetching,
  error: fetchingError,
  filter,
  started,
  search,
  pagination,
  router: connectRouter(history),
  menuOpen,
  data
});

export default RootReducer;
