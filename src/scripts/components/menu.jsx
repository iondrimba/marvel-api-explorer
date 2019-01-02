import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Menu extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      filter: this.props.filter
    };
  }

  onClick(evt) {
    const filter = evt.currentTarget.innerText.toLowerCase();
    this.setState({ filer: filter });
    this.props.filterAction(filter, this.props);
    this.props.onClick();
    this.props.toogleMenuAction(false);
  }
  onSelect(evt) {
    this.props.toogleMenuAction(!this.props.menuOpen);
  }

  toogleVisibility() {
    return this.props.menuOpen ? 'show' : 'hide';
  }

  render() {
    return (
      <nav ref={(c) => this.menu = c} className={`menu ${this.props.menuOpen ? '' : 'show'}`}>
        <button type="button" name="show-menu" onClick={this.onSelect.bind(this)}>{this.props.filter}</button>
        <ul ref={(c) => this.list = c} className={`list ${this.toogleVisibility()}`}>
          <li className="list__item"><span onClick={this.onClick.bind(this)}>Characters</span></li>
          <li className="list__item"><span onClick={this.onClick.bind(this)}>Comics</span></li>
        </ul>
      </nav>
    );
  }
}

Menu.propTypes = {
  filter: PropTypes.string,
  toogleMenuAction: PropTypes.func,
  onClick: PropTypes.func,
  menuOpen: PropTypes.bool,
  filterAction: PropTypes.func
}

export default Menu;
