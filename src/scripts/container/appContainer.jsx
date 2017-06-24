import { connect } from 'react-redux';
import Home from '../views/home';
import { characters, charactersGet } from '../actions/characters';
import fetching from '../actions/fetching';
import * as constants from '../actions/constants';

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

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default AppContainer;
