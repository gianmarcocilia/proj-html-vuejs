<script>
import AppLogo from './AppLogo.vue';
import AppButton from './AppButton.vue';
import { store } from '../store';

export default {
    props: {
        phone: Object,
        mail: Object,
        address: Object,
    },
    data() {
        return {
            store,
            about: ['The Company', 'Institutional', 'Social & Events', 'Innovation', 'Environment', 'Technology'],
            support: ['Responsibility', 'Terms of Use', 'About Cookies', 'Privacy Policy', 'Accessibility', 'Information'],
        };
    },
    components: { AppLogo, AppButton }
}
</script>

<template>
    <footer>
        <div class="footer-top">
            <div class="container">
                <div class="row row-cols-4">
                    <div class="col">
                        <AppLogo />
                        <p class="py-4 m-0">A functional HTML Template for Corporate & Business.</p>
                        <ul class="p-0 contact">
                            <li><i :class="phone.icon"></i> {{ phone.number }}</li>
                            <li><i :class="mail.icon"></i> {{ mail.mail }}</li>
                            <li><i :class="address.icon"></i> {{ address.address }}</li>
                        </ul>
                        <AppButton :isOutline="true" text="get in touch" link="get-in"/>
                    </div>
                    <div class="col">
                        <div class="my-card">
                            <h3>About</h3>
                            <ul>
                                <li v-for="item in about"><i class="fa-solid fa-chevron-right"></i> <a href="">{{ item
                                }}</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col">
                        <div class="my-card">
                            <h3>Services</h3>
                            <ul>
                                <li v-for="item in store.services"><i class="fa-solid fa-chevron-right"></i> <a href="">{{
                                    item.title }}</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col">
                        <div class="my-card">
                            <h3>Support</h3>
                            <ul>
                                <li v-for="item in support"><i class="fa-solid fa-chevron-right"></i> <a href="">{{ item
                                }}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <div class="row align-items-center justify-content-between text-center">
                    <div class="col">
                        <p>Enjoy the low price. We are tracking any intention of piracy.</p>
                    </div>
                    <div class="col">
                        <p>© 2020 NEXGEN is Proudly Powered by <a href="">Codings</a>.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

.footer-top {
    background-image: url(../assets/img/bg-7.jpg);
    padding: 8rem 0;
    color: $info_color;

    .contact {
        li {
            padding: .6em;
        }
    }

    .my-card {
        background-color: rgba(255, 255, 255, 0.05);
        border-radius: 10px;
        padding: 2.5rem;

        h3 {
            font-weight: 700;
            padding-bottom: .5em;
        }

        ul {
            padding: 0;

            li {
                padding-bottom: .6em;
            }
        }

    }

    i {
        margin-right: .5em;
    }

}
.footer-bottom {
    background-color: black;
    padding: 1.5rem;
    color: $info_color;
    p {
        margin: 0;
        a {
            color: $secondary_text_color;
            &:hover {
                text-decoration: underline;
            }
        }
    }
}
</style>