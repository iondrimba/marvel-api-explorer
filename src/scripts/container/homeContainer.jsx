import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Home from '../pages/home';
import { fetch } from '../actions/fetch';
import fetching from '../actions/fetching';
import search from '../actions/search';
import fetchingError from '../actions/fetchingError';
import filter from '../actions/filter';
import started from '../actions/started';
import menuOpen from '../actions/menuOpen';
import pagination from '../actions/pagination';
import appStore from '../model/store';
import defaultStore from '../model/initialState';
import PaginationHelper from '../model/paginationHelper';

const pg = new PaginationHelper();

function mapStateToProps(store) {
  return {
    menuOpen: store.menuOpen,
    error: store.error,
    fetching: store.fetching,
    started: store.started,
    filter: store.filter,
    search: store.search,
    pagination: Object.assign({},
      store.pagination, {
        pages: pg.getPages(store.pagination),
        next: pg.hasNext(store.pagination),
        prev: pg.hasPrev(store.pagination)
      }
    ),
    data: store.data
  };
}

function getQueryString(search) {
  return search ? `?search=${search}` : '';
}

function paginate(url, dispatch) {
  console.log('paginate url',url);
  const page = Number(url.split('/')[2].split('?')[0]);
  const store = appStore.getState();


  console.log('paginate',page);

  dispatch(pagination({
    current: page,
    pages: pg.getPages(store.pagination),
    next: pg.hasNext(store.pagination),
    prev: pg.hasPrev(store.pagination)
  }));

  dispatch(push(url));
}

function _errorClear(props, dispatch) {
  dispatch(fetchingError({ code: '' }));
}

function _firstFetch(props, dispatch, fetchData) {
  let searchTerm = props.search;
  let page = props.pagination.current;
  let type = props.filter;

  const paths = props.location.pathname.split('/');

  if (paths.length && props.location.pathname !== '/') {
    type = paths[1];

    if (props.location.search) {
      searchTerm = props.location.search.replace(/\?search=/g, '');
    }
  }

  dispatch(push(`/${type}/${page}${getQueryString(searchTerm)}`));
  dispatch(search(searchTerm));
  dispatch(started(true));

  if (!isNaN(paths[2])) {
    page = Number(paths[2]);

    dispatch(filter(type));
    dispatch(pagination(Object.assign({}, defaultStore.pagination, { current: page })));
  }

  fetchData(type, Object.assign({}, defaultStore.pagination, { current: page }), searchTerm, dispatch);
}

function _paginataionAction(delta, props, dispatch) {
  const url = `/${props.filter}/${Number(props.pagination.current) + delta}${getQueryString(props.search)}`;
console.log('_paginataionAction', url);
  paginate(url, dispatch);
}

function _fetchData(filter, pagination, search, dispatch) {
  dispatch(fetchingError({ code: '' }));
  dispatch(fetching(true));

  let aditionalOptions = {
    orderBy: 'name',
    nameStartsWith: search
  };

  if (filter === 'comics') {
    aditionalOptions = {
      orderBy: 'title',
      titleStartsWith: search
    };
  }

  dispatch(fetch(Object.assign({}, { url: `/${filter}`, page: pagination.current, total: pagination.total }, aditionalOptions)));
}

const mapDispatchToProps = (dispatch, store) => {
  return {
    errorClear: props => _errorClear(props, dispatch),

    firstFetch(props) {
      _firstFetch(props, dispatch, _fetchData);
    },

    fetchAction() {
      _fetchData(appStore.getState().filter, appStore.getState().pagination, appStore.getState().search, dispatch);
    },

    searchAction: (val, props) => {
      dispatch(push(`/${props.filter}/${defaultStore.pagination.current}${getQueryString(val)}`));
      dispatch(search(val));
      dispatch(menuOpen(false));
      dispatch(started(true));
      dispatch(pagination(defaultStore.pagination));

      _fetchData(appStore.getState().filter, appStore.getState().pagination, val, dispatch);
    },

    searchClear: (val) => {
      dispatch(search(val));
    },

    filterAction: (val, props) => {
      dispatch(push(`/${val}/${defaultStore.pagination.current}?search=${appStore.getState().search}`));
      dispatch(filter(val));
      dispatch(pagination(defaultStore.pagination));

      _fetchData(val, appStore.getState().pagination, appStore.getState().search, dispatch);
    },

    paginationAction: (url, props) => {
      paginate(url, dispatch);
    },

    paginationPrevAction: (props) => {
      pg.hasPrev(props.pagination) ? _paginataionAction(-1, props, dispatch) : null;
    },

    paginationNextAction: (props) => {
    console.log('paginationNextAction', props);
      pg.hasNext(props.pagination) ? _paginataionAction(+1, props, dispatch) : null;
    },

    toogleMenuAction: (visible) => {
      dispatch(menuOpen(visible));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
