import { FETCHING, FETCHED } from '../actions/constants';
function fetching(state = false, action) {
  switch (action.type) {
    case FETCHING:
      return true;
    case FETCHED:
      return false;
  }
  return state;
}

export default fetching;
