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

        span.list-item__name
            | {{ contact.name }}

    .list-item__col
        span.list-item__email
            | {{ contact.email }}

    .list-item__col
        span.list-item__phone
            | {{ contact.phone }}

    .list-item__col
        .list-item__favorite
            | {{ contact.favorite }}

</template>

<style lang="scss" scoped>
.list-item {
    display: table;
    width: 100%;
    table-layout: fixed;
    padding: 10px 0;
    font-size: 15px;
    color: #000;

    &:hover {
        background-color: #f5f5f5;
    }

    &__col {
        display: table-cell;
        vertical-align: middle;
        text-align: left;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    &__avatar {
        display: inline-block;
        vertical-align: middle;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #333;
        overflow: hidden;
    }

    &__name {
        display: inline-block;
        vertical-align: middle;
        margin-left: 24px;
    }
}
</style>
