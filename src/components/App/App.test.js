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

let testStore, testWrapper, rhymes;

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

});
