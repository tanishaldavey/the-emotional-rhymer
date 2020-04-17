import { rhymes } from './rhymes';

describe('rhymes', () => {
  it('should return the initial state', () => {
    const expectedResult = []

    const result = rhymes(undefined, {})

    expect(result).toEqual(expectedResult)
  });

  it('should return state with new rhymes', () => {
    const expectedResult = [
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

    const rhymesResults = [
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

    const result = rhymes([], {type: 'GET_RHYMES', rhymes: rhymesResults})

    expect(result).toEqual(expectedResult)
  });

  it('should be able to replace the current value in state', () => {
    const expectedResult = [
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
    const rhymesResult = [
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

    const initialState = [
      {
        word: 'swell',
        score: 1111,
        numSyllables: 1
      }
    ]

    const result = rhymes(initialState, {type: 'GET_RHYMES', rhymes: rhymesResult})

    expect(result).toEqual(expectedResult)

  })
})
