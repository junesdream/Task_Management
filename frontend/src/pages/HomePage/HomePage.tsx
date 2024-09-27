import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, Container } from '@mui/material';


const HomePage: React.FC = () => {
    return (
        <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '200px'}}>
            <Typography variant="h4" component="h1" gutterBottom>
                Welcome to Task Management
            </Typography>
            <Typography variant="h4" component="h1" gutterBottom sx={{  fontFamily: "Poppins", fontWeight: 500, fontStyle: 'normal', color: 'darkblue' }}>
                To the Task Lists
            </Typography>
            <Link to="/tasks/create" style={{ textDecoration: 'none' }}>
                <Button variant="contained" color="primary">
                    Create Task
                </Button>
            </Link>
        </Container>
    );
};

export default HomePage;