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
    ]
})