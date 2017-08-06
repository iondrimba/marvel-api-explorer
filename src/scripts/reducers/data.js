import { FETCHED, FETCHING } from '../actions/constants';
import DefaultStore from '../model/initialState';

function data(state = [], action) {

  switch (action.type) {
    case FETCHING:
      return [];
    case FETCHED:
      var filtered = [...action.data.data.data.results].map((item)=>{
        var url = `${item.thumbnail.path}/portrait_incredible.${item.thumbnail.extension}`;
        item.file = item.thumbnail.path.includes('image_not_available') ? '/images/missing.jpg' : url;
        return item;
      });
      return filtered;
  }
  return state;
}

export default data;
