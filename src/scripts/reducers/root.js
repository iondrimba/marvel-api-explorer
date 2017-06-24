import { combineReducers } from 'redux';
import characters from './characters';
import fetching from './fetching';
import { routerReducer } from 'react-router-redux';

const RootReducer = combineReducers({
  fetching: fetching,
  router: routerReducer,
  characters: characters
});

export default RootReducer;
