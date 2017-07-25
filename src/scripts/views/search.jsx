import React from 'react';
import { NavLink } from 'react-router-dom';
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
  }
  componentDidMount() {
    this.onTextChange = this.onTextChange.bind(this);
    this.refs.search.onsubmit = (evt) => {
      evt.preventDefault();
      this.props.onSearch(this.state.search);
      this.setState({ search: '' });
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
        </form>
      </div>
    );
  }
}
Search.propTypes = {
  onSearch: React.PropTypes.func,
  filterAction: React.PropTypes.func,
}
export default Search;
