import { FETCHING, CHARACTERS_FETCHED } from '../actions/constants';
function characters(state = [], action) {

  switch (action.type) {
    case CHARACTERS_FETCHED:
      return [...action.data.data.data.results];
  }
  return state;
}

export default characters;
