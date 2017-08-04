import React from 'react';

class Loader extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      this.props.fetching ? <span className="loading">loading...</span> : <span></span>
    );
  }
}
Loader.propTypes = {
  fetching: React.PropTypes.bool,
}
export default Loader;
