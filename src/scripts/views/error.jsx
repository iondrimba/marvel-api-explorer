import React from 'react';

class Error extends React.Component {
  constructor(props) {
    super(props);
  }
  onRetry() {
    this.props.retry();
  }
  render() {
    return (
      this.props.error.code ? <div className="error" onClick={this.onRetry.bind(this)}><h1>Something went wrong, please click to try again!</h1></div> :<div></div>
    );
  }
}
Error.propTypes = {
  error: React.PropTypes.object,
}
export default Error;
