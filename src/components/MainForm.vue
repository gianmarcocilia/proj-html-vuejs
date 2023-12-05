<script>
import AppButton from './AppButton.vue';

export default {
    data() {
        return {};
    },
    components: { AppButton }
}

</script>

<template>
    <div class="container">
        <div class="row">
            <div class="form-group col-6">
                <label for="name">Name</label>
                <input type="email" class="form-control" id="name" placeholder="Name">
            </div>
            <div class="form-group col-6">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" placeholder="Email">
            </div>
            <div class="form-group col-6">
                <label for="phone">Phone</label>
                <input type="email" class="form-control" id="phone" placeholder="Phone">
            </div>
            <div class="form-group col-6">
                <label for="more-info">More Info</label>
                <select class="form-control" id="more-info">
                    <option selected>More Info</option>
                    <option value=""></option>
                </select>
            </div>
            <div class="form-group mb-3">
                <label for="message">Message</label>
                <textarea class="form-control" id="message" rows="4" placeholder="Message"></textarea>
            </div>
        </div>
        <div class="button">
            <AppButton :isOutline="false" text="send" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/_variables" as *;

label {
    display: none;
}

.button {
    color: white;
}

input, select, textarea {
    border: none;
    padding: .8em;
    margin: .5em;
    background-color: #ececec;
}

</style>