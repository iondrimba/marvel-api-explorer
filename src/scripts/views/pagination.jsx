import React from 'react';
import { NavLink } from 'react-router-dom'

class Pagination extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps, prevState) {
    let oldLocation = prevProps.location.pathname;
    let newLocation = this.props.location.pathname;
    var page = Number(newLocation.replace('/', ''));
    if (newLocation !== oldLocation && this.props.pagination.current !== page) {
      if (isNaN(page)) { return }
      this.props.paginationAction(page);
    }
  }

  render() {
    var ar = [];
    for (var index = 0; index < this.props.pagination.total; index++) {
      ar.push(index);
    }
    return (
      <div>
        {
          ar.map((data, index) => {
            return <NavLink strict className="link" to={{
              pathname: `/${index}`
            }} key={data + index} >
              <span>{index + 1}</span>
            </NavLink>
          })
        }
      </div>
    );
  }
}
Pagination.propTypes = {
  paginationAction: React.PropTypes.func,
  pagination: React.PropTypes.any,
  location: React.PropTypes.object
}
export default Pagination;
