import pagination from './pagination';
import fetchingError from './fetchingError';

export function fetched(data) {
  return {
    type: 'FETCHED',
    data
  };
}

export function fetch(options) {
  return function (dispatch, getState, api) {
    return api.get(options).then((data) => {
      dispatch(fetched(data));

      const { limit, total } = data.data.data;
      const pages = Math.round(total / limit);

      if (getState().pagination.total !== pages && getState().pagination.current) {
        const current = getState().pagination.current > pages ? 1 : getState().pagination.current;

        dispatch(pagination(Object.assign({}, getState().pagination, { current: current, total: pages })));
      }

    }, (reject) => {
      dispatch(fetchingError(reject));

    }).catch(function (reason) {
      dispatch(fetchingError(reason));
    })
  };
}

