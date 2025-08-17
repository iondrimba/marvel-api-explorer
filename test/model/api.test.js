import axios from 'axios';
import Api from '../../src/scripts/model/api';

jest.mock('axios');

axios.create.mockImplementationOnce(() => axios);

describe('API tests', () => {

  const PUBLIC_API_KEY = process.env.PUBLIC_API_KEY || '######';
  const api = new Api(PUBLIC_API_KEY, '######');

  it('Api.getCharacters - should retrive character requests', async () => {
    const data = {
      response: {
        data: {
          code: 200
        }
      }
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(data));

    await expect(api.get({ page: 1, orderBy: 'name', nameStartsWith: 'spi', url: '/characters' }))
      .resolves
      .toEqual(data);
  });

  it('Api.getCharacters - should retrive character with offset 15', async () => {
    const data = {
      response: {
        data: {
          code: 200,
          data: {
            offset: 15
          }
        }
      }
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(data));

    await expect(api.get({ page: 2, orderBy: 'name', nameStartsWith: 'spi', url: '/characters' }))
      .resolves
      .toEqual(data);
  });

  it('Api.getCharacters - should retrive character by name that starts with spi', async () => {
    const data = {
      response: {
        data: {
          code: 200,
          data: {
            results: [
              { name: 'spider-dok' }
            ]
          }
        }
      }
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(data));

    await expect(api.get({ page: 1, orderBy: 'name', nameStartsWith: 'spi', url: '/characters' }))
      .resolves
      .toEqual(data);
  });

  it('Api.appendParameters - should append options to request url', () => {
    let result = api.appendParameters('/characters', { page: 1, orderBy: 'name', nameStartsWith: 'spi' });

    expect(result).toBe(`/characters?ts=1&apikey=######&hash=######&nameStartsWith=spi&orderBy=name&limit=15&offset=0`);
  });

  it('Api.getCharacters - should retrive error', async () => {
    const error = {
      stack: ''
    };

    axios.get.mockImplementationOnce(() => Promise.reject(error));

    api.version = 'v2';

    await expect(api.get({ page: 1, orderBy: 'name', nameStartsWith: 'spi', url: '/characters' }))
      .rejects
      .toEqual(error);
  });
});
