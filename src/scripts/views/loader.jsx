import React from 'react';

class Loader extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      this.props.loading ? <span className="loading">loading...</span> : <span></span>
    );
  }
}
Loader.propTypes = {
  loading: React.PropTypes.bool,
}
export default Loader;
