import React from 'react';
import Rhymes from './Rhymes';
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
        <Rhymes rhyme='glow'/>
      </BrowserRouter>
    </Provider>
  )
})

describe('Rhymes', () => {
  it('should render the correct rhyme to the page', () => {
    const { getByText } = testWrapper

    const rhyme = getByText('glow')

    expect(rhyme).toBeInTheDocument();
  });

  it('should be a link', () => {
    const { getByRole } = testWrapper

    const rhymeLink = getByRole('link', {name: 'glow'})

    expect(rhymeLink).toBeInTheDocument();
  });
});
