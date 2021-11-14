import React from 'react';
import { ThemeProvider } from '@mui/material/styles';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

type Props = {
    nextStep: any,
    onChange: ( e: React.ChangeEvent<HTMLInputElement> ) => void,
    values: any,
    errors: any
}

type textFieldProps = {
    email: string,
    password: string,
}

export const UserDetail = ( { nextStep, onChange, values, errors }: Props ) =>
{
    const { email, password }: textFieldProps = values;
    return (
        <>
            <TextField
                error={errors.email ? true : false}
                helperText={errors.email}
                label={errors.email ? "Error" : "Email"}
                variant="outlined"
                type="email"
                name="email"
                value={email}
                onChange={onChange}
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
            />

            <Button variant="contained" onClick={nextStep}>Next</Button>
        </>
    )
}