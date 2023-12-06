<script>
import AppButton from './AppButton.vue';
import { store } from '../store';
import CounterSection from './CounterSection.vue';
import ServiceSection from './ServiceSection.vue';
import TeamSection from './TeamSection.vue';
import PresidentSpeech from './PresidentSpeech.vue';
import NewsCard from './NewsCard.vue';
import FormNewsletter from './FormNewsletter.vue';
import MainForm from './MainForm.vue';
import ExampleInc from './ExampleInc.vue';


export default {
    data() {
        return {
            store,
            showCardNewsControl: 2,
            cardNewsButtonText: 'See All',
        };
    },
    methods: {
        showAllNews() {
            if (this.showCardNewsControl == 2) {
                this.showCardNewsControl = store.cardsNews.length;
                this.cardNewsButtonText = 'Show Less';
            } else if (this.showCardNewsControl == store.cardsNews.length) {
                this.showCardNewsControl = 2;
                this.cardNewsButtonText = 'See All';
            }
        }
    },
    components: { AppButton, CounterSection, ServiceSection, TeamSection, PresidentSpeech, NewsCard, FormNewsletter, MainForm, ExampleInc }
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
                <div class="video">
                    <img class="w-75 m-auto" src="../assets/img/video-1.jpg" alt="">
                    <span class="first"><i class="fa-solid fa-play"></i></span>
                    <span class="second"><i class="fa-solid fa-play"></i></span>
                </div>
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
                <ServiceSection :services="store.services"/>
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
                    <AppButton :text="cardNewsButtonText" :isOutline="false" @buttonClicked="showAllNews"/>
                </div>
                <NewsCard :cardControlShow="showCardNewsControl"/>
            </div>
        </section>

        <!-- Section Form -->
        <section class="section-form">
            <div class="container">
                <div class="section-top">
                    <div class="text text-white w-100">
                        <p class="name">newsletter</p>
                        <h2><span>Know</span> First</h2>
                        <p class="paragraph m-0">Follow closely and receive content about our company and the news of the current market.</p>
                    </div>
                    <FormNewsletter />
                </div>
            </div>  
        </section>

        <!-- Section Get in touch -->
        <section class="section-get-in">
            <div class="container">
                <div class="row">
                    <div class="section-top col-8">
                        <p class="name">send a message</p>
                        <h2>Get in <span>Touch</span></h2>
                        <p class="paragraph">We will respond to your message as soon as possible.</p>
                        <MainForm/>
                    </div>
                    <div class="col-4">
                        <ExampleInc />
                    </div>
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
    .video {
        position: relative;
        filter: saturate(500%) grayscale(30%);
        .first {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            font-size: 90px;
            color: rgba(255, 255, 255, 0.7);
            
        }
        .second {
            position: absolute;
            left: 50%;
            top: 48%;
            transform: translate(-50%, -50%);
            font-size: 90px;
            color: rgba(255, 255, 255, 0.3);
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
    background-color: $news_bg_color;
    h2 {
        color: $primary_text_color;
        span {
            color: $secondary_text_color;
        }
    }
}

.section-form {
    background-color: #111117;
    .section-top {
        display: flex;
        padding: 0 8rem;
    }
    .text {
        .paragraph {
            color: $info_color;
        }
    }
}

.section-get-in {
    .section-top {
        span {
            color: $secondary_text_color;
        }
    }
}

// General style
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
                padding: .1em .2em;
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