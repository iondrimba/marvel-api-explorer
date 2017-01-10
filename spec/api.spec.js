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

    it('Api.getCharacters - should retrive character requests', (done) => {
        api.getCharacters().then((response) => {
            expect(response.data.code).toBe(200);
            done();
        });
    });

    it('Api.getCharacters - should retrive character requests with parameters', (done) => {
        api.getCharacters({ limit: 5 }).then((response) => {
            expect(response.data.code).toBe(200);
            expect(response.data.data.limit).toBe(5);
            done();
        });
    });

    it('Api.getCharacters - should retrive character by name', (done) => {
        api.getCharacters({ limit: 5, name: 'spider-man' }).then((response) => {
            expect(response.data.code).toBe(200);
            expect(response.data.results[0].name.toLowerCase()).toBe('spider-man');
            done();
        }).catch((error) => {
            done();
        });
    });

    it('Api.appendParameters -  should append options to request url', () => {
        let options = {
            limit: 10,
            offset: 5
        };
        let result = api.appendParameters(api.characterUrl, options);
        expect(result).toBe(`${api.characterUrl}?apikey=${api.publicKey}&limit=10&offset=5`);
    });

    it('Api.formatUrlWithId -  should append id to request url', () => {
        let id = 125;
        let options = {
            limit: 10,
            offset: 5
        };
        let result = api.formatUrlWithId(api.characterUrl, id);
        expect(result).toBe(`${api.characterUrl}/${id}`);
    });

    it('Api.getCharacterById -  should retrive character by Id', (done) => {
        let id = 1009610;
        api.getCharacterById(id, { limit: 5 }).then((response) => {
            expect(response.data.code).toBe(200);
            expect(response.data.results[0].name.toLowerCase()).toBe('spider-man');
        }).catch((error) => {
            done();
        })
    });

    it('Api.getCharacterById -  should retrive code 409', (done) => {
        let id = 1009610;
        api.getCharacterById(id, { limit: 0 }).then((response) => {
            expect(response.data.code).toBe(409);
            done();
        });
    });

    it('Api.getCharacterById -  should retrive error', (done) => {
        let id = 1009610;
        api.version = 'v2';
        api.getCharacterById(id, { limit: 0 }).then((response) => {
            expect(error.stack).toBeDefined();
            done();
        }).catch((error) => {
            expect(error.stack).toBeDefined();
            done();
        });
    });

    it('Api.getCharacters -  should retrive error', (done) => {
        let id = 1009610;
        api.version = 'v2';
        api.getCharacters({ limit: 0 }).then((response) => {
            expect(error.stack).toBeDefined();
            done();
        }).catch((error) => {
            expect(error.stack).toBeDefined();
            done();
        });
    });

});
