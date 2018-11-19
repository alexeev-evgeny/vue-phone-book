<script>
export default {
    props: {
        contact: {
            type: Object,
            required: true,
        },
    },
};
</script>

<template lang="pug">
.list-item
    .list-item__col
        img.list-item__avatar(
            :src="contact.avatar"
            :alt="contact.name"
        )

    .list-item__col
        span.list-item__name
            | {{ contact.name }}

    .list-item__col
        span.list-item__email
            | {{ contact.name }}

    .list-item__col
        span.list-item__phone
            | {{ contact.phone }}

    .list-item__col
        .list-item__favorite
            | 
            | {{ contact.favorite }}
</template>

<style lang="scss" scoped>
.list-item {
    display: table;
    width: 100%;
    table-layout: fixed;
    padding: 10px 0;
    border-top: 1px solid #d6d6d6;

    &:first-child {
        border-top: none;
    }

    &__col {
        display: table-cell;
        vertical-align: middle;
        text-align: left;

        &:first-child {
            width: 60px;
        }
    }

    &__avatar {
        display: block;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #333;
        overflow: hidden;
    }

    &__favorite {
    }
}
</style>
