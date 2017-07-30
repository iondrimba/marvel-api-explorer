const defaultStore = {
  fetching: false,
  pagination: { current: 0, total: 0, pages: [], next: false, prev: false },
  filter: 'Characters',
  search: 'spi',
  error: '',
  data: []
};

export default defaultStore;
