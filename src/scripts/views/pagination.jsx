import React from 'react';
import { NavLink } from 'react-router-dom'

class Pagination extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps, prevState) {
    let oldLocation = prevProps.location.pathname;
    let newLocation = this.props.location.pathname;
    var page = this.props.match.params.page;
    if (isNaN(page) === false && page && page !== prevProps.pagination.current) {
      this.props.paginationAction(this.props);
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
              pathname: `/${this.props.filter}/${index}`
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
  location: React.PropTypes.object,
  filter: React.PropTypes.any,
  match: React.PropTypes.object,
}
export default Pagination;
