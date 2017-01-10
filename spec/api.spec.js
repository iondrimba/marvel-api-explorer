import Api from '../src/scripts/model/api';

describe('API tests', () => {

    const API_KEY = window.__karma__.config.jasmine.API_KEY;

    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

    it('Api.getCharacters - should retrive character requests', (done) => {
        let api = new Api(API_KEY);
        let p = api.getCharacters().then((response) => {
            expect(response.data.code).toBe(200);
            done();
        }).catch((error) => {
            done();
        });
    });

    it('Api.getCharacters - should retrive character requests with parameters', (done) => {
        let api = new Api(API_KEY);
        let p = api.getCharacters({ limit: 5 }).then((response) => {
            expect(response.data.code).toBe(200);
            expect(response.data.data.limit).toBe(5);
            done();
        }).catch((error) => {
            done();
        });
    });

    it('Api.getCharacters - should retrive character by name', (done) => {
        let api = new Api(API_KEY);
        let p = api.getCharacters({ limit: 5, name: 'spider-man' }).then((response) => {
            expect(response.data.code).toBe(200);
            expect(response.data.results[0].name.toLowerCase()).toBe('spider-man');
            expect(response.data.results.length).toBe(response.data.count);
            done();
        }).catch((error) => {
            done();
        });
    });

    it('Api.appendParameters -  should append options to request url', () => {
        let api = new Api(API_KEY);
        let options = {
            limit: 10,
            offset: 5
        };
        let result = api.appendParameters(api.characterUrl, options);
        expect(result).toBe(`${api.characterUrl}?apikey=${api.publicKey}&limit=10&offset=5`);
    });

    it('Api.formatUrlWithId -  should append id to request url', () => {
        let api = new Api(API_KEY);
        let id = 125;
        let options = {
            limit: 10,
            offset: 5
        };
        let result = api.formatUrlWithId(api.characterUrl, id);
        expect(result).toBe(`${api.characterUrl}/${id}`);
    });

    it('Api.getCharacterById -  should retrive character by Id', () => {
        let api = new Api(API_KEY);
        let id = 1009610;
        let p = api.getCharacterById(id, { limit: 5, name: 'spider-man' }).then((response) => {
            expect(response.data.code).toBe(200);
            expect(response.data.results[0].name.toLowerCase()).toBe('spider-man');
            expect(response.data.results.length).toBe(response.data.count);
            done();
        }).catch((error) => {
            done();
        })
    });

});
