import React from 'react';
import { render, screen } from '@testing-library/react';
import TaskCard from './TaskCard';
import { Task } from '../../types/task';

const task: Task = {
    id: '1',
    title: 'Test Task',
    description: 'This is a test task',
    dueDate: '2022-12-31',
    completed: false,
};

test('renders task card with title and description', () => {
    render(<TaskCard task={task} onDelete={() => {}} />);
    const titleElement = screen.getByText(/Test Task/i);
    const descriptionElement = screen.getByText(/This is a test task/i);
    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
});

export {};