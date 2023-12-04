<script>
import AppButton from './AppButton.vue';


export default {
    data() {
        return {
            counters: [
                {
                    num: 128,
                    thing: 'Certifications'
                },
                {
                    num: 230,
                    thing: 'Employees'
                },
                {
                    num: 517,
                    thing: 'Customers'
                },
                {
                    num: 94,
                    thing: 'Countries Served'
                },
            ],

        };
    },
    components: { AppButton }
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
                    <div class="section-bottom d-flex justify-content-center">
                        <ul class="m-0 fw-bolder" v-for="counter in counters">
                            <li class="fs-1">{{ counter.num }}</li>
                            <li class="fs-3">{{ counter.thing }}</li>
                        </ul>
                    </div>
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
                <div class="section-bottom pt-5">
                    <div class="container">
                        <div class="row g-5">
                            <div class="col-4">
                                <div class="card bg-dark text-white p-5">
                                    <h3><i class="fa-solid fa-network-wired"></i></h3>
                                    <h2>Audit & Assurance</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod inventore ex amet
                                        placeat, porro aspernatur quibusdam? Ratione, modi nihil fugiat saepe iusto quaerat
                                        possimus odio tempore. Maiores vitae dolorum mollitia!</p>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="card bg-dark text-white p-5">
                                    <h3><i class="fa-solid fa-briefcase"></i></h3>
                                    <h2>Financial Advisory</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod inventore ex amet
                                        placeat, porro aspernatur quibusdam? Ratione, modi nihil fugiat saepe iusto quaerat
                                        possimus odio tempore. Maiores vitae dolorum mollitia!</p>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="card bg-dark text-white p-5">
                                    <h3><i class="fa-solid fa-chart-simple"></i></h3>
                                    <h2>Analytics and M&A</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod inventore ex amet
                                        placeat, porro aspernatur quibusdam? Ratione, modi nihil fugiat saepe iusto quaerat
                                        possimus odio tempore. Maiores vitae dolorum mollitia!</p>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="card bg-dark text-white p-5">
                                    <h3><i class="fa-solid fa-plane"></i></h3>
                                    <h2>Middle Marketing</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod inventore ex amet
                                        placeat, porro aspernatur quibusdam? Ratione, modi nihil fugiat saepe iusto quaerat
                                        possimus odio tempore. Maiores vitae dolorum mollitia!</p>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="card bg-dark text-white p-5">
                                    <h3><i class="fa-solid fa-scale-balanced"></i></h3>
                                    <h2>Legal Consulting</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod inventore ex amet
                                        placeat, porro aspernatur quibusdam? Ratione, modi nihil fugiat saepe iusto quaerat
                                        possimus odio tempore. Maiores vitae dolorum mollitia!</p>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="card bg-dark text-white p-5">
                                    <h3><i class="fa-solid fa-inbox"></i></h3>
                                    <h2>Regulatory Risk</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod inventore ex amet
                                        placeat, porro aspernatur quibusdam? Ratione, modi nihil fugiat saepe iusto quaerat
                                        possimus odio tempore. Maiores vitae dolorum mollitia!</p>
                                </div>
                            </div>

                        </div>
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
}

.section-counter {
    background-image:
        linear-gradient(black, rgb(0, 0, 0)),
        url('../assets/img/bg-route.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-blend-mode: saturation;

    .section-bottom {
        padding-top: 3rem;

        li:first-child {
            color: $secondary_text_color;
        }
    }
}

.section-service {
    background-color: $main_bg_color;
    text-align: left;

    .section-bottom {
        h3 {
            color: $secondary_text_color;
            font-size: 50px;
        }

        p {
            color: $info_color;
        }

        .card {
            position: relative;

            &::after {
                font-family: "Font Awesome 5 Free";
                font-weight: 900;
                content: '\f061';
                position: absolute;
                right: 10%;
                font-size: 30px;
                color: $secondary_text_color;
            }
        }

    }
}

section {
    padding: 6rem 0;

    .section-top {

        .name {
            color: $secondary_text_color;
            text-transform: uppercase;
            font-size: 14px;
            font-weight: 700;
            padding-bottom: 2rem;
        }

        h2 {
            font-size: 40px;
            font-weight: 900;
            padding-bottom: 2rem;

            span {
                padding: .3em;
                background-color: #00a6a61e;
                border-radius: 5px;
            }
        }

        .paragraph {
            color: $info_color;
        }
    }

    img {
        border-radius: 5px;
        display: block;
    }
}
</style>