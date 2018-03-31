import React from 'react';
import { Link } from 'react-router-dom'

class GridItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
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
  id: React.PropTypes.number,
  thumb: React.PropTypes.string,
  title: React.PropTypes.string,
  filter: React.PropTypes.string
}

export default GridItem;
