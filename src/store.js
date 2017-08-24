import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
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
