import React from 'react';

class ScrollIndicator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button type="button" name="scroll-indicator" className="scroll-indicator">
        <span className="scroll-indicator__icon"></span>
      </button>
    );
  }
}

export default ScrollIndicator;
