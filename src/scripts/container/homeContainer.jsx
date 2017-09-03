import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { push } from 'react-router-redux';
import { createSelector } from 'reselect';

import Home from '../pages/home';
import { fetch } from '../actions/fetch';
import fetching from '../actions/fetching';
import search from '../actions/search';
import fetchingError from '../actions/fetchingError';
import filter from '../actions/filter';
import menuOpen from '../actions/menuOpen';
import pagination from '../actions/pagination';
import appStore from '../model/store';
import defaultStore from '../model/initialState';
import PaginationHelper from '../model/paginationHelper';

const pg = new PaginationHelper();

function mapStateToProps(store) {
  return {
    menuOpen: store.menuOpen, error: store.error, fetching: store.fetching, filter: store.filter, search: store.search, pagination: Object.assign(
      {},
      store.pagination,
      {
        pages: pg.getPages(store.pagination),
        next: pg.hasNext(store.pagination),
        prev: pg.hasPrev(store.pagination)
      }
    ), data: store.data
  };
}

function getQueryString(search) {
  return search ? `?search=${search}` : '';
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

  const fetchData = (filter, pagination, search) => {
    dispatch(fetchingError({ code: '' }));
    dispatch(fetching(true));

    let aditionalOptions = {
      orderBy: 'name',
      nameStartsWith: search
    }

    if (filter === 'comics') {
      aditionalOptions = {
        orderBy: 'title',
        titleStartsWith: search
      }
    }

    dispatch(fetch(Object.assign({}, { url: `/${filter}`, page: pagination.current, total: pagination.total }, aditionalOptions )));
  };

  return {
    errorClear: (props) => {
      dispatch(fetchingError({ code: '' }));
    },
    firstFetch(props) {
      let searchTerm  = props.search;
      let page = props.pagination.current;
      let type = props.filter;
      const paths = props.location.pathname.split('/');

      if (paths.length && props.location.pathname !=='/') {
        type = paths[1];

        if (props.location.search) {
          searchTerm = props.location.search.replace(/\?search=/g, '');
        }
      }

      dispatch(push(`/${type}/${page}${getQueryString(searchTerm)}`));
      dispatch(search(searchTerm));

      if (!isNaN(paths[2])) {
        page = Number(paths[2]);
        dispatch(filter(type));
        dispatch(pagination(Object.assign({}, defaultStore.pagination, { current: page })));
      }
      fetchData(type, Object.assign({}, defaultStore.pagination, { current: page }), searchTerm);
    },
    fetchAction() {
      fetchData(appStore.getState().filter, appStore.getState().pagination, appStore.getState().search);
    },
    searchAction: (val, props) => {
      dispatch(push(`/${props.filter}/${defaultStore.pagination.current}${getQueryString(val)}`));
      dispatch(search(val));
      dispatch(menuOpen(false));
      dispatch(pagination(defaultStore.pagination));
      fetchData(appStore.getState().filter, appStore.getState().pagination, val);
    },
    searchClear: (val) => {
      dispatch(search(val));
    },
    filterAction: (val, props) => {
      dispatch(push(`/${val}/${defaultStore.pagination.current}?search=${appStore.getState().search}`));
      dispatch(filter(val));
      dispatch(pagination(defaultStore.pagination));
      fetchData(val, appStore.getState().pagination, appStore.getState().search);
    },
    paginationAction: (url, props) => {
      paginate(url, dispatch);
    },
    paginationPrevAction: (props) => {
      if (pg.hasPrev(props.pagination)) {
        const url = `/${props.filter}/${Number(props.pagination.current) - 1}${getQueryString(props.search)}`;
        paginate(url, dispatch);
      }
    },
    paginationNextAction: (props) => {
      if (pg.hasNext(props.pagination)) {
        const url = `/${props.filter}/${Number(props.pagination.current) + 1}${getQueryString(props.search)}`;
        paginate(url, dispatch);
      }
    },
    toogleMenuAction: (visible) => {
      dispatch(menuOpen(visible));
    }
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
