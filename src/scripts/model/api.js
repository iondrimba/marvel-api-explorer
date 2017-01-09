import Howler from 'howler';
import apiKeys from '../../../api.keys';
import axios from 'axios';

class Api {
    constructor() {
        this.baseUrl = apiKeys.baseUrl;
        this.publicKey = apiKeys.publicKey;
        this.version = apiKeys.version;
        this.limit = 0;
        this.offset = 0;
        this.timeout = 10000;

        this.request = axios.create({
            baseURL: `${this.baseUrl}${this.version}/public/`,
            timeout: this.timeout,
            responseType: 'json'
        });

        this.characterUrl = '/characters';
    }
    appendParameters(url) {
        return `${url}?apikey=${this.publicKey}&limit=${this.limit}&offset=${this.offset}`;
    }
    getCharacters() {
        return this.request.get(this.appendParameters(this.characterUrl))
            .then(function (response) {
                return response;
            }).catch(function (error) {
                return error;
            });

    }
}

export default Api;
