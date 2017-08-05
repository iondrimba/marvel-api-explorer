const defaultStore = {
  fetching: false,
  pagination: { current: 0, total: 0, pages: [], next: false, prev: false },
  filter: 'characters',
  search: '',
  error: '',
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
