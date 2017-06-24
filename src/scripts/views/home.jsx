import React from 'react';
import Api from '../model/api';
import Loader from './loader';
import ImageList from './imageList';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log('mount', this);
    this.props.charactersFetch({ orderBy: 'name' });
  }
  componentWillUnmount() {
    console.log('componentWillUnmount', this);
  }
  componentWillUpdate(nextProps, nextState) {
    //console.log('componentWillUpdate', nextProps, nextState);
    //return false;
  }
  componentWillMount() {
    console.log('componentWillMount', this);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    return true;
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
        <Loader loading={this.props.fetching} />
        <ImageList images={this.props.characters} />
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
