import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


type Props = {
    prevStep: any,
    onChange: any,
    onChecked: any,
    values: any
}

export const AnimalOption = ( { prevStep, onChecked, onChange, values }: Props ) =>
{
    const onSubmit = () =>
    {
        console.log( values )
    }
    return (
        <>
            <FormControl
                component="fieldset"
                sx={{ m: 3 }}
                variant="standard"
            >
                <FormLabel component="legend">Animals:</FormLabel>
                <FormHelperText>Multiple options can be selected</FormHelperText>

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox checked={values.animal.bear} onChange={onChecked} name="bear" />
                        }
                        label="Bear"
                    />

                    <FormControlLabel
                        control={
                            <Checkbox checked={values.animal.tiger} onChange={onChecked} name="tiger" />
                        }
                        label="Tiger"
                    />

                    {values.animal.tiger && (
                        <TextField
                            required
                            label="Type Of Tiger"
                            placeholder="Type Of Tiger"
                            multiline
                            name="typeOfAnimal"
                            value={values.typeOfAnimal}
                            onChange={onChange}
                        />
                    )}

                    <FormControlLabel
                        control={
                            <Checkbox checked={values.animal.snake} onChange={onChecked} name="snake" />
                        }
                        label="Snake"
                    />

                    <FormControlLabel
                        control={
                            <Checkbox checked={values.animal.donkey} onChange={onChecked} name="donkey" />
                        }
                        label="Donkey"
                    />
                    <Button variant="contained" onClick={prevStep}>Back</Button>
                    <Button variant="contained" onClick={onSubmit}>Submit</Button>
                </FormGroup>
            </FormControl>
        </>
    )
}
