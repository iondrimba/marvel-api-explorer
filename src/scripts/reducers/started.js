import { STARTED } from '../actions/constants';

function started(state = false, action) {
  switch (action.type) {
    case STARTED:
      return action.start;
  }
  return state;
}

export default started;
