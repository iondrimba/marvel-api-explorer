import { PAGINATION } from '../actions/constants';
import { LOCATION_CHANGE } from 'react-router-redux';
function pagination(state = { current: 0, total: 0, pages: [] }, action) {
  switch (action.type) {
    case LOCATION_CHANGE:
      // console.log('pagination reducer', state, action.pagination)
      var f = action.payload.pathname.split('/');
      return Object.assign({}, state, { current: f[2] || 0 });
    case PAGINATION:
      // console.log('pagination reducer', state, action.pagination)
      return Object.assign({}, state, action.pagination);
  }
  return state;
}

export default pagination;
