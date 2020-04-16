export const wordDetails = (state = {}, action) => {
  switch (action.type) {
    case 'GET_WORD_DETAILS':
      return action.wordDetails;
    default:
      return state;
  }
}
