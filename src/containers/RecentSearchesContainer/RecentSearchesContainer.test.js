import React from 'react';
import RecentSearchesContainer from './RecentSearchesContainer';
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
        <RecentSearchesContainer />
      </BrowserRouter>
    </Provider>
  )
})

describe('RecentSearchesContainer', () => {
  it('should render a message to the user if they haven\'t searched for any words yet', () => {
    testStore.dispatch({
      type: 'GET_RECENT_SEARCHES',
      recentSearches: []
    })

    const { getByText } = testWrapper

    const errorHandlingMessage = getByText('You haven\'t searched for anything yet.')

    expect(errorHandlingMessage).toBeInTheDocument()
  });
});
