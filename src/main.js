// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(VueRouter);

const store = new Vuex.Store({
  state: {
    pages: [
      {
        name: 'search',
        selected: true,
        url: '/',
      },
      {
        name: 'api',
        selected: false,
        url: '/api',
      },
      {
        name: 'palette',
        selected: false,
        url: '/palette',
      },
    ],
    api: {
      selectedProvider: 'bing',
      providers: {
        bing: {
          apiKey: '',
          valid: false,
        },
      },
    },
    palette: {
      colors: [
        '#DDDDDD',
        '#000000',
        '#6f3292',
        '#5d9921',
        '#140345',
      ],
    },
  },
  getters: {
    apiIsValid: state => state.api.providers[state.api.selectedProvider].valid,
  },
  /* eslint-disable no-param-reassign */
  mutations: {
    updateBingApiKey(state, apiKey) {
      state.api.providers.bing.apiKey = apiKey;
    },
  },
  /* eslint-enable no-param-reassign */
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App },
});
