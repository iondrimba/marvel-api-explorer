import React from 'react';
import PropTypes from 'prop-types';

class Error extends React.Component {
  constructor(props) {
    super(props);
  }
  onRetry() {
    this.props.retry();
  }
  render() {
    return (
      this.props.error.code ? <div className="error" onClick={this.onRetry.bind(this)}><h1>Click to retry please :)</h1></div> : <div></div>
    );
  }
}
Error.propTypes = {
  error: PropTypes.object,
  retry: PropTypes.func,
}
export default Error;
