import curry from 'ramda/src/curry';
import { colorize as bingColorOf } from '@/common/bing';
import googleColorOf from '@/common/google';
import Please from 'pleasejs';
import * as types from './mutation-types';

export const setSelectedProvider = ({ commit }, provider) => {
  commit(types.SET_SELECTED_PROVIDER, provider);
};

export const setBingCredentials = ({ commit }, credentials) => {
  commit(types.SET_BING_CREDENTIALS, credentials);
};

export const setGoogleCredentials = ({ commit }, credentials) => {
  commit(types.SET_GOOGLE_CREDENTIALS, credentials);
};

export const colorize = async ({ commit, state }, query) => {
  const colorOf = state.api.selectedProvider === 'bing' ?
    curry(bingColorOf)(state.api.providers.bing.apiKey) :
    curry(googleColorOf)(state.api.providers.google.cseId, state.api.providers.google.apiKey);
  const color = await colorOf(query);
  commit(types.SET_SEARCH_TERM, query);
  commit(types.SET_APP_COLOR, color.hex());
  const scheme = Please.make_scheme(color.hsv().object(), {
    scheme_type: 'analogous',
    format: 'hex',
  });
  commit(types.SET_SECONDARY_COLOR, scheme[0].substr(0, 7));
  commit(types.SET_TERTIARY_COLOR, scheme[1].substr(0, 7));
};

export const startBubbleAnimation = ({ commit, getters }, { x, y }) => {
  commit(types.SET_BUBBLE_INFORMATION, { x, y, color: getters.currentPageColor });
  commit(types.SET_BUBBLE_ANIMATING, true);
};

export const bubbleDoneAnimating = async ({ commit, getters }) => {
  commit(types.SET_BACKGROUND_COLOR, getters.currentPageColor);
  commit(types.SET_BUBBLE_ANIMATING, false);
};
