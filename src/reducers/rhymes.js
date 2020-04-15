export const rhymes = (state = [], action) {
  switch (action.type) {
    case 'GET_RHYMES':
      return [...action.rhymes];
    default:
      return state;
  }
}
