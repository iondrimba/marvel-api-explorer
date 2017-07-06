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

function mountGroups(total) {
  let count = 0;
  let groups = [[]];
  for (var index = 0; index < (total / 5); index++) {
    groups.push([]);
    for (var j = 0; j < 5; j++) {

      groups[index].push(count);
      count++;
    }
  }

  return groups;
}

function mountPages() {
  let pagesCount = this.totalPages / this.maxPages;

  if (pagesCount < this.maxPages) {
    pagesCount = this.maxPages;
  }

  return pagesCount;
}
function getCurrentGroup(groups) {
  return groups[0];
}
function groupPages() {
  let start = 0;

  return start;
}
function getPages(pagination) {
  return getCurrentGroup(mountGroups(pagination.total));
}
function mapStateToProps(store) {
  return {
    fetching: store.fetching,
    filter: store.filter,
    pagination: Object.assign({}, store.pagination, { pages: getPages(store.pagination) }),
    characters: store.characters,

  };
}

export default withRouter(connect(mapStateToProps, null)(Pagination));
