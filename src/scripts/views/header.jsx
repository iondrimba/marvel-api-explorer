import React from 'react';
import Search from './search';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySearch: false
    }
  }
  onSearchClick() {
    this.setState({ displaySearch: !this.state.displaySearch });
  }
  onSearch() {
    this.setState({ displaySearch: false });
  }
  render() {
    return (
      <section>
        <header className="header">
          <Link className="header__dots" to={{ pathname: '/about' }} >
            <img src="/images/dots.svg" />
          </Link>
          <h1><img className="logo" src="/images/marvel.svg" /><span>API Explorer</span></h1>
          <button className="header__search" onClick={this.onSearchClick.bind(this)}>
            <img className={!this.state.displaySearch ? 'search-icon' : 'search-icon hide'} src="/images/search.svg" />
            <img className={this.state.displaySearch ? 'close-icon' : 'close-icon hide'} src="/images/close.svg" />
          </button>
        </header>
        <Search onSearch={this.onSearch.bind(this)} display={this.state.displaySearch} filter={this.props.filter} searchAction={this.props.searchAction} filterAction={this.props.filterAction} />
      </section>
    );
  }
}

Header.propTypes = {
  match: React.PropTypes.object,
  fetchAction: React.PropTypes.func,
  searchAction: React.PropTypes.func,
  paginationAction: React.PropTypes.func,
  filterAction: React.PropTypes.func,
  pagination: React.PropTypes.object,
  filter: React.PropTypes.string,
  location: React.PropTypes.object,
  fetching: React.PropTypes.bool,
  data: React.PropTypes.array,
}

export default Header;
