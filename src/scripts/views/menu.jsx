import React from 'react';
import { NavLink } from 'react-router-dom';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: this.props.filter
    };
  }
  componentDidMount() {
  }
  onClick(evt) {
    const filter = evt.currentTarget.innerText.toLowerCase();
    this.setState({ filer: filter });
    this.props.history.replace(`/${filter}/?search=${this.props.search}`)
    this.props.filterAction(filter);
    this.refs.list.classList.remove('show');
    this.refs.list.classList.add('hide');
  }
  onSelect(evt) {
    this.refs.list.classList.remove('hide');
    this.refs.list.classList.add('show');
  }
  render() {
    return (
      <div className="menu">
        <span onClick={this.onSelect.bind(this)}>{this.props.filter}</span>
        <ul ref={'list'} className="list hide">
          <li><span onClick={this.onClick.bind(this)}>Characters</span></li>
          <li><span onClick={this.onClick.bind(this)}>Comics</span></li>
        </ul>
      </div>
    );
  }
}
Menu.propTypes = {
  filter: React.PropTypes.string,
  filterAction: React.PropTypes.func,
  search: React.PropTypes.string,
  history: React.PropTypes.object
}
export default Menu;
