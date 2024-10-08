
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage/HomePage';
import TaskListPage from './pages/TaskListPage/TaskListPage';
import TaskDetailPage from './pages/TaskDetailPage/TaskDetailPage';
import CreateTaskPage from './pages/CreateTaskPage/CreateTaskPage';
import UpdateTaskPage from './pages/UpdateTaskPage/UpdateTaskPage';

const App: React.FC = () => {
    return (
        <Router>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/tasks/create" element={<CreateTaskPage />} />
                    <Route path="/tasks/:id/update" element={<UpdateTaskPage />} />
                    <Route path="/tasks/:id" element={<TaskDetailPage />} />
                    <Route path="/tasks" element={<TaskListPage />} />
                    <Route path="/" element={<TaskListPage />} />
                </Routes>
            </MainLayout>
        </Router>
    );
};

export default App;