import initialState from '../../src/scripts/model/initialState';

describe('initialState', () => {
  it('initial state should be an object', () => {
    expect(typeof initialState).toBe('object');
  })
});
