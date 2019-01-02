import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class CloseIcon extends PureComponent {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={this.props.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18">
        </line><line x1="6" y1="6" x2="18" y2="18">
        </line>
      </svg>
    );
  }
}

CloseIcon.propTypes = {
  color: PropTypes.string
}

export default CloseIcon;
