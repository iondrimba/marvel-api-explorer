import { FETCHING, FETCHED, FETCHING_ERROR } from '../actions/constants';
function fetching(state = false, action) {
  console.log('fetching reducer', state, action);
  switch (action.type) {
    case FETCHING:
      return true;
    case FETCHING_ERROR:
      return false;
    case FETCHED:
      return false;
  }
  return state;
}

export default fetching;
