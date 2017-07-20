import apiKeys from '../../../api.keys';
import axios from 'axios';

class Api {
  constructor(API_KEY) {
    this.publicKey = API_KEY;
    this.timeout = 10000;
    this.options = {
      limit: 15,
      offset: 0
    };

    this.instance = axios.create({
      baseURL: `${apiKeys.baseUrl}/${apiKeys.version}/${apiKeys.folder}/`,
      timeout: this.timeout
    });

    this.characterUrl = '/characters';
    this.comicsUrl = '/comics';
  }
  appendParameters(url, options) {
    var { page, orderBy } = options;
    if (page > 0) {
      page--;
      this.options.offset = page * this.options.limit;
    } else {
      this.options.offset = 0;
    }

    let result = `${url}?apikey=${this.publicKey}`;
    const mergedOptions = Object.assign({}, { orderBy }, this.options);
    for (let option in mergedOptions) {
      result += `&${option}=${mergedOptions[option]}`;
    }
    return result;
  }
  formatUrlWithId(url, id) {
    const result = `${url}/${id}`;
    return result;
  }
  getCharacters(options) {
    return this.instance.get(this.appendParameters(this.characterUrl, options))
      .then((resolve) => {
        return resolve;
      }, (reject) => {
        return reject.response;
      }).catch((error) => {
        return error;
      });
  }
  getComics(options) {
    return this.instance.get(this.appendParameters(this.comicsUrl, options))
      .then((resolve) => {
        console.log('resolve', resolve);
        return resolve;
      }, (reject) => {
        console.log('reject', reject);
        return reject.response;
      }).catch((error) => {
        console.log('error', error);
        return error;
      });
  }
  getCharacterById(id, options) {
    const url = this.appendParameters(this.formatUrlWithId(this.characterUrl, id), options);
    const startPromise = this.instance.get(url)
      .then((resolve) => {
        return resolve;
      }, (reject) => {
        return Promise.reject(reject.response);
      });

    const finalPromise = startPromise.catch((error) => {
      throw error;
    });

    return finalPromise.catch((error) => {
      throw error;
    });

  }
}

export default Api;
