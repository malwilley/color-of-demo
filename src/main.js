import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import store from './store';
import router from './router';

Vue.config.productionTip = false;

Vue.use(VueRouter);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App },
});
