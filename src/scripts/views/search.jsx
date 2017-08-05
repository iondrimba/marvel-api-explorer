import React from 'react';
import Menu from './menu';
import Styles from '../../scss/search.scss';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
  }
  componentDidMount() {
    this.refs.search.onsubmit = (evt) => {
      evt.preventDefault();
      this.props.searchAction(this.state.search, this.props);
    }
  }
  onTextChange(evt) {
    const search = evt.currentTarget.value;
    this.setState({ search: search });
  }
  render() {
    return (
      <div className="search">
        <form ref={'search'} action="">
          <input type="text" value={this.state.search} placeholder="name/title starts with...." onChange={this.onTextChange.bind(this)} />
          <button type="submit">search</button>
          <Menu {...this.props} />
        </form>
      </div>
    );
  }
}
Search.propTypes = {
  searchAction: React.PropTypes.func
}
export default Search;
