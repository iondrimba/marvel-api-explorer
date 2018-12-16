import React from 'react';
import PropTypes from 'prop-types';

class Loader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      this.props.fetching ? <div className="loading"><img src="/images/marvel.svg" alt="loading data" width="80" /></div> : <span></span>
    );
  }
}

Loader.propTypes = {
  fetching: PropTypes.bool,
}

export default Loader;
