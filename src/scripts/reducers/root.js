import { combineReducers } from 'redux';
import characters from './characters';
import fetching from './fetching';
import fetchingError from './fetchingError';
import filter from './filter';
import search from './search';
import pagination from './pagination';
import { routerReducer } from 'react-router-redux';

const RootReducer = combineReducers({
  fetching: fetching,
  error: fetchingError,
  filter: filter,
  search: search,
  pagination: pagination,
  router: routerReducer,
  characters: characters
});

export default RootReducer;
