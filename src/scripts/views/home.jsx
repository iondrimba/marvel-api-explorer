import React from 'react';
import Api from '../model/api';
import Loader from './loader';
import ImageList from './imageList';
import Pagination from './pagination';
import Styles from '../../scss/home.scss';
import Search from './search';
import { withRouter } from 'react-router-dom'

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
   // this.props.fetchAction(this.props);
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
  fetchAction: React.PropTypes.func
}

export default withRouter(Home);
