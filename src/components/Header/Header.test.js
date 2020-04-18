import React from 'react';
import Header from './Header';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Header', () => {
  it('should render the contents of the header', () => {
    const { getByText } = render(<Header />)

    const headline = getByText('The Emotional Rhymer')
    const tagline = getByText('A rhyming dictionary for the emotional poet.')

    expect(headline).toBeInTheDocument()
    expect(tagline).toBeInTheDocument()
  });
})
