<script>
import { store } from './store';

export default {
  data() {
    return {
      store,
    }
  }
}
</script>

<template>
<h1>New project</h1>
<span><i class="fa-solid fa-check"></i></span>
</template>

<style lang="scss">
@use './style/general.scss';
@import '@fortawesome/fontawesome-free/css/all.css';

</style>
