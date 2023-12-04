<script>
import SectionVideo from './SectionVideo.vue';
import { store } from '../store';

export default {
    data() {
        return {
            store,
        };
    },
    components: { SectionVideo }
}
</script>

<template>
    <!-- Video Section -->
    <SectionVideo :details="store.mainSection[0]"/>
</template>

<style lang="scss" scoped></style>