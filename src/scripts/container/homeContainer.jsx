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

function getgetOffset(page) {
  var offset = 0;
  if (page > 0) {
    offset = page * 20;
  }
  return offset;
}

const mapDispatchToProps = (dispatch, store) => {
  return {
    filterAction: (props) => {
      var { type, page } = props.match.params;
      var { total } = props.pagination;

      if (props.filter.length) {
        dispatch(fetching(true));

        if (type === 'characters') {
          dispatch(charactersGet(Object.assign({}, { limit: 20, offset: getgetOffset(page), total }, { orderBy: 'name' })));
        } else {
          dispatch(comicsGet(Object.assign({}, { limit: 20, offset: getgetOffset(page), total }, { orderBy: 'title' })));
        }
      }
    },
    paginationAction: (page) => {
      dispatch(pagination({ current: page }));
    }
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
