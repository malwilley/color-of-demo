import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import { bingColorOf } from '@/common/bing';
import googleColorOf from '@/common/google';
import R from 'ramda';

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
  getters: {
    apiIsValid: state => state.api.providers[state.api.selectedProvider].valid,
  },
  /* eslint-disable no-param-reassign */
  mutations: {
    setSelectedProvider(state, provider) {
      state.api.selectedProvider = provider;
    },
    setBingApiKey(state, apiKey) {
      state.api.providers.bing.apiKey = apiKey;
    },
    setGoogleCseId(state, cseId) {
      state.api.providers.google.cseId = cseId;
    },
    setGoogleApiKey(state, apiKey) {
      state.api.providers.google.apiKey = apiKey;
    },
    setSearchTerm(state, term) {
      state.search.term = term;
    },
    setColor(state, color) {
      state.search.color = color;
    },
  },
  /* eslint-enable no-param-reassign */
  actions: {
    setSelectedProvider({ commit }, provider) {
      commit('setSelectedProvider', provider);
    },
    setBingApiKey({ commit }, apiKey) {
      commit('setBingApiKey', apiKey);
    },
    setGoogleCseId({ commit }, cseId) {
      commit('setGoogleCseId', cseId);
    },
    setGoogleApiKey({ commit }, apiKey) {
      commit('setGoogleApiKey', apiKey);
    },
    async colorize({ commit, state }, query) {
      const colorOf = state.api.selectedProvider === 'bing' ?
        R.curry(bingColorOf)(state.api.providers.bing.apiKey) :
        R.curry(googleColorOf)(state.api.providers.google.cseId, state.api.providers.google.apiKey);
      const color = await colorOf(query);
      commit('setSearchTerm', query);
      commit('setColor', color.hex());
    },
  },
  plugins: [
    createPersistedState({
    }),
  ],
});
