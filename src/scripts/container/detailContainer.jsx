import { connect } from 'react-redux';
import Detail from '../views/detail';
import { characters, charactersGet } from '../actions/characters';
import fetching from '../actions/fetching';
import * as constants from '../actions/constants';
import { withRouter } from 'react-router-dom'

function mapStateToProps(store) {
  return {
    fetching: store.fetching,
    characters: store.characters
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    charactersFetch: (options) => {
      dispatch(fetching(true));
      dispatch(charactersGet(options));
    }
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Detail));
