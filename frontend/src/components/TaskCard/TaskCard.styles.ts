import { styled } from '@mui/material/styles';
import { Card, CardContent, Typography } from '@mui/material';

export const StyledCard = styled(Card)({
    width: '300px',
    height: '200px',
    marginBottom: '16px',
});

export const StyledCardContent = styled(CardContent)({
    padding: '16px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
});

export const StyledTypography = styled(Typography)({
    fontWeight: 'bold',
});