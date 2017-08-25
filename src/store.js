import Vue from 'vue';
import Vuex from 'vuex';
import colorOf from 'color-of';

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
    setSearchTermColor(state, term, color) {
      state.api.search.term = term;
      state.api.search.color = color;
    },
  },
  /* eslint-enable no-param-reassign */
  actions: {
    async colorize({ commit, state }, query) {
      const options = {
        apiKey: state.api.providers.bing.apiKey,
      };
      const color = await colorOf(query, options);
      commit('setSearchTermColor', query, color.hex());
    },
  },
});
