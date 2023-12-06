<script>
export default {
    emits: ['buttonClicked'],
    props: {
        text: String,
        isOutline: Boolean
    },
    methods: {
        clicked(event) {
            event.preventDefault();
            this.$emit('buttonClicked');
        }
    }
}
</script>

<template>

<a @click="clicked" :class="isOutline ? 'outline' : ''" href="">{{ text }}</a>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
a {
    text-align: center;
    color: inherit;
    text-transform: uppercase;
    background-color: $primary_bg_color;
    display: block;
    border: none;
    border-radius: 5px;
    padding: .5rem 1.5rem;
    font-size: inherit;
    font-weight: inherit;
    width: fit-content;

    &.outline {
        background-color: transparent;
        border: 1px solid $primary_bg_color;
    }
    &:hover {
        background-color: $primary_bg_color;
        filter: brightness(110%);
    }
}
</style>