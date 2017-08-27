import React from 'react';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: this.props.filter
    };
  }
  displayMenu(hiding) {
    this.refs.menu.classList.remove('show');
    hiding ? this.refs.menu.classList.add('show') : null;
  }
  isHidden() {
    return this.props.menuOpen;
  }
  onClick(evt) {
    const filter = evt.currentTarget.innerText.toLowerCase();
    this.setState({ filer: filter });
    this.props.filterAction(filter, this.props);
    this.displayMenu(this.isHidden());
    this.props.onClick();
    this.props.toogleMenuAction(false);
  }
  onSelect(evt) {
    this.displayMenu(this.isHidden());
    this.props.toogleMenuAction(!this.props.menuOpen);
  }

  toogleVisibility() {
    return this.props.menuOpen ? 'show' : 'hide';
  }

  render() {
    return (
      <nav ref={'menu'} className="menu">
        <button type="button" name="show-menu" onClick={this.onSelect.bind(this)}>{this.props.filter}</button>
        <ul ref={'list'} className={`list ${this.toogleVisibility()}`}>
          <li className="list__item"><span onClick={this.onClick.bind(this)}>Characters</span></li>
          <li className="list__item"><span onClick={this.onClick.bind(this)}>Comics</span></li>
        </ul>
      </nav>
    );
  }
}
Menu.propTypes = {
  filter: React.PropTypes.string,
  toogleMenuAction: React.PropTypes.func,
  onClick: React.PropTypes.func,
  menuOpen: React.PropTypes.bool,
  filterAction: React.PropTypes.func
}
export default Menu;
