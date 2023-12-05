<script>
export default {
    props: {
        services: Array,
    },
    data() {
        return {
            
        }
    }
}

</script>

<template>
    <section class="pt-5">
        <div class="container">
            <div class="row g-5">
                <div class="col-4" v-for="service in services">
                    <div class="card bg-dark text-white p-5">
                        <h3><i :class="service.icon"></i></h3>
                        <h2>{{ service.title }}</h2>
                        <p>{{ service.paragraph }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use "../style/partials/_variables" as *;

section {
    h3 {
        color: $secondary_text_color;
        font-size: 4rem;
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
</style>