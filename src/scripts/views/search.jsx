import React from 'react';
import { NavLink } from 'react-router-dom';
class Search extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log(this.props);
    this.onTextChange = this.onTextChange.bind(this);
    this.refs.search.onsubmit = (evt) => {
      evt.preventDefault();
    }

  }
  onTextChange(evt) {
    this.props.onSearch(evt.currentTarget.value);
  }
  render() {
    return (
      <div className="search">
        <form ref={'search'} action="">
          <input type="text" value={this.props.search} placeholder="name/title starts with...." onChange={this.onTextChange.bind(this)} />
          <button type="submit">search</button>
        </form>
      </div>
    );
  }
}
Search.propTypes = {
  search: React.PropTypes.string,
  onSearch: React.PropTypes.func
}
export default Search;
