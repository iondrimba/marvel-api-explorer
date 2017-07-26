import React from 'react';
import Api from '../model/api';
import Loader from './loader';
import ImageList from './imageList';
import PaginationContainer from '../container/paginationContainer';
import Styles from '../../scss/home.scss';
import Menu from './menu';
import Search from './search';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    //this.props.filterAction(this.props);
  }
  componentWillReceiveProps(nextProps) {
    // console.log('componentWillReceiveProps', nextProps);
  }
  componentWillUpdate(nextProps, nextState) {
    // console.log('componentWillUpdate', nextProps);
  }
  componentDidUpdate(prevProps, prevState) {

    if (this.props.filter && this.props.search) {

      if (this.props.fetching) {
        if ((prevProps.pagination.current !== this.props.pagination.current) || this.props.pagination.total === 0) {
          this.props.fetchAction(this.props);
        }
      }
    }
  }

  render() {
    return (
      <div className="home">
        <h1>Hello</h1>
        <span>{this.props.location.pathname}</span>
        <Search  {...this.props} />
        <Menu {...this.props} />
        <Loader loading={this.props.fetching} />
        <PaginationContainer {...this.props} />
        <ImageList {...this.props} />
      </div>
    );
  }
}

Home.propTypes = {
  location: React.PropTypes.object,
  fetchAction: React.PropTypes.func,
  pagination: React.PropTypes.object,
  errorClear: React.PropTypes.func,
  history: React.PropTypes.object,
  error: React.PropTypes.string,
  fetching: React.PropTypes.bool,
  page: React.PropTypes.number,
  match: React.PropTypes.object,
  filter: React.PropTypes.string,
  search: React.PropTypes.string
}

export default Home;
