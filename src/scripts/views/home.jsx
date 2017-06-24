import React from 'react';
import Api from '../model/api';
import Loader from './loader';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.charactersFetch({ orderBy: 'name' });
  }
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <Loader loading={this.props.fetching} />
      </div>
    );
  }
}

Home.propTypes = {
  characters: React.PropTypes.array,
  fetching: React.PropTypes.bool,
  fetchingAction: React.PropTypes.func,
  charactersFetch: React.PropTypes.func
}

export default Home;
