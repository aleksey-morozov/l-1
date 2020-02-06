require('./bootstrap');
import Vue from 'vue';

import App from './pages/App.vue';
import router from './router';
Vue.prototype.router = router;

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});
