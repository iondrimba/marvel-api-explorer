import React, { PureComponent } from 'react';
import Search from './search';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      displaySearch: false
    }
  }
  onSearchClick() {
    this.setState({ displaySearch: !this.state.displaySearch });
    this.props.toogleMenuAction(false);
  }
  onSearch() {
    this.setState({ displaySearch: false });
  }
  render() {
    return (
      <section>
        <header className="header">
          <Link className="header__dots" to={{ pathname: '/about' }} >
            <span >about</span>
            <img src="/images/dots.svg" alt="About icon" width="24" height="50" />
          </Link>
          <h1><img className="logo" src="/images/marvel.svg" alt="Marvel logo" /><span>API Explorer</span></h1>
          <button className="header__search" onClick={this.onSearchClick.bind(this)}>
            <img className={!this.state.displaySearch ? 'search-icon' : 'search-icon hide'} src="/images/search.svg" alt="Search icon" />
            <img className={this.state.displaySearch ? 'close-icon' : 'close-icon hide'} src="/images/close.svg" alt="Close icon" />
          </button>
        </header>
        <Search {...this.props} onSearch={this.onSearch.bind(this)} display={this.state.displaySearch} />
      </section>
    );
  }
}

Header.propTypes = {
  toogleMenuAction: PropTypes.func
}

export default Header;
