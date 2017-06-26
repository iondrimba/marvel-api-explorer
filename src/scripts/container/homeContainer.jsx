import { connect } from 'react-redux';
import Home from '../views/home';
import { charactersGet } from '../actions/characters';
import { comicsGet } from '../actions/comics';
import fetching from '../actions/fetching';
import filter from '../actions/filter';
import pagination from '../actions/pagination';
import * as constants from '../actions/constants';
import { withRouter } from 'react-router-dom'

function mapStateToProps(store) {
  return {
    fetching: store.fetching,
    filter: store.filter,
    pagination: store.pagination,
    characters: store.characters
  };
}

const mapDispatchToProps = (dispatch, store) => {
  return {
    filterAction: (props) => {
      var { type, page } = props.match.params;
      var { total } = props.pagination;
      console.log('filterAction', props.filter);
      if (props.filter.length) {
        dispatch(fetching(true));
        var offset = 0;
        if (page > 0) {
          offset = page * 20;
        }
        if (type === 'characters') {
          console.log('API chars')
          dispatch(charactersGet(Object.assign({}, { limit: 20, offset: offset, total }, { orderBy: 'name' })));
        } else {
          dispatch(comicsGet(Object.assign({}, { limit: 20, offset: offset, total }, { orderBy: 'title' })));
        }
      }

      // console.log('mapDispatchToProps', props);
      // console.log('mapDispatchToProps', store);


    },
    paginationAction: (props) => {
      console.log('page', props);
      var { type, page } = props.match.params;
      var { total } = props.pagination;
      var offset = 0;
      if (page > 0) {
        offset = page * 20;
      }
      dispatch(pagination({ current: page }));
      dispatch(fetching(true));
    }
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
