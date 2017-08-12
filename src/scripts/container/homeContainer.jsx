import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import Home from '../views/home';
import { charactersGet } from '../actions/characters';
import { comicsGet } from '../actions/comics';
import fetching from '../actions/fetching';
import search from '../actions/search';
import fetchingError from '../actions/fetchingError';
import filter from '../actions/filter';
import pagination from '../actions/pagination';
import { push } from 'react-router-redux';
import appStore from '../model/store';
import defaultStore from '../model/initialState';

function mapStateToProps(store) {
  return {
    error: store.error,
    fetching: store.fetching,
    filter: store.filter,
    search: store.search,
    pagination: Object.assign({}, store.pagination, { pages: getPages(store.pagination), next: getNext(store.pagination), prev: getPrev(store.pagination) }),
    data: store.data
  };
}

const maxPages = 5;

function mountGroups(totalItens) {
  let count = 0;
  let groups = [];
  const total = getTotalPages(totalItens, maxPages);
  let pages = 0;

  for (let i = 0; i < total; i++) {
    groups.push([]);

    pages = maxPages;

    if (totalItens < maxPages) {
      pages = totalItens;
    } else if (i === Math.floor(total)) {
      pages = totalItens % count;
    }

    for (let j = 0; j < pages; j++) {
      groups[i].push(count);
      count++;
    }
  }
  return groups;
}

function getCurrentGroup(groups, currentPage) {
  return groups[currentPage] || [];
}
function groupPages(currentPage = 1) {
  let start = Number(currentPage) / maxPages;
  return Math.floor(start);
}
function getPages(pagination) {
  const pages = getCurrentGroup(mountGroups(pagination.total), groupPages(pagination.current - 1));
  return pages <= 1 ? [] : pages;
}
function getTotalPages(totalItens, maxPages) {
  return totalItens / maxPages;
}
function getNext(pagination) {
  return pagination.total > 1 && (pagination.total > 1 && pagination.current < pagination.total);
}
function getPrev(pagination) {
  return pagination.total > 0 && pagination.current > 1;
}

const mapDispatchToProps = (dispatch, store) => {

  const fetch = (filter, pagination, search) => {
    dispatch(fetching(true));
    if (filter === 'characters') {
      dispatch(charactersGet(Object.assign({}, { page: pagination.current, total: pagination.total, orderBy: 'name', nameStartsWith: search })));
    } else {
      dispatch(comicsGet(Object.assign({}, { page: pagination.current, total: pagination.total, orderBy: 'title', titleStartsWith: search })));
    }
  };

  return {
    errorClear: (props) => {
      dispatch(fetchingError(''));
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
    filterAction: (val, props) => {
      dispatch(push(`/${val}/${defaultStore.pagination.current}?search=${appStore.getState().search}`));
      dispatch(filter(val));
      dispatch(pagination(defaultStore.pagination));
      fetch(val, appStore.getState().pagination, appStore.getState().search);
    },
    paginationAction: (url, props) => {
      dispatch(push(url));
      const page = Number(url.split('/')[2].split('?')[0]);
      const store = appStore.getState();
      dispatch(pagination({ current: page, pages: getPages(store.pagination), next: getNext(store.pagination), prev: getPrev(store.pagination) }));
    }
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
