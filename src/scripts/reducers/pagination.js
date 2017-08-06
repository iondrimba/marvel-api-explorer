import { PAGINATION } from '../actions/constants';
import { LOCATION_CHANGE } from 'react-router-redux';
function pagination(state = { current: 1, total: 0, pages: [], next: false, prev: false }, action) {
  switch (action.type) {
    case LOCATION_CHANGE:
      var page = action.payload.pathname.split('/')[2];
      if(isNaN(page)) {
        return state;
      }
      return Object.assign({}, state, { current: Number(page) });

    case PAGINATION:
      return Object.assign({}, state, action.pagination);
  }
  return state;
}

export default pagination;
