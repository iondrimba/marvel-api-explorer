import React from 'react';
import Api from '../model/api';
import Loader from '../components/loader';
import Grid from '../components/grid';
import Pagination from '../components/pagination';
import Error from '../components/error';
import Header from '../components/header';
import Hammer from 'hammerjs';


class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    setTimeout(()=>{
      this.props.searchAction(this.props.search, this.props);
    }, 1000);
  }
  componentDidUpdate(prevProps, prevState) {
    window.scroll(0, 0);
    if (prevProps.match.params.page !== this.props.match.params.page && !isNaN(this.props.match.params.page) && !isNaN(prevProps.match.params.page)) {
      this.props.fetchAction(this.props);
    }
  }

  render() {
    var { data, filter} = this.props;
    return (
      <div className="home">
        <Header {...this.props}/>
        <Error {...this.props} retry={this.props.fetchAction} />
        <Loader fetching = {this.props.fetching} />
        <Pagination ref={'pagination'} {...this.props} />
        <Grid {...{ data, filter}} />
      </div>
    );
  }
}

Home.propTypes = {
  match: React.PropTypes.object,
  data: React.PropTypes.array,
  fetchAction: React.PropTypes.func,
  searchAction: React.PropTypes.func,
  filter: React.PropTypes.string,
  search: React.PropTypes.string,
  fetching: React.PropTypes.bool
}

export default Home;
