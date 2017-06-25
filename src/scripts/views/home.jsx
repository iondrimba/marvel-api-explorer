import React from 'react';
import Api from '../model/api';
import Loader from './loader';
import ImageList from './imageList';
import Pagination from './pagination';
import Styles from '../../scss/home.scss';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.paginationAction(0);
  }
  render() {
    return (
      <div className="home">
        <h1>Hello</h1>
        <span>{this.props.location.pathname}</span>
        <Loader loading={this.props.fetching} />
        <Pagination {...this.props} />
        <ImageList images={this.props.characters} />
      </div>
    );
  }
}

Home.propTypes = {
  characters: React.PropTypes.array,
  location: React.PropTypes.object,
  pagination: React.PropTypes.object,
  paginationAction: React.PropTypes.func,
  pageAction: React.PropTypes.func,
  fetching: React.PropTypes.bool,
  page: React.PropTypes.number,
  fetchingAction: React.PropTypes.func,
  charactersFetch: React.PropTypes.func
}

export default Home;
