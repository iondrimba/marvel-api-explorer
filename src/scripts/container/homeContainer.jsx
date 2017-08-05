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
  return getCurrentGroup(mountGroups(pagination.total), groupPages(pagination.current - 1));
}
function getTotalPages(totalItens, maxPages) {
  return totalItens / maxPages;
}
function getNext(pagination) {
  return pagination.total > 0 && pagination.current < getTotalPages(pagination.total, maxPages);
}
function getPrev(pagination) {
  return pagination.total > 0 && pagination.current > 1;
}

const mapDispatchToProps = (dispatch, store) => {

  const fetch = (filter, pagination, search) => {
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
    searchAction: (val, props) => {
      dispatch(push(`/${props.filter}/?search=${val}`));
      dispatch(search(val));
      console.log('searchAction', val, appStore.getState());
      fetch(appStore.getState().filter, appStore.getState().pagination, val );
    },
    filterAction: (val, props) => {
      dispatch(push(`/${val}/?search=${appStore.getState().search}`));
      dispatch(filter(val));
      console.log('filterAction', val, appStore.getState());
      fetch(val, appStore.getState().pagination, appStore.getState().search );
    },
    paginationAction: (url, props) => {
      const page = Number(url.split('/')[2].split('?')[0]);
      dispatch(push(url));
      dispatch(pagination({ current: page, pages: getPages(appStore.getState().pagination), next: getNext(appStore.getState().pagination), prev: getPrev(appStore.getState().pagination) }));
      console.log('paginationAction', page, appStore.getState());
      fetch(appStore.getState().filter, appStore.getState().pagination, appStore.getState().search );

    }
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
