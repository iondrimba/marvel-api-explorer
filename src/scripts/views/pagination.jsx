import React from 'react';
import { NavLink } from 'react-router-dom';
import { BrowserHistory } from 'react-router';

class Pagination extends React.Component {
  constructor(props) {
    super(props);
  }
  hasQueryString(search) {
    if (search) {
      return search;
    } else {
      return '';
    }
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate', prevProps, prevState, this.props);
  }

  onClick(evt) {
    evt.preventDefault();
    this.props.paginationAction(evt.currentTarget.attributes.href.value, this.props);
  }
  getStyle(props, page) {
    return Number(props.pagination.current) === page? 'link link--active': 'link';
  }
  render() {
    let next = '';
    let prev = '';

    if (this.props.pagination.next) {
      next = <a className='link' onClick={this.onClick.bind(this)} href={ `/${this.props.filter}/${Number(this.props.pagination.current) + 1}${this.hasQueryString(this.props.search)}`} key={'next'} >
        <span className='next'></span>
      </a>
    }
    if (this.props.pagination.prev) {
      prev = <a className='link' onClick={this.onClick.bind(this)} href={ `/${this.props.filter}/${Number(this.props.pagination.current) - 1}${this.hasQueryString(this.props.search)}`} key={'prev'} >
        <span className='prev'></span>
      </a>
    }

    return (
      <div className='pagination'>
        <div className='pagination__content'>
     {prev}
        {
          this.props.pagination.pages.map((data, index) => {
            return <a className={ this.getStyle(this.props, data + 1) } onClick={this.onClick.bind(this)} href={`/${this.props.filter}/${data + 1}${this.hasQueryString(this.props.search)}`} key={data + 1} >
              <span>{data + 1}</span>
            </a>
          })
        }
        {next}
        </div>
      </div>
    );
  }
}
Pagination.propTypes = {
  filter: React.PropTypes.string,
  pagination: React.PropTypes.object,
  search: React.PropTypes.string,
  paginationAction: React.PropTypes.func
}
export default Pagination;
