import React, { useState, useEffect } from 'react';
import { UserDetail } from './Steps/UserDetail';
import { ColorOption } from './Steps/ColorOption';
import { AnimalOption } from './Steps/AnimalOption';
import { SelectChangeEvent } from '@mui/material/Select';


type Props = {
    email: string,
    password: string,
    color: string,
    animal: string,
    typeOfAnimal: string,
}

type stepProps = {
    step: number,
}


export const ContactForm = () =>
{
    const [step, setStep] = useState( 1 );
    const initialState = { email: '', password: '', color: '', animal: '', typeOfAnimal: '' };
    const [values, setValues] = useState( initialState );

    const nextStep = () =>
    {
        setStep( step + 1 )
    }

    const prevStep = () =>
    {
        setStep( step - 1 )
    }

    const onChange = ( event: React.ChangeEvent<HTMLInputElement> ) =>
    {
        event.preventDefault();
        const { name, value } = event.target;
        setValues( { ...values, [name]: value } )
    }

    const onSelect = ( event: SelectChangeEvent<HTMLSelectElement> ) =>
    {
        event.preventDefault();
        const { name, value } = event.target;
        setValues( { ...values, [name]: value } )
    }

    const { email, password, color, animal, typeOfAnimal } = initialState;

    return (
        <>
            {{
                1: <UserDetail nextStep={nextStep} onChange={onChange} values={values} />,
                2: <ColorOption prevStep={prevStep} nextStep={nextStep} onChange={onSelect} values={values} />,
                3: <AnimalOption />,
            }[step]}
        </>
    )
}
