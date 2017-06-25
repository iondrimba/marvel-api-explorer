import React from 'react';
import { NavLink } from 'react-router-dom'

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    console.log('pagination', props);
  }
  componentDidMount() {
    console.log('mount pagination ', this.props)
  }
  componentDidUpdate(prevProps, prevState) {
    let oldLocation = prevProps.location.pathname
    let newLocation = this.props.location.pathname
    if (newLocation !== oldLocation) {
      var page = Number(newLocation.replace('/', ''));
      if (isNaN(page)) return;
      this.props.paginationAction(page);
    }
  }
  render() {
    console.log('pagination render', this.props);
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
  pagination: React.PropTypes.any,
}
export default Pagination;
