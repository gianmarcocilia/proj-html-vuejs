<script>
export default {

}
</script>

<template>

    <h3><span>nex</span>gen</h3>

</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
h3 {
    color: $info_color;
    text-transform: uppercase;
    letter-spacing: .2em;
    font-weight: 700;
    font-size: 20px;
    span {
        display: inline-block;
        color: #059c9c;
        background-color: #05838328;
        padding: .8rem 0 .8rem 2rem;
        border-top-left-radius: 40px;
        border-bottom-left-radius: 40px;
        margin-right: 3px;
    }
}
</style>