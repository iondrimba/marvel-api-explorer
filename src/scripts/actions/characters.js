export function characters(data) {
  return {
    type: 'CHARACTERS_FETCHED',
    data
  };
}

export function charactersGet(options) {
  return function (dispatch, getState, api) {
    return api.getCharacters(options).then((data) => {
      dispatch(characters(data))
    })
  };
}

