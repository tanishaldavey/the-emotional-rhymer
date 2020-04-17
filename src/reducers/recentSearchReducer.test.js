import { recentSearches } from './recentSearch';

describe('recentSearch', () => {
  it('should return an intial state', () => {
    const expectedResult = []

    const result = recentSearches(undefined, {})

    expect(result).toEqual(expectedResult);
  });

  it('should be able to add a new word to the array in state if there are less han 10 words in the array', () => {
    const expectedResult = ['hello', 'try', 'life', 'ordeal', 'stay']

    const updatedRecentSearchResult = ['hello', 'try', 'life', 'ordeal', 'stay']

    const initialState = ['try', 'life', 'ordeal', 'stay']

    const result = recentSearches(initialState, {type: 'GET_RECENT_SEARCHES', recentSearches: updatedRecentSearchResult})

    expect(result).toEqual(expectedResult)
  });

  it('should remove the last word of the array in state if there are 10 words in that array, and add the new word', () => {
    const expectedResult = ['token', 'hello', 'try', 'life', 'ordeal', 'stay', 'lake', 'round', 'trite', 'morning']

    const updatedRecentSearchResult = ['token', 'hello', 'try', 'life', 'ordeal', 'stay', 'lake', 'round', 'trite', 'morning']

    const initialState = ['hello', 'try', 'life', 'ordeal', 'stay', 'lake', 'round', 'trite', 'morning', 'far']

    const result = recentSearches(initialState, {type: 'GET_RECENT_SEARCHES', recentSearches: updatedRecentSearchResult})

    expect(result).toEqual(expectedResult)
  });
})
