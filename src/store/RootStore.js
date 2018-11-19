import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import get from 'lodash/get';

import config from '../config';
import ContactsService from '../services/Contacts';
import ContactsStore from './ContactsStore';

Vue.use(Vuex);

const contactsService = new ContactsService(axios, {
    host: get(config, 'api.host'),
    contacts: get(config, 'api.contacts'),
    apiKey: get(config, 'api.key'),
});

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {
        async initState({ dispatch }) {
            await dispatch('Contacts/initState');
        },
    },
    modules: {
        Contacts: ContactsStore(contactsService),
    },
});
