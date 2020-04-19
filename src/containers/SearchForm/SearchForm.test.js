import React from 'react';
import SearchForm from './SearchForm';
import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
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
        <SearchForm />
      </BrowserRouter>
    </Provider>
  )
})

describe('SearchForm', () => {
  it('should render the correct elements to the page', () => {
    const { getByText, getByPlaceholderText } = testWrapper

    const input = getByPlaceholderText('What word rhymes with...')
    const submitBtn = getByText('Submit')
    const recentSearchesBtn = getByText('Recent Searches')

    expect(input).toBeInTheDocument();
    expect(input.value).toBe('');
    expect(submitBtn).toBeInTheDocument();
    expect(recentSearchesBtn).toBeInTheDocument();
  });

  it('should update the input\'s value when a user types into the input', () => {
    const { getByText, getByPlaceholderText } = testWrapper

    const input = getByPlaceholderText('What word rhymes with...')

    fireEvent.change(input, { target: { value: 'broken' }})

    expect(input.value).toBe('broken');
  })
});
