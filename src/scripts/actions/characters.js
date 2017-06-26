import pagination from './pagination';
import filter from './filter';

export function characters(data) {
  return {
    type: 'FETCHED',
    data
  };
}

export function charactersGet(options) {
  return function (dispatch, getState, api) {
    var { limit, offset, orderBy, total } = options;
    return api.getCharacters(options).then((data) => {
      dispatch(characters(data));
      var { limit, offset, total } = data.data.data;
      var pages = Math.round(total / limit);

      if (getState().pagination.total !== pages) {
        dispatch(pagination(Object.assign({}, getState().pagination, { total: pages })));
      }
    })
  };
}

