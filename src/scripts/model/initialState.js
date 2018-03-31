const defaultStore = {
  fetching: false,
  pagination: { current: 1, total: 0, pages: [], next: false, prev: false },
  filter: 'comics',
  search: '',
  started: false,
  error: { code: '' },
  menuOpen: false,
  data: []
};

export default defaultStore;
