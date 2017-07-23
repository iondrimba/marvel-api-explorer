import React from 'react';
import Api from '../model/api';
import Loader from './loader';
import ImageList from './imageList';
import PaginationContainer from '../container/paginationContainer';
import Styles from '../../scss/home.scss';
import Menu from './menu';
import SearchContainer from '../container/searchContainer';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.filterAction(this.props);
  }
  componentWillReceiveProps(nextProps) {

  }
  componentWillUpdate(nextProps, nextState) {
  }
  componentDidUpdate(prevProps, prevState) {
    let oldLocation = prevProps.location.pathname;
    let newLocation = this.props.location.pathname;

    if (this.props.error.length) {
      this.props.errorClear(this.props);
      this.props.history.goBack();
    }


    if (newLocation !== oldLocation && prevProps.match.params.page !== 'detail') {
      if (isNaN(this.props.match.params.page) !== false || this.props.match.params.page === undefined) {
        this.props.filterAction(this.props);
      }
    }
  }

  render() {
    return (
      <div className="home">
        <h1>Hello</h1>
        <span>{this.props.location.pathname}</span>
        <SearchContainer  {...this.props} />
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
  filterAction: React.PropTypes.func,
  errorClear: React.PropTypes.func,
  history: React.PropTypes.object,
  error: React.PropTypes.string,
  fetching: React.PropTypes.bool,
  page: React.PropTypes.number,
  match: React.PropTypes.object,
  filter: React.PropTypes.string,
}

export default Home;
