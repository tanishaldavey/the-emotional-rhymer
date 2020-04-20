import * as actions from '.';

describe('actions', () => {
  it('should have a type of GET_RHYMES', () => {
    const rhymes = [
      {
        word: 'sign',
        score: 3647,
        numSyllables: 1
      },
      {
        word: 'genuine',
        score: 2035,
        numSyllables: 3
      }
    ]
    const expectedAction = {
      type: 'GET_RHYMES',
      rhymes: rhymes,
    }

    const result = actions.getRhymes(rhymes)

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of GET_QUERIED_WORD', () => {
    const queriedWord = 'line'

    const expectedAction = {
      type: 'GET_QUERIED_WORD',
      queriedWord: queriedWord
    }

    const result = actions.getQueriedWord(queriedWord)

    expect(result).toEqual(expectedAction)
  });

  it('should have a type of GET_WORD_DETAILS', () => {
    const wordDetails = {
      word: 'genuine',
      partOfSpeech: 'adjective',
      definition: 'not pretended; felt or expressed',
      examples: ['genuine emotion']
    }

    const expectedAction = {
      type: 'GET_WORD_DETAILS',
      wordDetails: wordDetails
    }

    const result = actions.getWordDetails(wordDetails)

    expect(result).toEqual(expectedAction)
  });

  it('should have a type of GET_RECENT_SEARCHES', () => {
    const recentSearches = ['line', 'try', 'stay', 'bond']

    const expectedAction = {
      type: 'GET_RECENT_SEARCHES',
      recentSearches: recentSearches
    }

    const result = actions.getRecentSearches(recentSearches)

    expect(result).toEqual(expectedAction)
  });

  it('should have a type of UPDATE_ERROR', () => {
    const error = 'Your request was unsuccessful. Please try again.'

    const expectedAction = {
      type: 'UPDATE_ERROR',
      errorMessage: error
    }

    const result = actions.updateError('Your request was unsuccessful. Please try again.')

    expect(result).toEqual(expectedAction)
  });
});
