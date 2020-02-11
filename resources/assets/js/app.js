require('./bootstrap');
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';

Vue.prototype.router = router;
Vue.config.productionTip = false;

new Vue({
    el: '#app',
    components: { App },
    router,
    vuetify,
});
