import { combineReducers } from 'redux';
import characters from './characters';
import fetching from './fetching';
import pagination from './pagination';
import { routerReducer } from 'react-router-redux';

const RootReducer = combineReducers({
  fetching: fetching,
  pagination: pagination,
  router: routerReducer,
  characters: characters
});

export default RootReducer;
