import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Task } from '../../types/task';
import TaskCard from '../../components/TaskCard/TaskCard';
import taskService from '../../services/taskService';
import { TaskDetailContainer } from './TaskDetailPage.styles';
import { Button } from '@mui/material';

const TaskDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [task, setTask] = useState<Task | null>(null);

    useEffect(() => {
        if (id) {
            taskService.getTaskById(parseInt(id, 10)).then(setTask);
        }
    }, [id]);

    const handleDelete = async (id: number): Promise<void> => {
        await taskService.deleteTask(id);
        navigate('/tasks');
    };

    if (!task) return <div>Loading...</div>;

    return (
        <TaskDetailContainer>
            <TaskCard task={task} onDelete={handleDelete} />
        </TaskDetailContainer>
    );
};

export default TaskDetailPage;