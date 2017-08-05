import { FETCHED, FETCHING } from '../actions/constants';
function data(state = [], action) {

  switch (action.type) {
    case FETCHING:
      return [];
    case FETCHED:
      return [...action.data.data.data.results];
  }
  return state;
}

export default data;
