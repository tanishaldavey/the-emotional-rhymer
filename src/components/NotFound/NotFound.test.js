import React from 'react';
import NotFound from './NotFound';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('NotFound', () => {
  it('should render the contents of the NotFound page', () => {
    const { getByText, getByRole } = render(<BrowserRouter>
      <NotFound />
    </BrowserRouter>)

    const message = getByText('We can\'t find the page you\'re looking for.')
    const homeLink = getByRole('link', {name: 'Home'})

    expect(message).toBeInTheDocument();
    expect(homeLink).toBeInTheDocument();
  });
});
