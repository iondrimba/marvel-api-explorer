import Api from '../src/scripts/model/api';

describe('API tests', () => {

  const API_KEY = process.env.API_KEY;

  let api = {};

  beforeEach(() => {
    api = new Api(API_KEY);
  });

  afterEach(() => {
    api = null;
  });

  it('Api.getCharacters - should retrive character requests', () => {
    api.get({ page: 1, orderBy: 'name', nameStartsWith: 'spi', url: '/characters' }).then((response) => {
      expect(response.data.code).toBe(200);
    });
  });

  it('Api.getCharacters - should retrive character with offset 15', () => {
    api.get({ page: 2, orderBy: 'name', nameStartsWith: 'spi', url: '/characters' }).then((response) => {
      expect(response.data.code).toBe(200);
      expect(response.data.data.offset).toBe(15);
    });
  });

  it('Api.getCharacters - should retrive character by name that starts with spi', () => {
    api.get({ page: 1, orderBy: 'name', nameStartsWith: 'spi', url: '/characters' }).then((response) => {
      expect(response.data.code).toBe(200);
      expect(response.data.data.results[0].name.toLowerCase()).toBe('spider-dok');
    });
  });

  it('Api.appendParameters - should append options to request url', () => {
    let result = api.appendParameters('/characters', { page: 1, orderBy: 'name', nameStartsWith: 'spi'});

    expect(result).toBe(`/characters?apikey=${api.publicKey}&nameStartsWith=spi&orderBy=name&limit=15&offset=0`);
  });

  it('Api.getCharacters - should retrive error', () => {
    api.version = 'v2';

    api.get({ page: 1, orderBy: 'name', nameStartsWith: 'spi', url: '/characters' }).catch((error) => {
      expect(error.stack).toBeDefined();
    });
  });
});
