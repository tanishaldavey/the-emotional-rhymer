export const wordDetailsError = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_WORD_DETAILS_ERROR':
      return action.wordDetailsError;
    default:
      return state;
    }
  }
