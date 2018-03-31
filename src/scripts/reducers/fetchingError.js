import { FETCHING_ERROR } from '../actions/constants';

function fetchingError(state = '', action) {
  switch (action.type) {
    case FETCHING_ERROR:
      return action.error;
  }
  return state;
}

export default fetchingError;
