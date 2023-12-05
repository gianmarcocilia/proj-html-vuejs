import {reactive} from 'vue';
export const store = reactive({
    phoneContact: '+1 (305) 1234-5678',
    mailContact: 'hello@example.com',
    mainSection: [
        {
            type: '',
            title: '',
            titleBg: '',
            paragraph: ''
        },
        {
            type: '',
            title: '',
            titleBg: '',
            paragraph: ''
        },
        {
            type: '',
            title: 'Excellence in',
            titleBG: '',
            paragraph: 'We are leaders in providing consultancy services with a set of cutting-edge technologies and a team of experienced and renowned professionals. These sre some options that you can hire.'
        },
        {
            type: 'we like what we do',
            title: 'of Experts',
            titleBg: 'Team',
            paragraph: 'Ethics and integrity are the bases on wich our professionals build their careers. They are fundamentals that become daily attitudes.'
        },
        {
            type: 'our editorial content',
            title: 'Latest',
            titleBg: 'News',
            paragraph: 'Every week we publish content about what is best in the business world.'
        },
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