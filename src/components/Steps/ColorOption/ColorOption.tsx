import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

import { StyledColorOption } from './ColorOption.style';

type Props = {
    nextStep: any,
    prevStep: any,
    onChange: any,
    values: any
}

export const ColorOption = ( { prevStep, nextStep, onChange, values }: Props ) =>
{
    return (
        <StyledColorOption>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="color">Color</InputLabel>
                <Select
                    labelId="color"
                    name="color"
                    value={values.color}
                    label="Color"
                    onChange={onChange}
                >
                    <MenuItem value='blue'>Blue</MenuItem>
                    <MenuItem value='green'>Green</MenuItem>
                    <MenuItem value='red'>Red</MenuItem>
                    <MenuItem value='black'>Black</MenuItem>
                    <MenuItem value='brown'>Brown</MenuItem>
                </Select>
                <FormHelperText>Only one option may be selected</FormHelperText>
            </FormControl>
            <div>
                <Button variant="contained" onClick={prevStep}>Back</Button>
                <Button variant="contained" onClick={nextStep}>Next</Button>
            </div>
        </StyledColorOption>
    )
}