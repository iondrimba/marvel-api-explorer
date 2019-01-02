import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Explore extends PureComponent {
  render() {
    return (
      this.props.fetching || this.props.started ? <div></div> : <div className="btn-explore" onClick={this.props.onClick}>start exploring</div>
    );
  }
}

Explore.propTypes = {
  fetching: PropTypes.bool,
  started: PropTypes.bool,
  onClick: PropTypes.func
}

export default Explore;
