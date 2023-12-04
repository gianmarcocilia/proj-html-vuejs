<script>
import AppButton from './AppButton.vue';

export default {
    props: {
        title: String,
        mail: String,
        phone: String,
    },
    data() {
        return {
            headerNav: ['home', 'about', 'services', 'team', 'blog'],
            bgImg: [
                {
                    img: 'bg-1'
                },
                {
                    img: 'bg-2'
                },
                {
                    img: 'bg-3'
                }
            ],
            bgImgActive: 1,
        };
    },
    methods: {
        getImagePath(imgName) {
            return new URL(`../assets/img/${imgName}.jpg`, import.meta.url).href;
        }
    },
    components: { AppButton }
}
</script>

<template>
    <header>
        <div class="header-info">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <p><i class="fa-solid fa-clock"></i> Open Hours: Mon - Sat - 9:00 - 18:00</p>
                    </div>
                    <div class="col">
                        <ul>
                            <li>{{ phone }}</li>
                            <li>{{ mail }}</li>
                            <li><a href=""><i class="fa-brands fa-facebook-f"></i></a></li>
                            <li><a href=""><i class="fa-brands fa-twitter"></i></a></li>
                            <li><a href=""><i class="fa-brands fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="hero" :style="{ 'background-image': 'url(' + getImagePath(bgImg[bgImgActive].img) + ')' }">
            <div class="over-img">


                <div class="container">
                    <nav>
                        <h3>Logo</h3>
                        <ul>
                            <li v-for="link in headerNav"><a href="">{{ link }}</a></li>
                            <li><a href=""><i class="fa-regular fa-user"></i></a></li>
                            <li><AppButton text="get in touch" :isOutline="false"/></li>
                        </ul>
                    </nav>
                    <h1>{{ title }}</h1>
                </div>
            </div>
        </div>

    </header>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixins" as *;
@use "../style/partials/_variables" as *;

header {
    .header-info {
        color: $info_color;
        background-color: $header_bg_color;
        padding: 1rem 0;

        .row {
            @include flex(row, space-between, center);

            ul {
                @include flex(row, space-between, center);
                gap: 1.5rem;
            }
        }
    }

    .hero {
        color: $white_color;
        height: $hero_heigth;
        
        .over-img {
            background-color: rgba(0, 0, 0, 0.3);
            height: 100%;
        }

        nav {
            padding: 1.5rem 0;
            @include flex(row, space-between, center);

            ul {
                @include flex(row, space-between, center);
                gap: 2rem;
                text-transform: uppercase;
            }
        }
    }
}</style>