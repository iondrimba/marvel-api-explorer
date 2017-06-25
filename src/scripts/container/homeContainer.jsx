import { connect } from 'react-redux';
import Home from '../views/home';
import { characters, charactersGet } from '../actions/characters';
import fetching from '../actions/fetching';
import pagination from '../actions/pagination';
import * as constants from '../actions/constants';
import { withRouter } from 'react-router-dom'

function mapStateToProps(store) {
  return {
    fetching: store.fetching,
    pagination: store.pagination,
    characters: store.characters
  };
}

const mapDispatchToProps = (dispatch, store) => {
  return {
    paginationAction: (page) => {

      dispatch(pagination({ current: page }));
      dispatch(fetching(true));
      dispatch(charactersGet(Object.assign({}, { offset: page * 20 }, { orderBy: 'name' })));

    }
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
