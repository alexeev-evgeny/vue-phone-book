<script>
import { mapState, mapActions } from 'vuex';
import ContactsList from './ContactsList.vue';
import Preloader from './Preloader.vue';

export default {
    components: {
        ContactsList,
        Preloader,
    },

    async created() {
        await this.fetchContacts();
    },

    computed: {
        ...mapState('Contacts', ['contacts', 'isPreloaderVisible']),
    },

    methods: {
        ...mapActions('Contacts', ['fetchContacts']),
    },
};
</script>

<template lang="pug">
.contacts
    h2.title
        |  Contacts

    Preloader(v-if="isPreloaderVisible")

    ContactsList(
        :contacts="contacts"
    )

    
</template>

<style lang="scss" scoped>
.contacts {
    display: block;
    max-width: 1024px;
    margin: 0 auto;
}

.title {
    font-size: 30px;
    line-height: 24px;
}
</style>
