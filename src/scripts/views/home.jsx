import React from 'react';
import Api from '../model/api';
import Loader from './loader';
import ImageList from './imageList';
import Pagination from './pagination';
import Search from './search';
import { withRouter } from 'react-router-dom'

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.page !== this.props.match.params.page && !isNaN(this.props.match.params.page) && !isNaN(prevProps.match.params.page)) {
      this.props.fetchAction(this.props);
    }
  }

  render() {
    var { data, filter} = this.props;
    return (
      <div className="home">
        <Search filter={this.props.filter} searchAction={this.props.searchAction} filterAction={this.props.filterAction} />
        <Loader fetching = {this.props.fetching} />
        <Pagination filter={this.props.filter} search={this.props.location.search} paginationAction={this.props.paginationAction} pagination={this.props.pagination} />
        <ImageList {...{ data, filter}} />
      </div>
    );
  }
}

Home.propTypes = {
  search: React.PropTypes.string,
  match: React.PropTypes.object,
  fetchAction: React.PropTypes.func,
  searchAction: React.PropTypes.func,
  paginationAction: React.PropTypes.func,
  filterAction: React.PropTypes.func,
  pagination: React.PropTypes.object,
  filter: React.PropTypes.string,
  location: React.PropTypes.object,
  fetching: React.PropTypes.bool,
  data: React.PropTypes.array,
}

export default Home;
