import { FETCHING, CHARACTERS_FETCHED } from '../actions/constants';
function page(state = 0, action) {
  switch (action.type) {
    case FETCHING:
      return state;
    case CHARACTERS_FETCHED:
      return state;
  }
  return state;
}

export default page;
