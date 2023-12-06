<script>
import AppButton from './AppButton.vue';
import AppLogo from './AppLogo.vue';
import { store } from '../store';

export default {
    props: {
        title: String,
        mail: Object,
        phone: Object,
    },
    data() {
        return {
            store,
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
            bgImgActive: 0,
            myInterval: null
        };
    },
    methods: {
        getImagePath(imgName) {
            return new URL(`../assets/img/${imgName}.jpg`, import.meta.url).href;
        },
        changeHeroImg() {
            if (this.bgImgActive < this.bgImg.length - 1) {
                this.bgImgActive++
            } else {
                this.bgImgActive = 0
            }
        },
        clickedHeroImg(index) {
            clearInterval(this.myInterval);
            this.bgImgActive = index;
            this.myInterval = setInterval(() => {
            this.changeHeroImg()
        }, 5000) 
        }
    },
    mounted() {
        this.myInterval = setInterval(() => {
            this.changeHeroImg()
        }, 5000)
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
                        <p class="m-0"><i class="fa-solid fa-clock"></i> Open Hours: Mon - Sat - 9:00 - 18:00</p>
                    </div>
                    <div class="col">
                        <ul>
                            <li><i :class="phone.icon"></i> {{ phone.number }}</li>
                            <li><i :class="mail.icon"></i> {{ mail.mail }}</li>
                            <li v-for="icon in store.iconsSocial"><a href=""><i :class="icon"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="hero">
            <img v-for="(image, index) in bgImg" :key="index" :src="getImagePath(image.img)" alt="" :class="index !== bgImgActive ? 'd-none' : ''">
            <div class="over-img">
                <div class="container">
                    <nav>
                        <AppLogo />
                        <ul class="m-0">
                            <li v-for="link in headerNav"><a :href="`#${link}`">{{ link }}</a></li>
                            <li><a href=""><i class="fa-regular fa-user"></i></a></li>
                            <li>
                                <AppButton text="get in touch" :isOutline="false" link="get-in"/>
                            </li>
                        </ul>
                    </nav>
                    <div class="content">
                        <h1>{{ title }}</h1>
                        <p>The rigth outcomes depend on continuous rigor in governance, models, and processes across the
                            finance function.</p>
                        <div>
                            <AppButton text="get in touch" :isOutline="false" link="get-in"/>
                            <AppButton text="read more" :isOutline="true" />
                        </div>
                    </div>

                </div>
            </div>
            <div class="img-bg">
                <div @click="clickedHeroImg(index)" class="active-bg" v-for="(num, index) in bgImg" :key="num" :class="index == bgImgActive ? ' bg-color' : ''"></div>
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

        ul {
            @include flex(row, space-between, center);
            gap: 1.5rem;
            margin: 0;
        }

    }

    .hero {
        color: $white_color;
        height: $hero_heigth;
        position: relative;

        img {
            width: 100%;
            height: $hero_heigth;
            position: absolute;
            left: 0;
            top: 0;
            z-index: -1;
        }
        .over-img {
            background-color: rgba(0, 0, 0, 0.3);
            height: 100%; 
        }

        nav {
            height: $header_nav;
            @include flex(row, space-between, center);

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

        .img-bg {
            position: absolute;
            top: 50%;
            left: 98%;
            transform: translateY(-50%);

            .active-bg {
                height: 40px;
                width: 10px;
                border: 1px solid $secondary_text_color;
                border-radius: 5px;
                margin: 5px 0;
                cursor: pointer;
            }

            .bg-color {
                background-color: $secondary_text_color;
            }
        }
    }
}</style>