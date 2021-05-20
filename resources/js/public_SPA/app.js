require('../bootstrap');

import { createApp } from 'vue';
import router from "./router";

import NavComponent from "./components/NavComponent"
import ViewComponent from "./components/ViewComponent"

const app = createApp({
    components: {
        NavComponent,
        ViewComponent
    }
}).use(router).mount('#app');