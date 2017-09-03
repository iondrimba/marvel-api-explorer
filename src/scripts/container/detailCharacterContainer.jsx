import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import DetailCharacter from '../pages/detailCharacter';
import { createSelector } from 'reselect';

const getItem = (state, props) => {
  return state.find((item, i) => item.id === Number(props.match.params.id));
}

const getSelectedItem = createSelector(
  [getItem],
  (item, props) => item
)

const mapStateToProps = (state, props) => {
  return {
    selectedItem: getSelectedItem(state.data, props)
  }
}

export default withRouter(connect(mapStateToProps, null)(DetailCharacter));
