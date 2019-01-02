import React, { PureComponent } from 'react';
import Menu from './menu';
import PropTypes from 'prop-types';

class Search extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      search: props.search
    }
  }

  componentDidMount() {
    this.form.onsubmit = (evt) => {
      evt.preventDefault();
      this.props.searchAction(this.state.search, this.props);
      this.search.classList.add('hide');
      this.props.onSearch();
      this.form.blur();
      this.searchInput.blur();
    }
  }

  componentDidUpdate() {
    if (this.props.display) {
      this.searchInput.focus();
    }
  }

  onTextChange(evt) {
    const search = evt.currentTarget.value;
    this.setState({ search: search });
  }

  onClick() {
    this.props.onSearch();
  }

  onSearchClear() {
    this.props.searchClear('');
    this.setState({ search: this.props.search });
  }

  render() {
    return (
      <div ref={(c) => this.search = c} className={this.props.display ? 'search display' : 'search'}>
        <form ref={(c) => this.form = c} action="/" method="get">
          <div className="search-wrapper">
            <input ref={(c) => this.searchInput = c} id="search" type="text" value={this.state.search} name="search" placeholder="name/title starts with...." onChange={this.onTextChange.bind(this)} />
            <label htmlFor="search">search</label>
            <button type="submit" name="button-search">search</button>
            <img onClick={this.onSearchClear.bind(this)} className={this.state.search ? 'close-icon show' : 'close-icon'} src="/images/close.svg" alt="Clear search icon" />
          </div>
          <Menu ref={(c) => this.menu = c} {...this.props} onClick={this.onClick.bind(this)} />
        </form>
      </div>
    );
  }
}

Search.propTypes = {
  searchAction: PropTypes.func,
  searchClear: PropTypes.func,
  onSearch: PropTypes.func,
  search: PropTypes.string,
  display: PropTypes.bool
}

export default Search;
