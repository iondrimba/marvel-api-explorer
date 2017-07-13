import React from 'react';
import { NavLink } from 'react-router-dom';
import { BrowserHistory } from 'react-router';
import { connect } from 'react-redux';
import Pagination from '../views/pagination';
import { characters, charactersGet } from '../actions/characters';
import fetching from '../actions/fetching';
import filter from '../actions/filter';
import * as constants from '../actions/constants';
import { withRouter } from 'react-router-dom'
import pagination from '../actions/pagination';

function mountGroups(total) {
  let count = 0;
  let groups = [];
  for (var index = 0; index < (total / 5); index++) {
    groups.push([]);
    for (var j = 0; j < 5; j++) {

      groups[index].push(count);
      count++;
    }
  }

  return groups;
}

function getCurrentGroup(groups, currentPage) {
  return groups[currentPage] || [];
}
function groupPages(currentPage = 0) {
  let start = Number(currentPage) / 5;
  return Math.floor(start);
}
function getPages(pagination) {
  return getCurrentGroup(mountGroups(pagination.total), groupPages(pagination.current));
}
function mapStateToProps(store) {
  return {
    pagination: Object.assign({}, store.pagination, { pages: getPages(store.pagination) })
  };
}
const mapDispatchToProps = (dispatch, store) => {
  return {
    paginationAction: (page) => {
      dispatch(pagination({ current: page, pages: getPages(store.pagination) }));
    }
  };
}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Pagination));
