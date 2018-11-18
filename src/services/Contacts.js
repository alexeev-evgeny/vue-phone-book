import qs from 'qs';

/**
 * Сервис работы с контактами
 * @class ContactsService
 */
export default class ContactsService {
    /**
     * Конструктор
     * @param {Axios} restApiClient
     * @param {Object} config
     */
    constructor(restApiClient, { host, contacts, apiKey }) {
        this._config = {
            host,
            contacts,
        };
        this._restApiClient = restApiClient;
        this._apiKey = apiKey;
    }

    getContacts() {
        const query = qs.stringify({
            apikey: this._apiKey,
        });
        const url = `${this._config.host}${this._config.contacts}?${query}`;
        return this._restApiClient.get(url);
    }
}
