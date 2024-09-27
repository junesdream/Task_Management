import { styled } from '@mui/material/styles';
import {Typography} from "@mui/material";

export const CreateTaskForm = styled('form')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '32px',
});

export const StyledTypography = styled(Typography)({
    marginBottom: '20px',
    padding: '20px',
    fontFamily: "Poppins", fontWeight: 500, fontStyle: 'normal', color: 'darkblue'
});