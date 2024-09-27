import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import TaskDetailPage from './TaskDetailPage';
import { Task } from '../../types/task';
import taskService from '../../services/taskService';

const task: Task = {
    id: '1',
    title: 'Test Task',
    description: 'This is a test task',
    dueDate: '2022-12-31',
    completed: false,
};

jest.mock('../../services/taskService', () => ({
    getTaskById: jest.fn(() => Promise.resolve(task)),
}));

test('renders task detail page', async () => {
    render(
        <MemoryRouter initialEntries={['/tasks/1']}>
            <Route path="/tasks/:id">
                <TaskDetailPage />
            </Route>
        </MemoryRouter>
    );

    const titleElement = await screen.findByText(/Test Task/i);
    const descriptionElement = await screen.findByText(/This is a test task/i);
    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
});

export {};