import React from 'react';
import { NavLink } from 'react-router-dom';
import { BrowserHistory } from 'react-router';

class Pagination extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidUpdate(prevProps, prevState) {
    const totalPages = this.props.pagination.total;

    const page = this.props.match.params.page || 0;
    if (isNaN(page) === false && page && page !== prevProps.pagination.current) {
      this.props.paginationAction(page);
    }
  }

  render() {

    let next = '';
    let prev = '';

    if (this.props.pagination.next) {
      next = <NavLink strict className="link" to={{ pathname: `/${this.props.filter}/${Number(this.props.pagination.current) + 1}` }} key={'next'} >
        <span>next</span>
      </NavLink>
    }
    if (this.props.pagination.prev) {
      prev = <NavLink strict className="link" to={{ pathname: `/${this.props.filter}/${Number(this.props.pagination.current) - 1}` }} key={'prev'} >
        <span>prev</span>
      </NavLink>
    }

    return (
      <div>
        {prev}
        {
          this.props.pagination.pages.map((data, index) => {
            return <NavLink strict className="link" to={{
              pathname: `/${this.props.filter}/${data + 1}`
            }} key={data + 1} >
              <span>{data + 1}</span>
            </NavLink>
          })
        }
        {next}
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
