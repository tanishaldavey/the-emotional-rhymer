import React from 'react';
import RhymesContainer from './RhymesContainer';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../reducers';

let testStore, testWrapper;

beforeEach(() => {
  testStore = createStore(rootReducer)

  testWrapper = render(
    <Provider store={testStore}>
      <BrowserRouter>
        <RhymesContainer />
      </BrowserRouter>
    </Provider>
  )
})

describe('RhymesContainer', () => {
  it('should render the word that was searched for and it\'s associated rhymes', () => {
    testStore.dispatch({
      type: 'GET_QUERIED_WORD',
      queriedWord: 'line'
    })

    testStore.dispatch({
      type: 'GET_RHYMES',
      rhymes: [
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
    })

    const { getByText } = testWrapper

    const queriedWord = getByText('line')
    const rhymes = getByText('sign', 'genuine')

    expect(queriedWord).toBeInTheDocument()
    expect(rhymes).toBeInTheDocument()
  });

  it('should render a message letting a user know if there were no rhymes found for the queried word', () => {
    testStore.dispatch({
      type: 'GET_QUERIED_WORD',
      queriedWord: 'line'
    })

    testStore.dispatch({
      type: 'GET_RHYMES',
      rhymes: []
    })

    const { getByText, getByTestId } = testWrapper

    const queriedWord = getByText('line')
    const errorHandlingMessage = getByTestId('no-rhymes-message')

    expect(queriedWord).toBeInTheDocument()
    expect(errorHandlingMessage).toBeInTheDocument()
  });

  it('should have a link to return to the homepage', () => {
    const { getByRole } = testWrapper

    const homeLink = getByRole('link')

    expect(homeLink).toBeInTheDocument()
  })
});
