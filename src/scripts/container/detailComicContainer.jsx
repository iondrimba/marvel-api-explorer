import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import DetailComic from '../views/detailComic';

function mapStateToProps(store) {
  return {
    data: store.data
  };
}

export default withRouter(connect(mapStateToProps, null)(DetailComic));
