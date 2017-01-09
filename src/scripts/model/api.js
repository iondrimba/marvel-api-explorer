import Howler from 'howler';
import apiKeys from '../../../api.keys';
import axios from 'axios';

console.log('API', apiKeys);

class Api {
    constructor() {
        this.baseUrl = apiKeys.baseUrl;
        this.publicKey = apiKeys.publicKey;
        this.version = apiKeys.version;
        this.limit = 0;
        this.offset = 0;

        this.request = axios.create({
            baseURL: `${this.baseUrl}${this.version}/public/`,
            timeout: 10000,
            responseType: 'json'
        });

        this.characterUrl = '/characters';
    }
    appendParameters(url) {
        return `${url}?apikey=${this.publicKey}&limit=${this.limit}&offset=${this.offset}`;
    }
    getCharacters() {
        this.request.get(this.appendParameters(this.characterUrl))
            .then(function (response) {
                console.table(response);
                console.table(response.data);
            });
    }
}

export default Api;
