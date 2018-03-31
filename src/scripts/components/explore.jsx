import React from 'react';

class Explore extends React.Component {
  render() {
    return (
      this.props.fetching || this.props.started ? <div></div> : <div className="btn-explore" onClick={this.props.onClick}>start exploring</div>
    );
  }
}

Explore.propTypes = {
  fetching: React.PropTypes.bool,
  started: React.PropTypes.bool,
  onClick: React.PropTypes.func
}

export default Explore;
