import '@babel/polyfill';
import 'mutationobserver-shim';
import Vue from 'vue';
import Datetime from 'vue-datetime';
import 'vue-datetime/dist/vue-datetime.css';
import 'vue-multiselect/dist/vue-multiselect.min.css';
import App from './App.vue';
import router from './router';
import store from './store/store';
import vuetify from './plugins/vuetify';

Vue.use(Datetime);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
