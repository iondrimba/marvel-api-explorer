import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { push } from 'react-router-redux';
import { createSelector } from 'reselect';

import Home from '../pages/home';
import { charactersGet } from '../actions/characters';
import { comicsGet } from '../actions/comics';
import fetching from '../actions/fetching';
import search from '../actions/search';
import fetchingError from '../actions/fetchingError';
import filter from '../actions/filter';
import pagination from '../actions/pagination';
import appStore from '../model/store';
import defaultStore from '../model/initialState';
import PaginationHelper from '../model/paginationHelper';

const pg = new PaginationHelper();

function mapStateToProps(store) {
  return { error: store.error, fetching: store.fetching, filter: store.filter, search: store.search, pagination: Object.assign(
      {},
      store.pagination,
      {
        pages: pg.getPages(store.pagination),
        next: pg.hasNext(store.pagination),
        prev: pg.hasPrev(store.pagination)
      }
    ), data: store.data };
}

function hasQueryString(search) {
  if (search) {
    return search;
  } else {
    return '';
  }
}

function paginate(url, dispatch) {
  dispatch(push(url));
  const page = Number(url.split('/')[2].split('?')[0]);
  const store = appStore.getState();
  dispatch(pagination({
    current: page,
    pages: pg.getPages(store.pagination),
    next: pg.hasNext(store.pagination),
    prev: pg.hasPrev(store.pagination)
  }));
}

const mapDispatchToProps = (dispatch, store) => {

  const fetch = (filter, pagination, search) => {
    dispatch(fetchingError({ code: '' }));
    dispatch(fetching(true));
    if (filter === 'characters') {
      dispatch(charactersGet(Object.assign({}, { page: pagination.current, total: pagination.total, orderBy: 'name', nameStartsWith: search })));
    } else {
      dispatch(comicsGet(Object.assign({}, { page: pagination.current, total: pagination.total, orderBy: 'title', titleStartsWith: search })));
    }
  };



  return {
    errorClear: (props) => {
      dispatch(fetchingError({code:''}));
    },
    fetchAction() {
      fetch(appStore.getState().filter, appStore.getState().pagination, appStore.getState().search);
    },
    searchAction: (val, props) => {
      const queryString = val.length? `?search=${val}`:'';
      dispatch(push(`/${props.filter}/${defaultStore.pagination.current}${queryString}`));
      dispatch(search(val));
      dispatch(pagination(defaultStore.pagination));
      fetch(appStore.getState().filter, appStore.getState().pagination, val);
    },
    searchClear: (val) => {
      dispatch(search(val));
    },
    filterAction: (val, props) => {
      dispatch(push(`/${val}/${defaultStore.pagination.current}?search=${appStore.getState().search}`));
      dispatch(filter(val));
      dispatch(pagination(defaultStore.pagination));
      fetch(val, appStore.getState().pagination, appStore.getState().search);
    },
    paginationAction: (url, props) => {
      paginate(url, dispatch);
    },
    paginationPrevAction: (props) => {
      const url = `/${props.filter}/${Number(props.pagination.current) - 1}${hasQueryString(props.search)}`;
      paginate(url, dispatch);
    },
    paginationNextAction: (props) => {
      const url = `/${props.filter}/${Number(props.pagination.current) + 1}${hasQueryString(props.search)}`;
      paginate(url, dispatch);
    }
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
