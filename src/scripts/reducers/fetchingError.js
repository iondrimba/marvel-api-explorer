import { FETCHING_ERROR } from '../actions/constants';
function fetchingError(state = '', action) {
  switch (action.type) {
    case FETCHING_ERROR:
      console.log('red err', action, state)
      return action.error;
  }
  return state;
}

export default fetchingError;
