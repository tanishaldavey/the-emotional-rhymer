import { queriedWord } from './queriedWord';

describe('queriedWord', () => {
  it('should return an initial state', () => {
    const expectedResult = '';

    const result = queriedWord(undefined, {})

    expect(result).toEqual(expectedResult)
  });

  it('should return state with a new queriedWord', () => {
    const expectedResult = 'long'

    const result = queriedWord('', {type: 'GET_QUERIED_WORD', queriedWord: 'long'})

    expect(result).toEqual(expectedResult)
  });

  it('should be able to have only one string in state at a time', () => {
    const expectedResult = 'cheer'

    const result = queriedWord('long', {type: 'GET_QUERIED_WORD', queriedWord: 'cheer'})

    expect(result).toEqual(expectedResult)
  });
})
