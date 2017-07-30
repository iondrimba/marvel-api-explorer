import React from 'react';
import { NavLink } from 'react-router-dom';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: ''
    };
  }
  componentDidMount() {
  }
  onClick(evt) {
    const filter = evt.currentTarget.innerText.toLowerCase();
    this.setState({ filer: filter });
    this.props.filterAction(filter);
  }
  render() {
    return (
      <ul>
        <li><span onClick={this.onClick.bind(this)}>Characters</span><br /></li><br />
        <li><span onClick={this.onClick.bind(this)}>Comics</span><br /></li>
      </ul>
    );
  }
}
Menu.propTypes = {
  filterAction: React.PropTypes.func
}
export default Menu;
