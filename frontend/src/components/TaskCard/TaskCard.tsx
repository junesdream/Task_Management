import React from 'react';
import { Task } from '../../types/task';
import { StyledCard, StyledCardContent, StyledTypography } from './TaskCard.styles';
import { Button, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

interface TaskCardProps {
    task: Task;
    onDelete: (id: number) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onDelete }) => {
    return (
        <StyledCard>
            <StyledCardContent>
                <div>
                    <StyledTypography variant="h5">{task.title}</StyledTypography>
                    <StyledTypography variant="body2">{task.description}</StyledTypography>
                    <StyledTypography variant="body2">Due Date: {task.dueDate}</StyledTypography>
                    <StyledTypography variant="body2">Completed: {task.completed ? 'Yes' : 'No'}</StyledTypography>
                </div>
                <CardActions>
                    <Button size="small" color="error" onClick={() => onDelete(parseInt(task.id, 10))}>
                        Delete
                    </Button>
                    <Link to={`/tasks/${task.id}/update`}>
                        <Button size="small" color="secondary">
                            Update
                        </Button>
                    </Link>
                </CardActions>
            </StyledCardContent>
        </StyledCard>
    );
};

export default TaskCard;