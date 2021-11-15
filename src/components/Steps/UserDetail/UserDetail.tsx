import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { StyledUserDetail } from './UserDetail.style';

type Props = {
    nextStep: any,
    onChange: ( e: React.ChangeEvent<HTMLInputElement> ) => void,
    onBlur: ( e: React.FocusEvent<HTMLInputElement> ) => void,
    values: any,
    errors: any
}

type textFieldProps = {
    email: string,
    password: string,
}

export const UserDetail = ( { nextStep, onChange, onBlur, values, errors }: Props ) =>
{
    const { email, password }: textFieldProps = values;
    return (
        <StyledUserDetail>
            <TextField
                error={errors.email ? true : false}
                helperText={errors.email}
                label={errors.email ? "Error" : "Email"}
                variant="outlined"
                type="email"
                name="email"
                value={email}
                onChange={onChange}
                onBlur={onBlur}
            />

            <TextField
                error={errors.password ? true : false}
                helperText={errors.password}
                label={errors.password ? "Error" : "Password"}
                variant="outlined"
                type="password"
                name="password"
                value={password}
                onChange={onChange}
                onBlur={onBlur}

            />

            <Button variant="contained" onClick={nextStep}>Next</Button>
        </StyledUserDetail >
    )
}