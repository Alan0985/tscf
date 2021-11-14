import { ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

type Props = {
    nextStep: any,
    onChange: ( e: React.ChangeEvent<HTMLInputElement> ) => void,
    values: any
}

type textFieldProps = {
    email: string,
    password: string,
}


export const UserDetail = ( { nextStep, onChange, values }: Props ) =>
{
    const { email, password }: textFieldProps = values;
    return (
        <>
            <TextField
                label="Email"
                variant="outlined"
                type="email"
                name="email"
                value={email}
                onChange={onChange}
            />

            <TextField
                label="Password"
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