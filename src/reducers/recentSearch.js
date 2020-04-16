export const recentSearches = (state =[], action) => {
  switch (action.type) {
    case 'GET_RECENT_SEARCHES':
      if (state.length === 10) {
        state.pop
        return [action.recentSearchValue, ...state]
      } else {
        return [action.recentSearchValue, ...state]
      };
    default:
      return state;
  }
}
