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
});
