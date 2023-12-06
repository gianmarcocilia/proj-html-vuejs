<script>
import { store } from '../store';
export default {
    props: {
            cardControlShow: Number,
        },
    data() {
        return {
            store,
        }
    },
    methods: {
        getImagePath(imgName) {
            return new URL(`../assets/img/${imgName}.jpg`, import.meta.url).href;
        },
    },
    
}
</script>

<template>
    <div class="container pt-5">
        <div class="row row-cols-3 gy-4">
            <div class="col" v-for="(card, index) in store.cardsNews" :key="index">
                <div class="my-card" :style="{ 'background-image': 'url(' + getImagePath(card.image) + ')' }" v-show="index <= cardControlShow">
                    <div class="effects">
                        <div class="details">
                            <span><i class="fa-regular fa-user"></i> {{ card.person }}</span>
                            <span><i class="fa-regular fa-clock"></i> {{ card.hour }}</span>
                        </div>
                        <div class="text">
                            <h2>{{ card.title }}</h2>
                            <p>{{ card.description }}</p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/_variables" as *;

.my-card {
    background-size: cover;
    height: 360px;
    border-radius: 15px;

    &:hover {
        .effects {
            backdrop-filter: blur(2px);
            background-color: rgba(0, 0, 0, 0.6);
            justify-content: space-between;

            .details {
                display: flex;
                justify-content: space-around;
                color: $white_color;

                span {
                    display: inline-block;
                }
            }

            p {
                display: block;
            }
        }
    }

    .effects {
        border-radius: 15px;
        background-color: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 100%;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: end;
        text-align: center;

        h2 {
            color: $white_color;
            font-size: 1.5rem;
            font-weight: 700;
        }

        p {
            color: $white_color;
            display: none;
        }
    }

    .details {
        display: none;
        i {
            margin-right: .3em;
        }
    }
}</style>