import {reactive} from 'vue';
export const store = reactive({
    phoneContact: '+1 (305) 1234-5678',
    mailContact: 'hello@example.com',
    iconsContact: ['fa-brands fa-facebook-f', 'fa-brands fa-twitter', 'fa-brands fa-linkedin-in'],
    mainSection: [
        
        {
            type: 'newsletter',
            title: 'First',
            titleBg: 'Know',
            paragraph: 'Follow closely and receive content about our company and the news of the current market.'
        },
        {
            type: 'send a message',
            title: 'Get in',
            titleBg: 'Touch',
            paragraph: 'We Will respond to your message as soon as possible.'
        }
    ]
})