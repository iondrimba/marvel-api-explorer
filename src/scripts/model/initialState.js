const defaultStore = {
  fetching: false,
  pagination: { current: 1, total: 0, pages: [], next: false, prev: false },
  filter: 'comics',
  search: '',
  error: {code:''},
  router: {
    pathname: '/',
    search: '',
    hash: '',
    location: {
      pathname: '/',
      search: '',
      hash: ''
    }
  },
  data: []
};

export default defaultStore;
