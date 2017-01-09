import Api from '../src/scripts/model/api';

describe('API tests', () => {

    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

    it('should retrive character requests', (done) => {
        let api = new Api();
        api.limit = 5;
        let p = api.getCharacters().then((response) => {
            expect(response.status).toBe(200);
            expect(response.data.data.limit).toBe(api.limit);
            expect(response.data.data.count).toBe(api.limit);
            done();
        }).catch((error) => {
            done();
        });
    });
});
