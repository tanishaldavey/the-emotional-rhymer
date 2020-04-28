import React from 'react';
import Startup from './Startup';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Startup', () => {
    it('should render the correct information toe the page', () => {
        const { getByText } = render(<BrowserRouter>
            <Startup />
        </BrowserRouter>)

        const text = getByText('Begin by entering a word to search for in the input.')

        expect(text).toBeInTheDocument();
    });
});