import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from '../components/loader';
import Grid from '../components/grid';
import Pagination from '../components/pagination';
import Error from '../components/error';
import Header from '../components/header';
import Hammer from 'hammerjs';
import Explore from '../components/explore';

class Home extends Component {
  componentDidMount() {
    const stage = document.getElementsByClassName('grid')[0];
    const mc = new Hammer.Manager(stage, {
      touchAction: 'pan-y'
    });

    const Swipe = new Hammer.Swipe();

    mc.add(Swipe);
    mc.on('swiperight', (e) => {
      this.pagination.previous();
    });

    mc.on('swipeleft', (e) => {
      this.pagination.next();
    });
  }

  onExploreClick() {
    this.props.firstFetch(this.props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.location.pathname.indexOf('detail') === -1;
  }

  componentDidUpdate(prevProps, prevState) {
    window.scroll(0, 0);

    if (prevProps.match.params.page !== this.props.match.params.page && !isNaN(this.props.match.params.page) && !isNaN(prevProps.match.params.page)) {
      this.props.fetchAction(this.props);
    }
  }

  render() {
    const { data, filter } = this.props;

    return (
      <div className="home">
        <Explore onClick={this.onExploreClick.bind(this)} {...this.props} />
        <Header {...this.props} />
        <Error error={this.props.error} retry={this.props.fetchAction} />
        <Loader fetching={this.props.fetching} />
        <Grid {...{ data, filter }} />
        <Pagination ref={(c) => this.pagination = c} {...this.props} />
      </div>
    );
  }
}

Home.propTypes = {
  match: PropTypes.object,
  error: PropTypes.object,
  data: PropTypes.array,
  fetchAction: PropTypes.func,
  searchClear: PropTypes.func,
  searchAction: PropTypes.func,
  firstFetch: PropTypes.func,
  filter: PropTypes.string,
  fetching: PropTypes.bool
}

export default Home;
