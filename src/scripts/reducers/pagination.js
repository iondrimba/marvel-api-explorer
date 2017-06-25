import { PAGINATION } from '../actions/constants';
function pagination(state = { current: 0, total: 0 }, action) {
  switch (action.type) {
    case PAGINATION:
      return Object.assign({}, state, action.pagination);
  }
  return state;
}

export default pagination;
