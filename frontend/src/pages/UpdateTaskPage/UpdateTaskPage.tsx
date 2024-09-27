import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TextField, Button, Checkbox, FormControlLabel } from '@mui/material';
import taskService from '../../services/taskService';
import { UpdateTaskForm } from './UpdateTaskPage.styles';

const UpdateTaskPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        if (id) {
            taskService.getTaskById(Number(id)).then(task => {
                setTitle(task.title);
                setDescription(task.description);
                setDueDate(task.dueDate);
                setCompleted(task.completed);
            });
        }
    }, [id]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await taskService.updateTask(Number(id), {id: Number(id).toString(), title, description, dueDate, completed });
        navigate('/tasks');
    };

    return (
        <UpdateTaskForm onSubmit={handleSubmit}>
            <TextField
                label="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                fullWidth
                margin="normal"
                multiline
                rows={4}
            />
            <TextField
                label="Due Date"
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={completed}
                        onChange={(e) => setCompleted(e.target.checked)}
                        color="primary"
                    />
                }
                label="Completed"
            />
            <Button type="submit" variant="contained" color="primary">
                Update Task
            </Button>
        </UpdateTaskForm>
    );
};

export default UpdateTaskPage;