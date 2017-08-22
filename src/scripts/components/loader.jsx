import React from 'react';

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
  fetching: React.PropTypes.bool,
}
export default Loader;
