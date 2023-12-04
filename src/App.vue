<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import { store } from './store';

export default {
    data() {
        return {
            store,
        };
    },
    components: { AppHeader, AppMain }
}
</script>

<template>
<AppHeader title="Financial Risk" :mail="store.mailContact" :phone="store.phoneContact"/>
<AppMain />
</template>

<style lang="scss">
@use './style/general.scss';
@import '@fortawesome/fontawesome-free/css/all.css';

</style>
