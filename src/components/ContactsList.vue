<script>
import ContactsListItem from './ContactsListItem.vue';

export default {
    props: {
        contacts: {
            type: Array,
            default() {
                return [];
            },
        },
    },

    components: {
        ContactsListItem,
    },
};
</script>

<template lang="pug">
.contacts-list
    ContactsListItem(
        v-for="contact in contacts",
        :key="contact.id",
        :contact="contact"
    )

</template>

<style lang="scss" scoped>
.contacts-list {
    display: block;
}
</style>
