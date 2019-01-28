<script>
export default {
    props: {
        titles: {
            type: Array,
            required: true,
        },
    },
};
</script>

<template lang="pug">
.list-head
    .title(v-for="title in titles")
        | {{ title }}
</template>

<style lang="scss" scoped>
.list-head {
    display: table;
    table-layout: fixed;
    width: 100%;
}
.title {
    display: table-cell;
    padding: 10px 0;
    font-family: sans-serif;
    font-size: 15px;
    font-weight: bold;
    line-height: 18px;
    box-sizing: border-box;
    color: #5f6368;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    vertical-align: middle;
    white-space: nowrap;
}
</style>
