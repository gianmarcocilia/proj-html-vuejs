<script>
import AppButton from './AppButton.vue';
import { store } from '../store';
import CounterSection from './CounterSection.vue';
import ServiceSection from './ServiceSection.vue';
import TeamSection from './TeamSection.vue';
import PresidentSpeech from './PresidentSpeech.vue';


export default {
    data() {
        return {
            store,
        };
    },
    components: { AppButton, CounterSection, ServiceSection, TeamSection, PresidentSpeech }
}
</script>

<template>
    <main>
        <!-- Section Video -->
        <section class="section-video">
            <div class="container">
                <div class="section-top text-center">
                    <p class="name">introduction video</p>
                    <h2>Advisory <span>Performance</span></h2>
                    <p class="paragraph w-50 m-auto pb-5">Financial executives need to review their strategies, operating
                        models and
                        capabilities so that their areas can generate sound information for better decision making.</p>
                </div>
                <img class="w-75 m-auto" src="../assets/img/video-1.jpg" alt="">
            </div>
        </section>

        <!-- Section Counter -->
        <section class="section-counter">
            <div class="container">
                <div class="section-top text-center text-white">
                    <p class="name">what are we doing</p>
                    <h2><span>Results</span> in Numbers</h2>
                    <CounterSection />
                </div>
            </div>
        </section>

        <!-- Section service -->
        <section class="section-service">
            <div class="container">
                <div class="section-top text-white d-flex align-items-end justify-content-between">
                    <div class="text w-75">
                        <p class="name">our business areas</p>
                        <h2>Excellence in <span>Services</span></h2>
                        <p class="paragraph m-0">We are leaders in providing consultancy services with a set of cutting-edge
                            technologies and a team of experienced and renowned professionals. These sre some options that
                            you
                            can hire.</p>
                    </div>
                    <AppButton text="see all" :isOutline="true" />
                </div>
                <ServiceSection />
            </div>
        </section>

        <!-- Section Team -->
        <section class="section-team">
            <div class="container d-flex">
                <div class="row">
                    <div class="section-top col-8">
                        <p class="name">we like what we do</p>
                        <h2><span>Team</span> of Experts</h2>
                        <p class="paragraph">Ethics and integrity are the bases on wich our professionals build their
                            careers.
                            They are fundamentals that become daily attitudes.</p>
                        <TeamSection />
                    </div>
                    <PresidentSpeech />
                </div>
            </div>
        </section>

        <!-- Section News -->
        <section class="section-news">
            <div class="container">
                <div class="section-top text-white d-flex align-items-end justify-content-between">
                    <div class="text w-75">
                        <p class="name">our editorial content</p>
                        <h2>Latest <span>News</span></h2>
                        <p class="paragraph m-0">Every week we publish content about what is best in the business world.</p>
                    </div>
                    <AppButton text="see all" :isOutline="false" />
                </div>
                
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixins" as *;
@use "../style/partials/_variables" as *;

.section-video {
    h2 {
        color: $primary_text_color;
        span {
            color: $secondary_text_color;
        }
    }
}

.section-counter {
    background-image:
        linear-gradient(black, rgb(0, 0, 0)),
        url('../assets/img/bg-route.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-blend-mode: saturation;
    background-color: rgba(0, 0, 0, 0.5);
}

.section-service {
    background-color: $main_bg_color;
    text-align: left;

    .section-top {
        .paragraph {
            color: $info_color;
        }
    }
}

.section-team {
    width: 100%;
    flex-wrap: wrap;

    span {
        color: $secondary_text_color;
    }
}

.section-news {
    h2 {
        color: $primary_text_color;
        span {
            color: $secondary_text_color;
        }
    }
}


section {
    padding: 6rem 0;

    .section-top {

        .name {
            color: $secondary_text_color;
            text-transform: uppercase;
            font-size: 1rem;
            font-weight: 700;
            padding-bottom: 2rem;
        }

        h2 {
            font-size: 3rem;
            font-weight: 900;
            padding-bottom: 2rem;

            span {
                padding: .3em;
                background-color: $secondary_text_transparent;
                border-radius: 5px;
            }
        }

        .paragraph {
            color: $info_main_color;
        }
    }

    img {
        border-radius: 5px;
        display: block;
    }
}</style>