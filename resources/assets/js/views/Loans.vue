<template>
    <base-layout>
        Закупки
    </base-layout>
</template>
<script>
    import { INIT_VIEW_ID } from '../store/index/action.types';
    import store from '../store/index';
    import BaseLayout from '../layouts/BaseLayout.vue';
    export default {
        store,
        components: { BaseLayout },
        data: () => ({
            id: 4,
        }),
        created() {
            this.$store.dispatch(INIT_VIEW_ID, this.id);
        },
    };
</script>
