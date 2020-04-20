import { errorMessage } from './errorMessage';

describe('errorMessage', () => {
  it('should return an initial state', () => {
    const expectedResult = ''

    const result = errorMessage(undefined, {})

    expect(result).toEqual(expectedResult)
  });

  it('should return state with an error message', () => {
    const expectedResult = 'Your request was unsuccessful. Please try again.'

    const result = errorMessage('', {type: 'UPDATE_ERROR', errorMessage: 'Your request was unsuccessful. Please try again.'})

    expect(result).toEqual(expectedResult)
  })
})
