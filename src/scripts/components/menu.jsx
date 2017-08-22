import React from 'react';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: this.props.filter
    };
  }
  componentDidMount() {
  }
  displayMenu(hiding) {
    this.refs.list.classList.remove(hiding ? 'hide' : 'show');
    this.refs.list.classList.add(hiding ? 'show' : 'hide');

    this.refs.menu.classList.remove('show');
    hiding ? this.refs.menu.classList.add('show') : null;
  }
  isHidden() {
    return this.refs.list.classList.value.includes('hide');
  }
  onClick(evt) {
    const filter = evt.currentTarget.innerText.toLowerCase();
    this.setState({ filer: filter });
    this.props.filterAction(filter, this.props);
    this.displayMenu(this.isHidden());
    this.props.onClick();
  }
  onSelect(evt) {
    this.displayMenu(this.isHidden());
  }
  render() {
    return (
      <nav ref={'menu'} className="menu">
        <span onClick={this.onSelect.bind(this)}>{this.props.filter}</span>
        <ul ref={'list'} className="list hide">
          <li className="list__item"><span onClick={this.onClick.bind(this)}>Characters</span></li>
          <li className="list__item"><span onClick={this.onClick.bind(this)}>Comics</span></li>
        </ul>
      </nav>
    );
  }
}
Menu.propTypes = {
  filter: React.PropTypes.string,
  onClick: React.PropTypes.func,
  filterAction: React.PropTypes.func
}
export default Menu;
