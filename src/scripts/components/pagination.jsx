import React from 'react';
import PaginationLink from './pagination-link';
import PropTypes from 'prop-types';

class Pagination extends React.Component {
  constructor(props) {
    super(props);
  }

  getQueryString(search) {
    return search ? `?search=${search}` : '';
  }

  onClick(evt) {
    evt.preventDefault();
    this.props.paginationAction(evt.currentTarget.attributes.href.value, this.props);
  }

  getUrl(page) {
    return `/${this.props.filter}/${page}${this.getQueryString(this.props.search)}`;
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

  _paginationLink(delta, label, key) {
    return <PaginationLink aria-label={label}
      className='pagination__link'
      onClick={this.onClick.bind(this)}
      href={this.getUrl(Number(this.props.pagination.current) + delta)}
      key={key}
      label={label}
      iconClassName={`pagination__${key}`} />;
  }

  render() {
    return (
      <div className='pagination'>
        <div className='pagination__content'>
          {this.props.pagination.prev? this._paginationLink(-1, 'previous', 'prev') : null}
          {
            this.props.pagination.pages.map((data, index) => {
              return <PaginationLink className={this.getStyle(this.props, data + 1)} onClick={this.onClick.bind(this)} href={this.getUrl(data + 1)} key={data + 1} iconClassName='' label={(data + 1).toString()} />
            })
          }
          {this.props.pagination.next? this._paginationLink(+1, 'next', 'next') : null}
        </div>
      </div>
    );
  }
}

Pagination.propTypes = {
  filter: PropTypes.string,
  pagination: PropTypes.object,
  search: PropTypes.string,
  paginationAction: PropTypes.func,
  paginationNextAction: PropTypes.func,
  paginationPrevAction: PropTypes.func
}

export default Pagination;
