// import sortBy from 'lodash/sortBy';

export default function ContactsStore(contactsService) {
    return {
        namespaced: true,

        state: {
            /** Контакты */
            contacts: [],

            /** Сообщение об ошибке */
            errorMessage: '',

            /** Видимость прелоадера */
            isPreloaderVisible: false,
        },

        mutations: {
            contacts(state, value) {
                if (!Array.isArray(value)) {
                    console.error('contacts должен иметь тип array');
                    return;
                }
                state.contacts = value;
            },

            errorMessage(state, value) {
                state.errorMessage = value;
            },

            isPreloaderVisible(state, value) {
                if (typeof value !== 'boolean') {
                    console.error('isPreloaderVisible должен иметь тип boolean');
                    return;
                }
                state.isPreloaderVisible = value;
            },
        },

        actions: {
            async initState({ dispatch }) {
                await dispatch('fetchContacts');
            },

            async fetchContacts({ commit }) {
                try {
                    commit('isPreloaderVisible', true);
                    const { status, data = [] } = await contactsService.getContacts();

                    console.warn('CONTACTS', data);

                    if (status === 200 && data.length) {
                        commit('contacts', data);
                        commit('errorMessage', '');
                    }
                    commit('isPreloaderVisible', false);
                } catch (error) {
                    commit('errorMessage', 'Не удалось получить список контактов');
                }
            },
        },
    };
}
