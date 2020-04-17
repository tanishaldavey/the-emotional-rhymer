import { wordDetails } from './wordDetails';

describe('wordDeails', () => {
  it('should return the initial state', () => {
    const expectedResult = {}

    const result = wordDetails(undefined, {})

    expect(result).toEqual(expectedResult)
  });

  it('should return state with new word details', () => {
    const expectedResult = {
      word: 'show',
      partOfSpeect: 'verb',
      defintion: 'give evidence of, as of records',
      examples: ['The diary shows his distress that evening']
    }
    const wordDetailsResult = {
      word: 'show',
      partOfSpeect: 'verb',
      defintion: 'give evidence of, as of records',
      examples: ['The diary shows his distress that evening']
    }

    const result = wordDetails({}, {type: 'GET_WORD_DETAILS', wordDetails: wordDetailsResult})

    expect(result).toEqual(expectedResult)
  });

  it('should be able to have only one word details object in state at a time', () => {
    const initialState = {
      word: 'show',
      partOfSpeect: 'verb',
      defintion: 'give evidence of, as of records',
      examples: ['The diary shows his distress that evening']
    }

    const expectedResult = {
      word: 'sincere',
      partOfSpeect: 'adjective',
      defintion: 'characterized by a firm and humorless belief in the validity of your opinions',
      examples: ['an entirely sincere and cruel tyrant']
    }

    const wordDetailsResult = {
      word: 'sincere',
      partOfSpeect: 'adjective',
      defintion: 'characterized by a firm and humorless belief in the validity of your opinions',
      examples: ['an entirely sincere and cruel tyrant']
    }

    const result = wordDetails(initialState, {type: 'GET_WORD_DETAILS', wordDetails: wordDetailsResult})
  });
})
