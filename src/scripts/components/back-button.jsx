import React from 'react';

class BackButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button type="button" name="back" className="back-button">
        <span className="back-button__icon"></span>
      </button>
    );
  }
}

export default BackButton;
