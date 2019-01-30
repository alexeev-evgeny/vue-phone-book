<script>
import ListItem from './ListItem.vue';
import ListHead from './ListHead.vue';

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
        ListHead,
        ListItem,
    },

    data() {
        return {
            headTitles: [
                { title: 'Name', name: 'name' },
                { title: 'Email', name: 'email' },
                { title: 'Phone', name: 'phone' },
            ],
        };
    },

    methods: {
        emitSortContacts(fieldName) {
            this.$emit('sortContacts', fieldName);
        },
    },
};
</script>

<template lang="pug">
.list
    .list__head
        ListHead(
            :titles="headTitles",
            @sort="emitSortContacts"
        )

    .list__body
        ListItem(
            v-for="contact in contacts",
            :key="contact.id",
            :contact="contact"
        )

</template>

<style lang="scss" scoped>
.list {
    display: block;

    &__head {
        margin-bottom: 10px;
        border-bottom: 1px solid #d9d9d9;
    }

    &__body {
    }
}
</style>
