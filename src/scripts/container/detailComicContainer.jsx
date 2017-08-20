import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import DetailComic from '../pages/detailComic';

function mapStateToProps(store) {
  return {
    data: store.data
  };
}

export default withRouter(connect(mapStateToProps, null)(DetailComic));
