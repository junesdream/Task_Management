import { styled } from '@mui/material/styles';
import { Container, Typography, Button } from '@mui/material';

export const StyledContainer = styled(Container)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
});

export const StyledTypography = styled(Typography)({
    marginBottom: '20px',
    padding: '20px',
});

export const StyledButton = styled(Button)({
    textDecoration: 'none',
});