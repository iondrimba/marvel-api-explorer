import React from 'react';
import Api from '../model/api';
import Loader from '../components/loader';
import Grid from '../components/grid';
import Pagination from '../components/pagination';
import Error from '../components/error';
import Header from '../components/header';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    setTimeout(()=>{
      this.props.firstFetch(this.props);
    }, 1000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.location.pathname.indexOf('detail')===-1 ;
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
        <Error error={this.props.error} retry={this.props.fetchAction} />
        <Loader fetching = {this.props.fetching} />
        <Grid {...{ data, filter}} />
        <Pagination ref={'pagination'} {...this.props} />
      </div>
    );
  }
}

Home.propTypes = {
  match: React.PropTypes.object,
  error: React.PropTypes.object,
  data: React.PropTypes.array,
  fetchAction: React.PropTypes.func,
  firstFetch: React.PropTypes.func,
  filter: React.PropTypes.string,
  fetching: React.PropTypes.bool
}

export default Home;
