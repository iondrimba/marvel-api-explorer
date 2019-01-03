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

      if (getState().pagination.total !== pages && options.page) {
        const current = options.page > pages ? 1 : options.page;
        const pg = Object.assign({}, getState().pagination, { current, total: pages });

        dispatch(pagination(pg));
      }

    }, (reject) => {
      dispatch(fetchingError(reject));

    }).catch(function (reason) {
      dispatch(fetchingError(reason));
    })
  };
}
