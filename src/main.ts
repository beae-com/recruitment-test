import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import axios from 'axios';
import './assets/styles/common.css';

const app = createApp(App);
axios.defaults.withCredentials = true;
app.config.globalProperties.$axios = axios.create({
    timeout: 60000,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

app.use(store);
app.mount('#app');

