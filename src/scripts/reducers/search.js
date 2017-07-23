import { SEARCH } from '../actions/constants';

function search(state = '', action) {
  switch (action.type) {
    case SEARCH:
      return action.text;
  }
  return state;
}

export default search;
