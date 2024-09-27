import React from 'react';
import { render, screen } from '@testing-library/react';
import CreateTaskPage from './CreateTaskPage';

test('renders create task form', () => {
    render(<CreateTaskPage />);
    const titleInput = screen.getByLabelText(/Title/i);
    const descriptionInput = screen.getByLabelText(/Description/i);
    const submitButton = screen.getByRole('button', { name: /Create Task/i });
    expect(titleInput).toBeInTheDocument();
    expect(descriptionInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
});

export {};