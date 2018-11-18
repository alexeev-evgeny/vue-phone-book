import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import ContactsService from '../services/Contacts';
import ContactsStore from './ContactsStore';

Vue.use(Vuex);

const contactsService = new ContactsService(axios, {
    host: 'https://phonebook-c9b5.restdb.io',
    contacts: '/rest/contacts',
    apiKey: '576e6162b9d4b50b4dc9d916',
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
