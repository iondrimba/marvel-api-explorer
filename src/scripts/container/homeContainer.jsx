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
  return {
    errorClear: (props) => {
      dispatch(fetchingError(''));
    },
    searchAction: (search, props) => {
      //dispatch(search(val));
      //dispatch(pagination({ current: 1, total: 0, pages: [] }));
      // dispatch(fetching(true));
      if (props.filter === 'characters') {
        dispatch(charactersGet(Object.assign({}, { page: 1, total: 0, orderBy: 'name', nameStartsWith: search })));
      } else {
        dispatch(comicsGet(Object.assign({}, { page: 1, total: 0, orderBy: 'title', titleStartsWith: search })));
      }
      console.log('searchAction', store, props);
    },
    filterAction: (val) => {
      console.log('filterAction', store);
      dispatch(filter(val));
      dispatch(pagination({ current: 1, total: 0, pages: [] }));
      //dispatch(fetching(true));
    },
    paginationAction: (props) => {
      //dispatch(fetching(true));
      console.log('paginationAction', props);
      if (props.filter === 'characters') {
        //dispatch(charactersGet(Object.assign({}, { page: props.pagination.current, total: props.pagination.total, orderBy: 'name', nameStartsWith: props.search })));
      } else {
        //dispatch(comicsGet(Object.assign({}, { page: props.pagination.current, total: props.pagination.total, orderBy: 'title', titleStartsWith: props.search })));
      }
      //dispatch(pagination({ current: 1, pages: getPages(props.pagination), next: getNext(props.pagination), prev: getPrev(props.pagination) }));
    },
    fetchAction: (f, props) => {
      const { type, page } = store.match.params;
      const { total } = props.pagination;
      dispatch(filter(f));

      if (f === 'characters') {
        dispatch(charactersGet(Object.assign({}, { page, total, orderBy: 'name', nameStartsWith: props.search })));
      } else {
        dispatch(comicsGet(Object.assign({}, { page, total, orderBy: 'title', titleStartsWith: props.search })));
      }
    }
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
