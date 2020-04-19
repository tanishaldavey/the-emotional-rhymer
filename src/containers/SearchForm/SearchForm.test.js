import React from 'react';
import SearchForm from './SearchForm';
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
        <SearchForm />
      </BrowserRouter>
    </Provider>
  )
})

describe('SearchForm', () => {
  it('should render the correct elements to the page', () => {

  });
});
