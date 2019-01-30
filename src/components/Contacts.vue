<script>
import { mapState, mapActions } from 'vuex';
import List from './List.vue';
import Preloader from './Preloader.vue';

export default {
    components: {
        List,
        Preloader,
    },

    async created() {
        await this.fetchContacts();
    },

    computed: {
        ...mapState('Contacts', ['contacts', 'isPreloaderVisible']),
    },

    methods: {
        ...mapActions('Contacts', ['fetchContacts', 'sortContactsByField']),
    },
};
</script>

<template lang="pug">
.contacts
    h2.title
        |  Contacts

    Preloader(v-if="isPreloaderVisible")

    List(
        :contacts="contacts"
        @sortContacts="sortContactsByField"
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
