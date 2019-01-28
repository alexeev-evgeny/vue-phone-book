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
            headTitles: ['Name', 'Email', 'Phone', ''],
        };
    },
};
</script>

<template lang="pug">
.list
    ListHead(:titles="headTitles")

    ListItem(
        v-for="contact in contacts",
        :key="contact.id",
        :contact="contact"
    )

</template>

<style lang="scss" scoped>
.list {
    display: block;
}
</style>
