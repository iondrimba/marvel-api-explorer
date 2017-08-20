import React from 'react';
import Api from '../model/api';
import Loader from './loader';
import ImageList from './imageList';
import Pagination from './pagination';
import Error from './error';
import Header from './header';
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
        <Header {...this.props}/>
        <Error {...this.props} />
        <Loader fetching = {this.props.fetching} />
        <Pagination filter={this.props.filter} search={this.props.location.search} paginationAction={this.props.paginationAction} pagination={this.props.pagination} />
        <ImageList {...{ data, filter}} />
      </div>
    );
  }
}

Home.propTypes = {
  match: React.PropTypes.object,
  error: React.PropTypes.object,
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
