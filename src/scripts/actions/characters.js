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
    const { limit, offset, orderBy, total } = options;
    return api.getCharacters(options).then((data) => {
      dispatch(characters(data));
      const { limit, offset, total } = data.data.data;
      const pages = Math.round(total / limit);

      if (getState().pagination.total !== pages) {
        dispatch(pagination(Object.assign({}, getState().pagination, { current: 1, total: pages })));
      }
    })
  };
}

