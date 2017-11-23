import { calculateTextColor } from '@/common/colors';

export const apiIsValid = state => state.api.providers[state.api.selectedProvider].valid;

export const currentAppColor = state => state.colors.primary;

export const currentSearchTerm = state => state.search.term;

export const currentRoute = state => state.route.path;

export const selectedPalette = state => state.palette.selected;
export const paletteOptions = state => Object.keys(state.palette.options);
export const paletteColors = state => state.palette.options[state.palette.selected];

export const bubblePosX = state => state.bubble.posX;
export const bubblePosY = state => state.bubble.posY;
export const bubbleColor = state => state.bubble.color;
export const bubbleAnimating = state => state.bubble.animating;

export const currentBackgroundColor = state => state.colors.background;

export const currentPageColor = (state, getters) => {
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
