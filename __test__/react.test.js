import React from "react";
import { render, fireEvent } from '@testing-library/react';
import Data from './client/pages/Dashboard/components/Data'

describe('Data', () => {
    it('renders correctly', () => {
        const { getByText } = render(<Data title='Test Title' />);
        expect(getByText('Test Title')).toBeInTheDocument();
    });
    it('toggles display state when clicked', () => {
        const { getByRole, rerender } = render(<Data title='Test Title' />);

        expect(getByRole('button').querySelector('.data-btn-icon')).toContainHTML('svg');

        fireEvent.click(getByRole('button'));

        rerender(<Data title='Test Title' />);

        expect(getByRole('button').querySelector('.data-btn-icon')).toContainHTML('svg');
    });
});