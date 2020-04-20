export const rhymeError = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_RHYME_ERROR':
      return action.rhymeError;
    default:
      return state;
  }
}
