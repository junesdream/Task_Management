// src/Router.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import TaskListPage from './pages/TaskListPage/TaskListPage';
import TaskDetailPage from './pages/TaskDetailPage/TaskDetailPage';
import CreateTaskPage from './pages/CreateTaskPage/CreateTaskPage';

const AppRouter: React.FC = () => {
    return (
        <Router>
            <MainLayout>
                <Routes>
                    <Route path="/tasks/create" element={<CreateTaskPage />} />
                    <Route path="/tasks/:id" element={<TaskDetailPage />} />
                    <Route path="/tasks" element={<TaskListPage />} />
                    <Route path="/" element={<TaskListPage />} />
                </Routes>
            </MainLayout>
        </Router>
    );
};

export default AppRouter;