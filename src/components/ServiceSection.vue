<script>
export default {
    data() {
        return {
            services: [
                {
                    icon: 'fa-solid fa-network-wired',
                    title: 'Audit & Assurance',
                    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod inventore ex amet.'
                },
                {
                    icon: 'fa-solid fa-briefcase',
                    title: 'Financial Advisory',
                    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod inventore ex amet.'
                },
                {
                    icon: 'fa-solid fa-chart-simple',
                    title: 'Analytics and M&A',
                    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod inventore ex amet.'
                },
                {
                    icon: 'fa-solid fa-plane',
                    title: 'Middle Marketing',
                    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod inventore ex amet.'
                },
                {
                    icon: 'fa-solid fa-scale-balanced',
                    title: 'Legal Consulting',
                    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod inventore ex amet.'
                },
                {
                    icon: 'fa-solid fa-inbox',
                    title: 'Regulatory Risk',
                    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod inventore ex amet.'
                },
            ],
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