import React from 'react';
import { NavLink } from 'react-router-dom';

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul>
        <NavLink strict className="link" to={{
          pathname: '/characters'
        }} key={'characters'} >
          <li>Characters</li>
        </NavLink>
        <NavLink strict className="link" to={{
          pathname: '/comics'
        }} key={'comic'} >
          <li>Comics</li>
        </NavLink>

      </ul>
    );
  }
}
Menu.propTypes = {
}
export default Menu;
