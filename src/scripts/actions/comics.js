import pagination from './pagination';
import filter from './filter';
import fetchingError from './fetchingError';
import fetching from './fetching';

export function comics(data) {
  return {
    type: 'FETCHED',
    data
  };
}

export function comicsGet(options) {
  return function (dispatch, getState, api) {

    return api.getComics(options).then((data) => {
      dispatch(comics(data));

      const { limit, offset, total } = data.data.data;
      const pages = Math.round(total / limit);

      if (getState().pagination.total !== pages && getState().pagination.current) {
        const current = getState().pagination.current > pages ? 1 : getState().pagination.current;
        dispatch(pagination(Object.assign({}, getState().pagination, { current: current, total: pages })));
      }
    }, (reject) => {
      dispatch(fetchingError(reject));
    }).catch(function (reason) {
      dispatch(fetchingError(reason));
    });
  };
}
