import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations';

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
    search: {
      term: '',
      color: '#ffffff',
    },
    api: {
      selectedProvider: 'bing',
      providers: {
        bing: {
          apiKey: '',
          valid: false,
        },
        google: {
          cseId: '',
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
  getters,
  mutations,
  actions,
  plugins: [
    createPersistedState({
      paths: [
        'api',
        'palette',
      ],
    }),
  ],
});
