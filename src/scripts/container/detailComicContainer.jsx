import { connect } from 'react-redux';
import DetailComic from '../views/detailComic';
import { characters, charactersGet } from '../actions/characters';
import fetching from '../actions/fetching';
import filter from '../actions/filter';
import * as constants from '../actions/constants';
import { withRouter } from 'react-router-dom'

function mapStateToProps(store) {
  return {
    comics: store.characters
  };
}

export default withRouter(connect(mapStateToProps, null)(DetailComic));
