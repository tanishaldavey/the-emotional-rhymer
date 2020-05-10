import React from 'react';
import Navigation from './Navigation';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Navigation', () => {
  it('should be able to render the correct information', () => {
    const { getByText } = render(<BrowserRouter>
      <Navigation />
    </BrowserRouter>)

    const about =getByText('About')

    expect(about).toBeInTheDocument()

  });

  it('should contain links to "about" and "contact"', () => {
    const { getByRole } = render(<BrowserRouter>
      <Navigation />
    </BrowserRouter>)

    const about =getByRole('link', {'name': 'About'})

    expect(about).toBeInTheDocument()
  });;
})
