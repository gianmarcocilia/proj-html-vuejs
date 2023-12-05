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
            ],
        }
    }
}

</script>

<template>
    <section class="d-flex justify-content-center">
        <ul class="m-0 fw-bolder" v-for="counter in counters">
            <li class="fs-1">{{ counter.num }}</li>
            <li class="fs-3">{{ counter.thing }}</li>
        </ul>
    </section>
</template>

<style lang="scss" scoped>
@use "../style/partials/_variables" as *;
section {
        padding-top: 3rem;

        li:first-child {
            color: $secondary_text_color;
        }
    }
</style>