import { MENU_TOOGLE } from '../actions/constants';

function menuOpen(state = false, action) {
  switch (action.type) {
    case MENU_TOOGLE:
      return action.open;
  }
  return state;
}

export default menuOpen;
