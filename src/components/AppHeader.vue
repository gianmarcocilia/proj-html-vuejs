<script>
import AppButton from './AppButton.vue';
import AppLogo from './AppLogo.vue';

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
    components: { AppButton, AppLogo }
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
                        <AppLogo />
                        <ul>
                            <li v-for="link in headerNav"><a href="">{{ link }}</a></li>
                            <li><a href=""><i class="fa-regular fa-user"></i></a></li>
                            <li><AppButton text="get in touch" :isOutline="false"/></li>
                        </ul>
                    </nav>
                    <div class="content">
                        <h1>{{ title }}</h1>
                        <p>The rigth outcomes depend on continuous rigor in governance, models, and processes across the finance function.</p>
                        <div>
                            <AppButton text="get in touch" :isOutline="false"/>
                            <AppButton text="read more" :isOutline="true"/>
                        </div>
                    </div>
                    
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
        position: relative;
        
        .over-img {
            background-color: rgba(0, 0, 0, 0.3);
            height: 100%;
        }

        nav {
            height: $header_nav;
            @include flex(row, space-between, end);

            ul {
                @include flex(row, space-between, center);
                gap: 2rem;
                text-transform: uppercase;
            }
        }
        .content {
            height: calc($hero_heigth - $header_nav);
            text-align: center;
            @include flex(column, center, center);
            gap: 2rem;
            h1 {
                font-size: 80px;
                font-weight: 900;
            }
            p {
                color: $info_color;
                font-size: 20px;
                width: 60%;
            }
            div {
                @include flex(row, space-between, center);
                gap: 2rem;
            }
        }
    }
}</style>