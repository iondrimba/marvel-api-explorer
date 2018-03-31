import React from 'react';

class BackButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button type="button" name="back" className="back-button" onClick={this.props.onClick}>
        <span className="back-button__icon"></span>
      </button>
    );
  }
}

BackButton.propTypes = {
  onClick: React.PropTypes.func
}

export default BackButton;
