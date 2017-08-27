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
    this.props.fetchAction(this.props);

    // get a reference to an element
    var stage = document.getElementsByClassName('grid')[0];

    // create a manager for that element
    var mc = new Hammer.Manager(stage);

    // create a recognizer
    var Swipe = new Hammer.Swipe();

    // add the recognizer
    mc.add(Swipe);

    // subscribe to events
    mc.on('swiperight', (e) => {
      this.refs.pagination.previous();
    });
    mc.on('swipeleft', (e) => {
      this.refs.pagination.next();
    });
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
  paginationAction: React.PropTypes.func,
  pagination: React.PropTypes.object,
  filter: React.PropTypes.string,
  location: React.PropTypes.object,
  fetching: React.PropTypes.bool
}

export default Home;
