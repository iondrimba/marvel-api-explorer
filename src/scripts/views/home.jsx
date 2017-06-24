import React from 'react';
import Api from '../model/api';
import Loader from './loader';
import ImageList from './imageList';
import Styles from '../../scss/home.scss';

class Home extends React.Component {
  constructor(props) {
    super(props);
    console.log(this);
    this.state = {
      path: ''
    };
  }
  componentDidMount() {
    this.props.charactersFetch({ orderBy: 'name' });
  }

  render() {
    return (
      <div className="home">
        <h1>Hello</h1>
        <Loader loading={this.props.fetching} />
        <ImageList images={this.props.characters} />
      </div>
    );
  }
}

Home.propTypes = {
  characters: React.PropTypes.array,
  location: React.PropTypes.object,
  fetching: React.PropTypes.bool,
  page: React.PropTypes.number,
  fetchingAction: React.PropTypes.func,
  charactersFetch: React.PropTypes.func
}

export default Home;
