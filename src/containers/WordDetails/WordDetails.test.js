import React from 'react';
import WordDetails from './WordDetails';
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
        <WordDetails />
      </BrowserRouter>
    </Provider>
  )
})

describe('WordDetails', () => {
  it('should render word details to the page', ()=> {
    testStore.dispatch({
      type: 'GET_WORD_DETAILS',
      wordDetails: {
        word: 'show',
        partOfSpeech: 'verb',
        definition: 'give evidence of, as of records',
        examples: ['The diary shows his distress that evening']
      }
    })

    const { getByText } = testWrapper

    const word = getByText('show')
    const partOfSpeech = getByText('verb')
    const definition = getByText('give evidence of, as of records')
    const example = getByText('The diary shows his distress that evening')

    expect(word).toBeInTheDocument()
    expect(partOfSpeech).toBeInTheDocument()
    expect(definition).toBeInTheDocument()
    expect(example).toBeInTheDocument()

  });

  it('should render a message letting a user know there are no examples of usage for the word they are getting the details for', () => {
    testStore.dispatch({
      type: 'GET_WORD_DETAILS',
      wordDetails: {
        word: 'show',
        partOfSpeech: 'verb',
        definition: 'give evidence of, as of records'
      }
    })

    const { getByText, debug } = testWrapper

    const errorHandlingMessage = getByText('We didn\'t find a usage example for this particular definition of show. Try refreshing the page for an updated definition.');

    expect(errorHandlingMessage).toBeInTheDocument()
  });

  it('should render a link to go to the homepage', () => {
    const { getByRole } = testWrapper

    const homeLink = getByRole('link', 'Home')

    expect(homeLink).toBeInTheDocument();
  })
})
