// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';

Vue.config.productionTip = false;

// Necessary to add vuex properties to the Vue object
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    pages: [
      {
        name: 'search',
        selected: true,
        url: '',
      },
      {
        name: 'api',
        selected: false,
        url: '',
      },
      {
        name: 'palette',
        selected: false,
        url: '',
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
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App },
});
