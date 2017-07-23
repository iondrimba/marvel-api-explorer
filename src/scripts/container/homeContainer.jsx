import { connect } from 'react-redux';
import Home from '../views/home';
import { charactersGet } from '../actions/characters';
import { comicsGet } from '../actions/comics';
import fetching from '../actions/fetching';
import search from '../actions/search';
import fetchingError from '../actions/fetchingError';
import filter from '../actions/filter';
import pagination from '../actions/pagination';
import * as constants from '../actions/constants';
import { withRouter } from 'react-router-dom'

function mapStateToProps(store) {
  return {
    error: store.error,
    fetching: store.fetching,
    filter: store.filter,
    search: store.search,
    pagination: store.pagination,
    characters: store.characters
  };
}

const mapDispatchToProps = (dispatch, store) => {
  return {
    errorClear: (props) => {
      dispatch(fetchingError(''));
    },
    onSearch: (props, text) => {
      dispatch(search(text));
      props.filterAction(props);
    },
    filterAction: (props) => {
      const { type, page } = props.match.params;
      const { total } = props.pagination;

      if (props.filter.length) {
        dispatch(fetching(true));

        if (type === 'characters') {
          dispatch(charactersGet(Object.assign({}, { page, total, orderBy: 'name', nameStartsWith: props.search })));
        } else {
          dispatch(comicsGet(Object.assign({}, { page, total, orderBy: 'title', titleStartsWith: props.search })));
        }
      }
    }
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
