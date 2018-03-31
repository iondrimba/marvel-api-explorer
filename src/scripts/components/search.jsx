import React from 'react';
import Menu from './menu';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: props.search
    }
  }

  componentDidMount() {
    this.refs.form.onsubmit = (evt) => {
      evt.preventDefault();
      this.props.searchAction(this.state.search, this.props);
      this.refs.search.classList.add('hide');
      this.props.onSearch();
      this.refs.form.blur();
      this.refs.searchInput.blur();
    }
  }

  componentDidUpdate() {
    if (this.props.display) {
      this.refs.searchInput.focus();
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
      <div ref={'search'} className={this.props.display ? 'search display' : 'search'}>
        <form ref={'form'} action="/" method="get">
          <div className="search-wrapper">
            <input ref={'searchInput'} id="search" type="text" value={this.state.search} name="search" placeholder="name/title starts with...." onChange={this.onTextChange.bind(this)} />
            <label htmlFor="search">search</label>
            <button type="submit" name="button-search">search</button>
            <img onClick={this.onSearchClear.bind(this)} className={this.state.search ? 'close-icon show' : 'close-icon'} src="/images/close.svg" alt="Clear search icon" />
          </div>
          <Menu ref={'menu'} {...this.props} onClick={this.onClick.bind(this)} />
        </form>
      </div>
    );
  }
}

Search.propTypes = {
  searchAction: React.PropTypes.func,
  searchClear: React.PropTypes.func,
  onSearch: React.PropTypes.func,
  search: React.PropTypes.string,
  display: React.PropTypes.bool
}

export default Search;
