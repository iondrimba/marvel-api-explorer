import React from 'react';
import PaginationLink from './pagination-link';

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

  onClick(evt) {
    evt.preventDefault();
    this.props.paginationAction(evt.currentTarget.attributes.href.value, this.props);
  }
  getUrl(page) {
    return `/${this.props.filter}/${page}${this.hasQueryString(this.props.search)}`;
  }
  getStyle(props, page) {
    return Number(props.pagination.current) === page ? 'pagination__link pagination__link--active' : 'pagination__link';
  }
  previous() {
    this.props.paginationPrevAction(this.props);
  }
  next() {
    this.props.paginationNextAction(this.props);
  }
  render() {
    let next = null;
    let prev = null;

    if (this.props.pagination.next) {
       next = <PaginationLink className='pagination__link' onClick={this.onClick.bind(this)} href={this.getUrl(Number(this.props.pagination.current) + 1)} key={'next'} iconClassName={'pagination__next'}/>;
    }

    if (this.props.pagination.prev) {
      prev =  <PaginationLink className='pagination__link' onClick={this.onClick.bind(this)} href={this.getUrl(Number(this.props.pagination.current) - 1)} key={'prev'} iconClassName={'pagination__prev'}/>;
    }

    return (
      <div className='pagination'>
        <div className='pagination__content'>
          {prev}
          {
            this.props.pagination.pages.map((data, index) => {
              return <PaginationLink className={this.getStyle(this.props, data + 1)} onClick={this.onClick.bind(this)} href={this.getUrl(data + 1)} key={data + 1} iconClassName='' label={(data + 1).toString()}/>
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
  paginationAction: React.PropTypes.func,
  paginationNextAction: React.PropTypes.func,
  paginationPrevAction: React.PropTypes.func
}
export default Pagination;
