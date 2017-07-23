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
    let { page, orderBy, titleStartsWith, nameStartsWith } = options;
    let fetchUrl = `${url}?apikey=${this.publicKey}`;

    if (page > 0) {
      page--;
      this.options.offset = page * this.options.limit;
    }


    let mergedOptions = Object.assign({}, { orderBy }, this.options);

    mergedOptions = titleStartsWith ? Object.assign({}, { titleStartsWith }, mergedOptions) : mergedOptions;
    mergedOptions = nameStartsWith ? Object.assign({}, { nameStartsWith }, mergedOptions) : mergedOptions;

    for (let option in mergedOptions) {
      fetchUrl += `&${option}=${mergedOptions[option]}`;
    }

    return fetchUrl;
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
        return Promise.reject(reject);
      }).catch((error) => {
        throw error;
      });
  }
  getComics(options) {
    return this.instance.get(this.appendParameters(this.comicsUrl, options))
      .then((resolve) => {
        return resolve;
      }, (reject) => {
        return Promise.reject(reject);
      }).catch((error) => {
        throw error;
      });
  }
}

export default Api;
