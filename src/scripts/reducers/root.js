import { combineReducers } from 'redux';
import characters from './characters';
import fetching from './fetching';

const RootReducer = combineReducers({
  fetching: fetching,
  characters: characters
});

export default RootReducer;
