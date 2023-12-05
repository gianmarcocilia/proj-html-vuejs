<script>
import AppButton from './AppButton.vue';
export default {
    data() {
        return {

        }
    },
    components: { AppButton }
}

</script>

<template>
    <div class="container">
        <div class="my-form">
            <label for="name">Name</label>
            <input id="name" class="form-control" type="text" placeholder="Name">
            <label for="email">Email</label>
            <input id="email" class="form-control" type="text" placeholder="Email">
            <AppButton :isOutline="false" text="subscribe" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/_variables" as *;

.my-form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: baseline;
    color: $white_color;
    label {
        display: none;
    }
    
    input {
        background-color: $input_bg_color;
        color: $info_color;
        border: none;
        padding: 1em;
    }
}
</style>