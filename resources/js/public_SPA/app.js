require('../bootstrap');

import { createApp } from 'vue';
import router from "./router";

import NavComponent from "./components/NavComponent"

const app = createApp({
    components: {
        NavComponent
    }
}).use(router).mount('#app');