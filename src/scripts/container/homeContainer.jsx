import { connect } from 'react-redux';
import Home from '../views/home';
import { characters, charactersGet } from '../actions/characters';
import fetching from '../actions/fetching';
import * as constants from '../actions/constants';
import { withRouter } from 'react-router-dom'

function mapStateToProps(store) {
  return {
    fetching: store.fetching,
    page: store.page,
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
