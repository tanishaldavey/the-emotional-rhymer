export const recentSearches = (state = [], action) => {
  switch (action.type) {
    case 'GET_RECENT_SEARCHES':
      return action.recentSearches;
    default:
      return state;
    }
  }
