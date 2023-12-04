<script>
export default {
    props: {
        details: Object,
    },
    data() {
        return {
            
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="row">
            <p class="name">{{ details.type }}</p>
            <h2>{{ details.title }} <span>{{ details.titleBg }}</span></h2>
            <p class="paragraph" v-if="details.paragraph">{{ details.paragraph }}</p>
        </div>
        <img src="../assets/img/video-1.jpg" alt="">
    </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixins" as *;
@use "../style/partials/_variables" as *;

.container {
    max-width: 50%;
    text-align: center;
    padding: 6rem 0;
    .row {

        width: 100%;
        @include flex(column, center, center);
        gap: 2rem;
        text-align: inherit;
    
        .name {
            color: $secondary_text_color;
            text-transform: uppercase;
            font-size: 14px;
            font-weight: 700;
        }
    
        h2 {
            color: $primary_text_color;
            font-size: 40px;
            font-weight: 900;
            span {
                padding: .3em;
                color: $secondary_text_color;
                background-color: #00a6a61e;
                border-radius: 5px;
            }
        }
    
        .paragraph {
            color: rgb(77, 77, 77);
            margin-bottom: 2.5rem;
        }
    }
    img {
        border-radius: 5px;
        display: block;
    }
}
</style>