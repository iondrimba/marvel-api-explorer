import Howler from 'howler';
import apiKeys from '../../../api.keys';
import axios from 'axios';

class Api {
    constructor(API_KEY) {
        this.baseUrl = apiKeys.baseUrl;
        this.publicKey = API_KEY;
        this.version = apiKeys.version;
        this.folder = apiKeys.folder;
        this.timeout = 10000;
        this.options = {
            limit: 15,
            offset: 5
        };

        this.request = axios.create({
            baseURL: `${this.baseUrl}/${this.version}/${this.folder}/`,
            timeout: this.timeout,
            responseType: 'json'
        });

        this.characterUrl = '/characters';
    }
    appendParameters(url, options) {
        let result = `${url}?apikey=${this.publicKey}`;
        if (!options) {
            options = this.options;
        }
        for (let option in options) {
            result += `&${option}=${options[option]}`;
        }
        return result;
    }
    formatUrlWithId(url, id) {
        let result = `${url}/${id}`;
        return result;
    }
    getCharacters(options) {
        return this.request.get(this.appendParameters(this.characterUrl, options))
            .then((resolve) => {
                return resolve;
            }, (reject) => {
                return reject.response;
            }).catch(function (error) {
                return error;
            });

    }
    getCharacterById(id, options) {
        var url = this.appendParameters(this.formatUrlWithId(this.characterUrl, id), options);
        return this.request.get(url)
            .then((resolve) => {
                return resolve;
            }, (reject) => {
                return reject.response;
            }).catch((error) => {
                return error;
            });

    }
}

export default Api;
