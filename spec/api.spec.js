import Api from '../src/scripts/model/api';
import axios from 'axios';

describe('API tests', () => {

    const API_KEY = window.__karma__.config.jasmine.API_KEY;

    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

    //let api = {};

    // beforeEach(function () {
    //     api = new Api(API_KEY);
    //     console.log('before', api.request.defaults.baseURL);
    // });

    // afterEach(function () {
    //     api = null;
    // });

    // it('Api.getCharacters - should retrive character requests', () => {
    //     return api.getCharacters().then((response) => {
    //         expect(response.data.code).toBe(200);
    //     });
    // });

    // it('Api.getCharacters - should retrive character requests with parameters', () => {
    //     return api.getCharacters({ limit: 5 }).then((response) => {
    //         expect(response.data.code).toBe(200);
    //         expect(response.data.data.limit).toBe(5);
    //     });
    // });

    // it('Api.getCharacters - should retrive character by name', () => {
    //     return api.getCharacters({ limit: 5, name: 'spider-man' }).then((response) => {
    //         expect(response.data.code).toBe(200);
    //         expect(response.data.data.results[0].name.toLowerCase()).toBe('spider-man');
    //     });
    // });

    // it('Api.appendParameters - should append options to request url', () => {
    //     let options = {
    //         limit: 10,
    //         offset: 5
    //     };
    //     let result = api.appendParameters(api.characterUrl, options);
    //     expect(result).toBe(`${api.characterUrl}?apikey=${api.publicKey}&limit=10&offset=5`);
    // });

    // it('Api.formatUrlWithId - should append id to request url', () => {
    //     let id = 125;
    //     let options = {
    //         limit: 10,
    //         offset: 5
    //     };
    //     let result = api.formatUrlWithId(api.characterUrl, id);
    //     expect(result).toBe(`${api.characterUrl}/${id}`);
    // });

    // it('Api.getCharacterById - should retrive character by Id', () => {
    //     let id = 1009610;
    //     return api.getCharacterById(id, { limit: 5 }).then((response) => {
    //         expect(response.data.code).toBe(200);
    //         expect(response.data.data.results[0].name.toLowerCase()).toBe('spider-man');
    //     });
    // });

    // it('Api.getCharacterById - should retrive code 409', () => {
    //     let id = 1009610;
    //     return api.getCharacterById(id, { limit: 0 }).catch((error) => {
    //         expect(error.data.code).toBe(409);
    //     });
    // });

    it('Api.getCharacterById - should retrive error', () => {
        let id = 1;
        let api = new Api(API_KEY);
        api.instance.defaults.baseURL = 'http:/aaa/';
        return api.getCharacterById(id).catch((error) => {
            console.log(error);
            expect(error.stack).toBeDefined();
        });
    });

    // it('Api.getCharacters - should retrive error', () => {
    //     let id = 1009610;
    //     api.version = 'v2';
    //     return api.getCharacters({ limit: 0 }).catch((error) => {
    //         expect(error.stack).toBeDefined();
    //     });
    // });

});
