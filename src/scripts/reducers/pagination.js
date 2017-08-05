import { PAGINATION } from '../actions/constants';
import { LOCATION_CHANGE } from 'react-router-redux';
function pagination(state = { current: 0, total: 0, pages: [], next: false, prev: false }, action) {
  switch (action.type) {
   case LOCATION_CHANGE:
      return Object.assign({},  state , { current: action.payload.pathname.split('/')[2] || 0}) ;

    case PAGINATION:
      return Object.assign({},  state , action.pagination);
  }
  return state;
}

export default pagination;
