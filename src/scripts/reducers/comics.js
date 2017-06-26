import { FETCHING, FETCHED } from '../actions/constants';
function comics(state = [], action) {

  switch (action.type) {
    case FETCHED:
      return [...action.data.data.data.results];
  }
  return state;
}

export default comics;
