import React, { useEffect, useState } from 'react';
import { Task } from '../../types/task';
import TaskCard from '../../components/TaskCard/TaskCard';
import taskService from '../../services/taskService';
import { TaskListContainer } from './TaskListPage.styles';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';

const TaskListPage: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        taskService.getAllTasks().then(setTasks);
    }, []);

    const handleDeleteTask = async (id: number) => {
        try {
            await taskService.deleteTask(id);
            setTasks(tasks.filter(task => task.id !== String(id)));
            window.location.href = '/';
        } catch (error) {
            console.error("Error deleting task:", error);
        }
    };

    return (
        <TaskListContainer>
            {tasks.map(task => (
                <TaskCard key={task.id} task={task} onDelete={handleDeleteTask} />
            ))}
            <Link to="/tasks/create">
                <Button label="Create Task" variant="contained" color="primary" />
            </Link>
        </TaskListContainer>
    );
};

export default TaskListPage;