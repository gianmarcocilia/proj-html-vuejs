<script>

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
            ]
        };
    },
    
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
                    <p class="paragraph w-50">Financial executives need to review their strategies, operating models and capabilities so that their areas can generate sound information for better decision making.</p>
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
                    <div class="section-bottom d-flex">
                        <ul class="m-0 fw-bolder" v-for="counter in counters">
                            <li class="fs-1">{{ counter.num }}</li>
                            <li class="fs-3">{{ counter.thing }}</li>
                        </ul>
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

section {
    padding: 6rem 0;

    .section-top {
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
            font-size: 40px;
            font-weight: 900;

            span {
                padding: .3em;
                background-color: #00a6a61e;
                border-radius: 5px;
            }
        }

        .paragraph {
            color: $info_color;
            margin-bottom: 2.5rem;
        }
    }

    img {
        border-radius: 5px;
        display: block;
    }
}</style>