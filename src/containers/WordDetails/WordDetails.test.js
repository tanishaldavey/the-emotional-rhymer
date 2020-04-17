import React from 'react';
import WordDetails from './WordDetails';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../reducers';

const testStore = createStore(rootReducer)

const testWrapper = render(
  <Provider store={testStore}>
    <BrowserRouter>
      <WordDetails />
    </BrowserRouter>
  </Provider>
)

testStore.dispatch({
  type: 'GET_WORD_DETAILS',
  wordDetails: {
    word: 'show',
    partOfSpeech: 'verb',
    definition: 'give evidence of, as of records',
    examples: ['The diary shows his distress that evening']
  }
})

describe('WordDetails', () => {
  it('should render word details to the page', ()=> {
    const { getByText } = testWrapper

    const word = getByText('show')
    const partOfSpeech = getByText('verb')
    const definition = getByText('give evidence of, as of records')
    const example = getByText('The diary shows his distress that evening')

    expect(word).toBeInTheDocument()
    expect(partOfSpeech).toBeInTheDocument()
    expect(definition).toBeInTheDocument()
    expect(example).toBeInTheDocument()
  })
})
