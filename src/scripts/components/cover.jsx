import React from 'react';
import PropTypes from 'prop-types';

class Cover extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="detail__cover">
        <img src={this.props.selectedItem.full} />
        <div className="detail__cover--reflex" style={{ backgroundImage: `url(${this.props.selectedItem.thumb})` }}>
        </div>
      </section>
    );
  }
}

Cover.propTypes = {
  selectedItem: PropTypes.object,
}

export default Cover;
