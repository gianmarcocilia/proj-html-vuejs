<script>
export default {
    data() {
        return {

        }
    },
}
</script>

<template>
    <div class="card p-5 mt-5 col-4">
        <h3>President Speech</h3>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, tempore cupiditate. Cum,
            ratione expedita.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, eius eum! Ratione iste optio
            perferendis officia ut laudantium quibusdam quia voluptates adipisci porro quis exercitationem
            repellendus sapiente, tempora velit nisi.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, ipsam repellendus adipisci.</p>

        <h5 class="d-flex justify-content-between mt-5">T. Johnson <span><i class="fa-solid fa-quote-right"></i></span></h5>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/_variables" as *;
.card {
        background-color: $primary_bg_color;
        color: $info_color;
        h3 {
            color: white;
        }
        span {
            color: $header_bg_color;
        }
    }
</style>