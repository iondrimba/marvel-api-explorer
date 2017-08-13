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
      this.refs.search.classList.add('searched');
    }
  }
  onTextChange(evt) {
    const search = evt.currentTarget.value;
    this.setState({ search: search });
  }
  render() {
    return (
      <div ref={'search'} className="search">
        <form ref={'form'} action="">
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
