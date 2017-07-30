import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import Search from '../views/search';
import search from '../actions/search';

function mapStateToProps(store) {
  return {
    search: store.search
  };
}
const mapDispatchToProps = (dispatch, store) => {
  return {
    onSearch: (text) => {
      dispatch(search(text));
    }
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
