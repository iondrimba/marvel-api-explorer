import React from 'react';

class Error extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      this.props.error.code ? <div className="error"><h1>Something went wrong, please try again!</h1></div> :<div></div>
    );
  }
}
Error.propTypes = {
  error: React.PropTypes.object,
}
export default Error;
