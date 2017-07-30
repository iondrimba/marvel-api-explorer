import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import DetailCharacter from '../views/detailCharacter';

function mapStateToProps(store) {
  return {
    data: store.data
  };
}

export default withRouter(connect(mapStateToProps, null)(DetailCharacter));
