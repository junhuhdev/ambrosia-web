import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue';
import './plugins/bootstrap-vue'
import 'vue-multiselect/dist/vue-multiselect.min.css'
import App from './App.vue';
import router from './router';
import store from './store/store';
import axios from 'axios';


Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
