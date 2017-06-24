import { combineReducers } from 'redux';
import characters from './characters';
import fetching from './fetching';
import page from './page';
import { routerReducer } from 'react-router-redux';

const RootReducer = combineReducers({
  fetching: fetching,
  page: page,
  router: routerReducer,
  characters: characters
});

export default RootReducer;
