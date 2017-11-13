import { calculateTextColor } from '@/common/colors';

export const apiIsValid = state => state.api.providers[state.api.selectedProvider].valid;

export const currentAppColor = state => state.colors.primary;

export const currentSearchTerm = state => state.search.term;

export const currentRoute = state => state.route.path;

export const currentPalette = state => state.palette.colors;

export const currentBackgroundColor = (state, getters) => {
  switch (getters.currentRoute) {
    case '/':
      return state.colors.primary;
    case '/api':
      return state.colors.secondary;
    case '/palette':
      return state.colors.tertiary;
    default:
      return '#FFFFFF';
  }
};

/* eslint-disable arrow-body-style */
export const currentTextColor = (state, getters) => {
  return calculateTextColor(getters.currentBackgroundColor);
};
