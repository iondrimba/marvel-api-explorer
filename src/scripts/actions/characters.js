import pagination from './pagination';
import filter from './filter';
import fetchingError from './fetchingError';

export function characters(data) {
  return {
    type: 'FETCHED',
    data
  };
}

export function charactersGet(options) {

  return function (dispatch, getState, api) {

    return api.getCharacters(options).then((data) => {
      dispatch(characters(data));
      const { limit, total } = data.data.data;
      const pages = Math.round(total / limit);

      if (getState().pagination.total !== pages) {
        dispatch(pagination(Object.assign({}, getState().pagination, { current: 1, total: pages })));
      }
    }, (reject) => {
      dispatch(fetchingError(reject));
    }).catch(function (reason) {
      dispatch(fetchingError(reason));
    })
  };
}

