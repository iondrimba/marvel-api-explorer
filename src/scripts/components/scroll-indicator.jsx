import React, { PureComponent } from 'react';

class ScrollIndicator extends PureComponent {
  render() {
    return (
      <button type="button" name="scroll-indicator" className="scroll-indicator">
        <span className="scroll-indicator__icon"></span>
      </button>
    );
  }
}

export default ScrollIndicator;
