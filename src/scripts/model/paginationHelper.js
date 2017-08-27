import { createSelector } from 'reselect';

class PaginationHelper {
  constructor() {
    this.maxPages = 5;
  }
  mountGroups(totalItens) {
    let count = 0;
    let groups = [];
    const total = this.getTotalPages(totalItens, this.maxPages);
    let pages = 0;

    for (let i = 0; i < total; i++) {
      groups.push([]);

      pages = this.maxPages;

      if (totalItens < this.maxPages) {
        pages = totalItens;
      } else if (i === Math.floor(total)) {
        pages = totalItens % count;
      }

      for (let j = 0; j < pages; j++) {
        groups[i].push(count);
        count++;
      }
    }
    return groups;
  }
  getCurrentGroup(groups, currentPage) {
    return groups[currentPage] || [];
  }
  groupPages(currentPage = 1) {
    let start = Number(currentPage) / this.maxPages;
    return Math.floor(start);
  }
  getPages(pagination) {
    const pages = this.getCurrentGroup(
      this.mountGroups(pagination.total),
      this.groupPages(pagination.current - 1)
    );
    return pages <= 1 ? [] : pages;
  }
  getTotalPages(totalItens, maxPages) {
    return totalItens / maxPages;
  }
  hasNext(pagination) {
    return (
      pagination.total > 1 &&
      (pagination.total > 1 && pagination.current < pagination.total)
    );
  }
  hasPrev(pagination) {
    return pagination.total > 0 && pagination.current > 1;
  }
  getPrev(pagination) {
    if (this.hasPrev(pagination)) {
      return pagination.current--;
    }
  }
  getNext(pagination) {
    if (this.hasNext(pagination)) {
      return pagination.current++;
    }
  }
}

export default PaginationHelper;
