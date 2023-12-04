<script>
import AppHeader from './components/AppHeader.vue';
import { store } from './store';

export default {
    data() {
        return {
            store,
        };
    },
    components: { AppHeader }
}
</script>

<template>
<AppHeader title="Financial Risk" :mail="store.mailContact" :phone="store.phoneContact"/>
</template>

<style lang="scss">
@use './style/general.scss';
@import '@fortawesome/fontawesome-free/css/all.css';

</style>
