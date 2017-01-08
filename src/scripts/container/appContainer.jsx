import { connect } from 'react-redux';
import Home from '../views/home';
import createAction from '../actions/createAction';
import * as constants from '../actions/constants';


function mapStateToProps(store) {
  return {
    muted: store.muted
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    muteAction: (value) => {
      dispatch(createAction(constants.MUTED, { value }));
    }
  };
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default AppContainer;
