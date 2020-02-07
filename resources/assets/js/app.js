require('./bootstrap');
import Vue from 'vue';
import App from './pages/App.vue';
import router from './router';
import vuetify from './plugins/vuetify';

Vue.prototype.router = router;

new Vue({
    el: '#app',
    components: { App },
    router,
    vuetify,
});
