import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="header">
        <button className="header__dots">
          <img src="/images/dots.svg" />
        </button>
        <h1><img className="logo" src="/images/marvel.svg" /><span>API Explorer</span></h1>
        <button className="header__search">
          <img src="/images/search.svg" />
        </button>
      </header>
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
