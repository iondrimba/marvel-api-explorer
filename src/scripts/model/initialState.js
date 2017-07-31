const defaultStore = {
  fetching: false,
  pagination: { current: 0, total: 0, pages: [], next: false, prev: false },
  filter: 'characters',
  search: '',
  error: '',
  data: []
};

export default defaultStore;
