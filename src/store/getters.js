export const apiIsValid = state => state.api.providers[state.api.selectedProvider].valid;

export const currentAppColor = state => state.colors.primary;

export const currentSearchTerm = state => state.search.term;

export const currentColor = (state) => {
  switch (state.route.path) {
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
