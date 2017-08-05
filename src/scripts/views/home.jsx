import React from 'react';
import Api from '../model/api';
import Loader from './loader';
import ImageList from './imageList';
import Pagination from './pagination';
import PaginationContainer from '../container/paginationContainer';
import Styles from '../../scss/home.scss';
import Search from './search';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidUpdate(prevProps, prevState) {
  }

  render() {
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

}

export default Home;
