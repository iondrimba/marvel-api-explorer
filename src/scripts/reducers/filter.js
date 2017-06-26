import { FILTER } from '../actions/constants';
import { LOCATION_CHANGE } from 'react-router-redux';
import character from './characters';

function filter(state = '', action) {
  switch (action.type) {
    case LOCATION_CHANGE:
      var f = action.payload.pathname.split('/');
      return f[1];
    case FILTER:
      return action.filter;
  }
  return state;
}

export default filter;