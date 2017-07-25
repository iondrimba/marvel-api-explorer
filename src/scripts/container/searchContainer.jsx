import React from 'react';
import { NavLink } from 'react-router-dom';
import { BrowserHistory } from 'react-router';
import { connect } from 'react-redux';
import Search from '../views/search';
import { characters, charactersGet } from '../actions/characters';
import fetching from '../actions/fetching';
import filter from '../actions/filter';
import * as constants from '../actions/constants';
import { withRouter } from 'react-router-dom'
import search from '../actions/search';

function mapStateToProps(store) {
  return {
    search: store.search
  };
}
const mapDispatchToProps = (dispatch, store) => {
  return {
    onSearch: (text) => {
      console.log('search onSearch', text);
      dispatch(search(text));
    }
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
