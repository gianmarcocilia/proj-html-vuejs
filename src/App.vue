<script>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import { store } from './store';

export default {
    data() {
        return {
            store,
        };
    },
    components: { AppHeader, AppMain, AppFooter }
}
</script>

<template>
<AppHeader title="Financial Risk" :mail="store.mailContact" :phone="store.phoneContact"/>
<AppMain />
<AppFooter :mail="store.mailContact" :phone="store.phoneContact" :address="store.addressContact"/>
</template>

<style lang="scss">
@use './style/general.scss';
@import '@fortawesome/fontawesome-free/css/all.css';

</style>
