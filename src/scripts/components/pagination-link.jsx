import React from 'react';

class PaginationLink extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a className={this.props.className} onClick={this.props.onClick} href={ this.props.href } >
        <span className={this.props.iconClassName}>{this.props.label}</span>
      </a>
    );
  }
}
PaginationLink.propTypes = {
  className: React.PropTypes.string,
  iconClassName: React.PropTypes.string,
  href: React.PropTypes.string,
  label: React.PropTypes.string,
  onClick: React.PropTypes.func
}
export default PaginationLink;
