import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import Pagination from '../views/pagination';
import { charactersGet } from '../actions/characters';
import { comicsGet } from '../actions/comics';
import fetching from '../actions/fetching';
import search from '../actions/search';
import fetchingError from '../actions/fetchingError';
import filter from '../actions/filter';
import pagination from '../actions/pagination';

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
function mapStateToProps(store) {
  return {
    pagination: Object.assign({}, store.pagination, { pages: getPages(store.pagination), next: getNext(store.pagination), prev: getPrev(store.pagination) })
  };
}
const mapDispatchToProps = (dispatch, store) => {
  return {
    paginationAction: (page) => {
      //dispatch(fetching(true));
      dispatch(pagination({ current: page, pages: getPages(store.pagination), next: getNext(store.pagination), prev: getPrev(store.pagination) }));
    }
  };
}



export default connect(mapStateToProps, null)(Pagination);
