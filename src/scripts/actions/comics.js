import pagination from './pagination';
import filter from './filter';

export function comics(data) {
  return {
    type: 'FETCHED',
    data
  };
}

export function comicsGet(options) {
  return function (dispatch, getState, api) {
    var { limit, offset, orderBy, total } = options;
    return api.getComics({ limit, offset, orderBy }).then((data) => {
      dispatch(comics(data));
      dispatch(filter(getState().filter));
      var { limit, offset, total } = data.data.data;
      var pages = Math.round(total / limit);

      if (getState().pagination.total !== pages) {
        dispatch(pagination(Object.assign({}, getState().pagination, { total: pages })));
      }
    })
  };
}
