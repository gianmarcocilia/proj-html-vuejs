<script>
import AppButton from './AppButton.vue';
import { store } from '../store';

export default {
    data() {
        return {
            store
        };
    },
    components: { AppButton }
}

</script>

<template>
    <div class="container">
        <h3>Example Inc.</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <ul class="p-0">
            <li><i :class="store.phoneContact.icon"></i> <span>{{ store.phoneContact.number }}</span></li>
            <li><i :class="store.mailContact.icon"></i> <span>{{ store.mailContact.mail }}</span></li>
            <li><i :class="store.addressContact.icon"></i> <span>{{ store.addressContact.address }}</span></li>
        </ul>
        <div class="button">

            <AppButton :isOutline="true" text="view map"/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/_variables" as *;
h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: $primary_text_color;
    margin-bottom: 1em;
}
p {
    color: $info_main_color;
}

li {
    display: flex;
    align-items: center;
    color: $secondary_text_color;
    gap: 1rem;
    padding: .5rem 0;
}

i {
    font-size: 1.3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: $secondary_text_transparent;
        width: 45px;
        height: 45px;
        border-radius: 50%;
        color: $secondary_text_color;
    }

.button {
    width: fit-content;
    color: $secondary_text_color;
}
</style>