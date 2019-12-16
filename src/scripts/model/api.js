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
  }

  appendParameters(url, options) {
    let { page, orderBy, titleStartsWith, nameStartsWith } = options;
    let fetchUrl = `${url}?apikey=${this.publicKey}`;

    this.options.offset = 0;

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

  get(options) {
    return this.instance.get(this.appendParameters(options.url, options));
  }
}

export default Api;
