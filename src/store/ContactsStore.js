export default function ContactsStore(contactsService) {
    return {
        namespaced: true,

        state: {
            contacts: [],

            errorMessage: '',
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
        },

        actions: {
            async initState({ dispatch }) {
                console.error('CONTACTS INIT STATE');

                await dispatch('fetchContacts');
            },

            async fetchContacts({ commit }) {
                console.error('FETCH CONTACTS');

                try {
                    const result = await contactsService.getContacts();

                    console.warn(result);

                    const { status, data } = result;

                    if (status === 200 && data.length) {
                        commit('contacts', data);
                        commit('errorMessage', '');
                    }
                } catch (error) {
                    commit('errorMessage', 'Не удалось получить список контактов');
                }
            },
        },
    };
}
