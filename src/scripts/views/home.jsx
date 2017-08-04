import React from 'react';
import Api from '../model/api';
import Loader from './loader';
import ImageList from './imageList';
import Pagination from './pagination';
import Styles from '../../scss/home.scss';
import Search from './search';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    //this.props.fetchAction(this.props);
  }
  componentWillReceiveProps(nextProps) {
    // console.log('componentWillReceiveProps', nextProps);
  }
  componentWillUpdate(nextProps, nextState) {
    // console.log('componentWillUpdate', nextProps);
  }
  componentWillUnmount() {
    // console.log('componentWillUnmount');
  }
  
  componentDidUpdate(prevProps, prevState) {    
    
    // if (this.props.filter && this.props.search) {      
    //   if (this.props.fetching) {
    //     if (((prevProps.pagination.current !== this.props.pagination.current) || this.props.pagination.total === 0) &&
    //       this.props.match.params.page !== 'detail' &&
    //       !isNaN(prevProps.pagination.current)
    //     ) {
    //       this.props.fetchAction(this.props);
    //     }
    //   }
    // }
  }

  render() {
    console.log('home render', this.props);
    return (
      <div className="home">
        <Search  {...this.props} />
        <Loader {...this.props} />
        <Pagination {...this.props} />
        <ImageList {...this.props} />
      </div>
    );
  }
}

Home.propTypes = {
  match: React.PropTypes.object,
  fetchAction: React.PropTypes.func,
  pagination: React.PropTypes.object,
  fetching: React.PropTypes.bool,
  filter: React.PropTypes.string,
  search: React.PropTypes.string
}

export default Home;
