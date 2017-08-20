import React from 'react';
import Menu from './menu';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
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
      this.refs.menu.displayMenu(false);
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
    this.setState({ search: '' });
    this.props.searchClear('');
  }
  render() {
    return (
      <div ref={'search'} className={this.props.display ? 'search display' : 'search'}>
        <form ref={'form'} action="">
          <div className="search-wrapper">
            <input ref={'searchInput'} type="text" value={this.state.search} placeholder="name/title starts with...." onChange={this.onTextChange.bind(this)} />
            <button type="submit">search</button>
            <img onClick={this.onSearchClear.bind(this)} className={this.state.search ? 'close-icon show' : 'close-icon'} src="/images/close.svg" />
          </div>
          <Menu ref={'menu'} {...this.props} onClick={this.onClick.bind(this)} />
        </form>
      </div>
    );
  }
}
Search.propTypes = {
  searchAction: React.PropTypes.func,
  onSearch: React.PropTypes.func,
  display: React.PropTypes.bool
}
export default Search;
