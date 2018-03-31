import { FETCHED, FETCHING } from '../actions/constants';
import DefaultStore from '../model/initialState';

function data(state = [], action) {

  switch (action.type) {
    case FETCHING:
      return [];
    case FETCHED:

      var filtered = [...action.data.data.data.results].map((item) => {
        var thumb = '/images/missing.jpg',
          full = '/images/missing-full.jpg';

        if (!item.thumbnail.path.includes('image_not_available')) {
          thumb = `${item.thumbnail.path}/portrait_incredible.${item.thumbnail.extension}`;
          full = `${item.thumbnail.path}.${item.thumbnail.extension}`;
        }

        item.thumb = thumb;
        item.full = full;

        return item;
      });
      return filtered;
  }
  return state;
}

export default data;
