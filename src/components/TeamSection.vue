<script>
import { store } from '../store';
export default {
    data() {
        return {
            store,
            team: [
                {
                    person: 'David Cooper',
                    role: 'cto & co-founder',
                    image: 'team-1'
                },
                {
                    person: 'Emma Lopez',
                    role: 'chief procurement',
                    image: 'team-2'
                },
                {
                    person: 'Oliver Jones',
                    role: 'chief marketing',
                    image: 'team-3'
                },
                {
                    person: 'T. Johnson',
                    role: 'ceo & president',
                    image: 'team-4'
                }
            ]
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
    <div class="container">
        <div class="row">
            <div class="col-6 d-flex py-4" v-for="elem in team">
                <img :src="getImagePath(elem.image)" :alt="elem.person">
                <ul>
                    <li class="person">{{ elem.person }}</li>
                    <li class="role">{{ elem.role }}</li>
                    <li>
                        <ul class="d-flex p-0 mt-2">
                            <li class="me-3" v-for="icon in store.iconsContact"><a href=""><i :class="icon"
                                        class="fa-circle"></i></a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/_variables" as *;

.col-6 {
    img {
        width: 30%;
        border-radius: 5px;
    }

    .person {
        color: $primary_text_color;
        font-size: 1.6rem;
        font-weight: 700;
    }

    .role {
        font-size: 1rem;
        text-transform: uppercase;
        color: $info_main_color;
    }

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: $secondary_text_transparent;
        width: 40px;
        height: 40px;
        border-radius: 50%;

        i {
            color: $secondary_text_color;
        }
    }
}
</style>