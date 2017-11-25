import * as types from './mutation-types';

/* eslint-disable no-param-reassign */

export default {
  [types.SET_APP_COLOR]: (state, color) => {
    state.colors.primary = color;
  },
  [types.SET_SECONDARY_COLOR]: (state, color) => {
    state.colors.secondary = color;
  },
  [types.SET_TERTIARY_COLOR]: (state, color) => {
    state.colors.tertiary = color;
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
      state.api.providers.google.apiKey = credentials.apiKey;
      state.api.providers.google.cseId = credentials.cseId;
    }
  },
  [types.SET_SELECTED_PALETTE]: (state, paletteName) => {
    state.palette.selected = paletteName;
  },
  [types.SET_BUBBLE_INFORMATION]: (state, { x, y, color }) => {
    state.bubble.posX = x;
    state.bubble.posY = y;
    state.bubble.color = color;
  },
  [types.SET_BUBBLE_ANIMATING]: (state, isAnimating) => {
    state.bubble.animating = isAnimating;
  },
  [types.SET_BACKGROUND_COLOR]: (state, color) => {
    state.colors.background = color;
  },
  [types.SET_SEARCH_STATE]: (state, searchState) => {
    state.search.state = searchState;
  },
};
