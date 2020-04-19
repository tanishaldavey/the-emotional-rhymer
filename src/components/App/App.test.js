import React from 'react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../reducers';
import { findRhymingWords, findWordDetails } from '../../apiCalls';

jest.mock('../../apiCalls')

let testStore, testWrapper, rhymes, wordDetailsWithExamples, wordDetailsWithoutExamples;

beforeEach(() => {
  testStore = createStore(rootReducer)

  testWrapper = render(
    <Provider store={testStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  )

  rhymes = [{
    "word": "display",
    "score": 2051,
    "numSyllables": 2
    },
    {
    "word": "betray",
    "score": 1275,
    "numSyllables": 2
    },
    {
    "word": "portray",
    "score": 1198,
    "numSyllables": 2
  }]

  wordDetailsWithExamples = {
    word: 'display',
    partOfSpeech: 'verb',
    definition: 'to show, make visible or apparent',
    examples: ['National leaders will have to display the highest skills of statesmanship']
  }

  wordDetailsWithoutExamples = {
    word: 'betray',
    partOfSpeech: 'verb',
    definition: 'disappoint, prove undependable to; abandon, forsake'
  }
})

describe('App', () => {
  it('should be able to search for rhymes after submit button is clicked', async () => {

    findRhymingWords.mockResolvedValue(rhymes)

    const { getByText, getByPlaceholderText } = testWrapper

    const input = getByPlaceholderText('What word rhymes with...')
    const submitBtn = getByText('Submit')

    fireEvent.change(input, { target: {value: 'stay' }})
    fireEvent.click(submitBtn)

    const rhymesFound = await waitFor(() => getByText('display', 'betray', 'portray'))

    expect(rhymesFound).toBeInTheDocument()
  });

  it('should be able to get word details after clicking on a word from the rhymes list including examples of usage', async () => {

    findRhymingWords.mockResolvedValue(rhymes)

    const { getByText, getByPlaceholderText, getByRole } = testWrapper

    const input = getByPlaceholderText('What word rhymes with...')
    const submitBtn = getByText('Submit')

    fireEvent.change(input, { target: {value: 'stay' }})
    fireEvent.click(submitBtn)

    const rhymesFound = await waitFor(() => getByText('display', 'betray', 'portray'))

    findWordDetails.mockResolvedValue(wordDetailsWithExamples)

    const wordDetailsRetrieved = await waitFor(() => getByText('display', 'verb', 'to show, make visible or apparent', 'National leaders will have to display the highest skills of statesmanship'))

    expect(wordDetailsRetrieved).toBeInTheDocument();
  });

  it('should be able to get word details after clicking on a word from the rhymes list, but details doesn\'t include examples of usage', async () => {

    findRhymingWords.mockResolvedValue(rhymes)

    const { getByText, getByPlaceholderText, getByRole } = testWrapper

    const input = getByPlaceholderText('What word rhymes with...')
    const submitBtn = getByText('Submit')

    fireEvent.change(input, { target: {value: 'stay' }})
    fireEvent.click(submitBtn)

    const rhymesFound = await waitFor(() => getByText('display', 'betray', 'portray'))

    findWordDetails.mockResolvedValue(wordDetailsWithoutExamples)

    const wordDetailsRetrieved = await waitFor(() => getByText('betray', 'verb', 'disappoint, prove undependable to; abandon, forsake', 'We didn\'t find a usage example for this particular definition of betray. Try refreshing the page for an updated definition.'))

    expect(wordDetailsRetrieved).toBeInTheDocument();
  });
});
