import { FILTER, SEARCH } from '../actions/constants';
import { LOCATION_CHANGE } from 'react-router-redux';

function filter(state = '', action) {
  switch (action.type) {
    case FILTER:
      return action.filter;
  }
  return state;
}

export default filter;
