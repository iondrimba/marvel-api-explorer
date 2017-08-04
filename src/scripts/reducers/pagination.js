import { PAGINATION } from '../actions/constants';
import { LOCATION_CHANGE } from 'react-router-redux';
function pagination(state = { current: 0, total: 0, pages: [] }, action) {
  switch (action.type) {
    case PAGINATION:
      return Object.assign({},  ...state , action.pagination);
  }
  return state;
}

export default pagination;
