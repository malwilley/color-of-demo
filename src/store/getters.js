import Color from 'color';

export const apiIsValid = state => state.api.providers[state.api.selectedProvider].valid;

export const currentAppColor = state => state.colors.primary;

export const currentSearchTerm = state => state.search.term;

export const currentRoute = state => state.route.path;

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

export const currentTextColor = (state, getters) => {
  const backgroundColor = Color(getters.currentBackgroundColor);
  const mixRatio = 0.8;
  const textColor = backgroundColor.light() ?
    backgroundColor.mix(Color('black'), mixRatio) :
    backgroundColor.mix(Color('white'), mixRatio);
  return textColor.hex();
};
