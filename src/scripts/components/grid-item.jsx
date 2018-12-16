import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

class GridItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Link className="thumb" to={{ pathname: `/${this.props.filter}/detail/${this.props.id}` }}>
        <div className="thumb__mask"></div>
        <img className="thumb__file" data-src={this.props.thumb} src="/images/missing.jpg" alt={`${this.props.id}-${this.props.title}`} />
        <span className={`thumb__title ${this.props.thumb.indexOf('missing') === -1 ? '' : ''}`}>{this.props.title}</span>
      </Link>
    );
  }
}

GridItem.propTypes = {
  id: PropTypes.number,
  thumb: PropTypes.string,
  title: PropTypes.string,
  filter: PropTypes.string
}

export default GridItem;
