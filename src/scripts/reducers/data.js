import { FETCHED } from '../actions/constants';
function data(state = [], action) {

  switch (action.type) {
    case FETCHED:
      return [...action.data.data.data.results];
  }
  return state;
}

export default data;
