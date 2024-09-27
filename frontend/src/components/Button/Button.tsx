import React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';
import { StyledButton } from './Button.styles';

interface ButtonProps extends MuiButtonProps {
    label: string;
}

const Button: React.FC<ButtonProps> = ({ label, ...rest }) => {
    return (
        <StyledButton {...rest}>
            {label}
        </StyledButton>
    );
};

export default Button;