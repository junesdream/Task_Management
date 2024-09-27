import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {TextField, Button, Checkbox, FormControlLabel, Typography} from '@mui/material';
import taskService from '../../services/taskService';
import { CreateTaskForm } from './CreateTaskPage.styles';

const CreateTaskPage: React.FC = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [completed, setCompleted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await taskService.createTask({ title, description, dueDate, completed });
        navigate('/tasks');
    };

    return (
        <div>
            <Typography>
        <h1>What's on your mind and <br /> what should you do for your future? </h1>
            </Typography>
    <CreateTaskForm onSubmit={handleSubmit}>
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
                Create Task
            </Button>
        </CreateTaskForm>
        </div>);
};

export default CreateTaskPage;