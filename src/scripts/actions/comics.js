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
    const { limit, offset, orderBy, total } = options;
    return api.getComics(options).then((data) => {
      dispatch(comics(data));
      const { limit, offset, total } = data.data.data;
      const pages = Math.round(total / limit);

      if (getState().pagination.total !== pages) {
        dispatch(pagination(Object.assign({}, getState().pagination, { current: 1, total: pages })));
      }
    }).catch(function (reason) {
      console.log('comics catch', reason);
    });
  };
}
