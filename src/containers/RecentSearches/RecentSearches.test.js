import React from 'react';
import RecentSearches from './RecentSearches';
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
        <RecentSearches
          recentSearch={'shame'}/>
      </BrowserRouter>
    </Provider>
  )
})

describe('RecentSearches', () => {
  it('should render the correct rhyme to the page', () => {
    const { getByText } = testWrapper

    const recentSearchValue = getByText('shame')

    expect(recentSearchValue).toBeInTheDocument();
  });

  it('should be a link', () => {
    const { getByRole } = testWrapper

    const recentSearchLink = getByRole('link', {name: 'shame'})

    expect(recentSearchLink).toBeInTheDocument();
  });
});
