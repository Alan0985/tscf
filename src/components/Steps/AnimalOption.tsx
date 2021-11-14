import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

type Props = {
    prevStep: any,
    onChange: any,
    // onChange: ( event: SelectChangeEvent<HTMLSelectElement> ) => void,
    values: any
}

const onSubmit = () =>
{
}

export const AnimalOption = ( { prevStep, onChange, values }: Props ) =>
{
    return (
        <>
            <FormControl
                component="fieldset"
                sx={{ m: 3 }}
                variant="standard"
            >
                <FormLabel component="legend">Animals:</FormLabel>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox checked={values.animal.bear} onChange={onChange} name="bear" />
                        }
                        label="Bear"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={values.animal.tiger} onChange={onChange} name="tiger" />
                        }
                        label="Tiger"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={values.animal.snake} onChange={onChange} name="snake" />
                        }
                        label="Snake"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox checked={values.animal.donkey} onChange={onChange} name="donkey" />
                        }
                        label="Donkey"
                    />
                </FormGroup>
                <FormHelperText>Multiple options can be selected</FormHelperText>

                <Button variant="contained" onClick={prevStep}>Back</Button>
                <Button variant="contained" onClick={onSubmit}>Submit</Button>
            </FormControl>
        </>
    )
}
