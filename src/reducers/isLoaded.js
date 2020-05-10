export const isLoaded = (state = false, action) => {
    switch (action.type) {
        case 'UPDATE_LOADING_STATUS':
            return action.isLoaded;
        default:
            return state;
    }
}