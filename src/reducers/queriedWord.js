export const queriedWord = (state = '', action) => {
  switch (action.type) {
    case 'GET_QUERIED_WORD':
      return action.queriedWord;
    default:
      return state;
  }
}
