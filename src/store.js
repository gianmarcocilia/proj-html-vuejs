import {reactive} from 'vue';
export const store = reactive({
    phoneContact: {
        number: '+1 (305) 1234-5678',
        icon: 'fa-solid fa-phone'
    },
    mailContact: {
        mail: 'hello@example.com',
        icon: 'fa-solid fa-envelope'
    },
    addressContact: {
        address: 'Main Avenue, 987',
        icon: 'fa-solid fa-location-dot'
    },
    iconsSocial: ['fa-brands fa-facebook-f', 'fa-brands fa-twitter', 'fa-brands fa-linkedin-in'],
})