import * as types from './mutation-types';

/* eslint-disable no-param-reassign */

export default {
  [types.SET_APP_COLOR]: (state, color) => {
    state.search.color = color;
  },
  [types.SET_SEARCH_TERM]: (state, term) => {
    state.search.term = term;
  },
  [types.SET_SELECTED_PROVIDER]: (state, provider) => {
    state.api.selectedProvider = provider;
  },
  [types.SET_BING_CREDENTIALS]: (state, credentials) => {
    if (credentials.apiKey) {
      state.api.bing.apiKey = credentials.apiKey;
    }
  },
  [types.SET_GOOGLE_CREDENTIALS]: (state, credentials) => {
    if (credentials.apiKey && credentials.cseId) {
      state.api.google.apiKey = credentials.apiKey;
      state.api.google.cseId = credentials.cseId;
    }
  },
};
