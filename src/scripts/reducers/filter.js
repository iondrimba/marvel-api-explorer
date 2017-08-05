import { FILTER } from '../actions/constants';

function filter(state = '', action) {
  switch (action.type) {
    case FILTER:
      return action.filter;
  }
  return state;
}

export default filter;
