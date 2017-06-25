import pagination from './pagination';

export function characters(data) {
  return {
    type: 'CHARACTERS_FETCHED',
    data
  };
}

export function charactersGet(options) {
  return function (dispatch, getState, api) {
    return api.getCharacters(options).then((data) => {
      dispatch(characters(data));
      if (getState().pagination.total === 0) {
        var { limit, offset, total } = data.data.data;
        var pages = Math.round(total / limit);
        dispatch(pagination(Object.assign({}, getState().pagination, { total: pages })));
      }
    })
  };
}

