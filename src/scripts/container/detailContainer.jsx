import { connect } from 'react-redux';
import Detail from '../views/detail';
import { characters, charactersGet } from '../actions/characters';
import fetching from '../actions/fetching';
import filter from '../actions/filter';
import * as constants from '../actions/constants';
import { withRouter } from 'react-router-dom'

function mapStateToProps(store) {
  return {
    characters: store.characters
  };
}

export default withRouter(connect(mapStateToProps, null)(Detail));
