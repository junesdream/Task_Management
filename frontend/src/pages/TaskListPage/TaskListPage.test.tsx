import React from 'react';
import { render, screen } from '@testing-library/react';
import TaskListPage from './TaskListPage';
import { Task } from '../../types/task';
import taskService from '../../services/taskService';

const tasks: Task[] = [
    { id: '1', title: 'Task 1', description: 'Description 1', dueDate: new Date().toISOString(), completed: false },
    { id: '1', title: 'Task 1', description: 'Description 1', dueDate: new Date().toISOString(), completed: false }
];

jest.mock('../../services/taskService', () => ({
    getAllTasks: jest.fn(() => Promise.resolve(tasks)),
}));

test('renders task list page', async () => {
    render(<TaskListPage />);
    const task1Title = await screen.findByText(/Task 1/i);
    const task2Title = await screen.findByText(/Task 2/i);
    expect(task1Title).toBeInTheDocument();
    expect(task2Title).toBeInTheDocument();
});

export {};