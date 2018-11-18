<script>
import { mapState, mapActions } from 'vuex';

export default {
    async created() {
        await this.fetchContacts();

        console.error('CREATED', { contacts: this.contacts });
    },

    computed: {
        ...mapState('Contacts', ['contacts']),
    },

    methods: {
        ...mapActions('Contacts', ['fetchContacts']),
    },
};
</script>

<template lang="pug">
.contacts-list
    h2 Кококонтакты
    pre(v-for="contact in contacts")
        | {{ contact.name }}
        | {{ contact.email }}
        hr
</template>
