import Api from '../src/scripts/model/api';
import axios from 'axios';

describe('API tests', () => {

    const API_KEY = window.__karma__.config.jasmine.API_KEY;

    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

    let api = {};

    beforeEach(function () {
        api = new Api(API_KEY);
    });

    afterEach(function () {
        api = null;
    });

    it('Api.getCharacters - should retrive character requests', () => {
        return api.getCharacters({ page:1, orderBy: 'name', nameStartsWith: 'spi'}).then((response) => {
            expect(response.data.code).toBe(200);
        });
    });

    it('Api.getCharacters - should retrive character with offset 15', () => {
        return api.getCharacters({ page: 2, orderBy: 'name', nameStartsWith: 'spi' }).then((response) => {
            expect(response.data.code).toBe(200);
            expect(response.data.data.offset).toBe(15);
        });
    });

    it('Api.getCharacters - should retrive character by name that starts with spi', () => {
        return api.getCharacters({ page: 1, orderBy: 'name', nameStartsWith: 'spi' }).then((response) => {
            expect(response.data.code).toBe(200);
            expect(response.data.data.results[0].name.toLowerCase()).toBe('spider-dok');
        });
    });

    it('Api.appendParameters - should append options to request url', () => {
        let result = api.appendParameters(api.characterUrl, { page: 1, orderBy: 'name', nameStartsWith: 'spi' });
        expect(result).toBe(`${api.characterUrl}?apikey=${api.publicKey}&nameStartsWith=spi&orderBy=name&limit=15&offset=0`);
    });

    it('Api.getCharacters - should retrive error', () => {
        let id = 1009610;
        api.version = 'v2';
        return api.getCharacters({ page: 1, orderBy: 'name', nameStartsWith: 'spi' }).catch((error) => {
            expect(error.stack).toBeDefined();
        });
    });

});
