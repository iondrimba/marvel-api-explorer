import React from 'react';
import Api from '../model/api';
import Loader from './loader';
import ImageList from './imageList';
import Pagination from './pagination';
import Styles from '../../scss/home.scss';
import Menu from './menu';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="home">
        <h1>Hello</h1>
        <span>{this.props.location.pathname}</span>
        <Menu {...this.props} />
        <Loader loading={this.props.fetching} />
        <Pagination {...this.props} />
      </div>
    );
  }
}

Header.propTypes = {
}

export default Header;
