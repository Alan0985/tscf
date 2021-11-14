import React, { useState } from 'react';
import { UserDetail } from './Steps/UserDetail';
import { ColorOption } from './Steps/ColorOption';
import { AnimalOption } from './Steps/AnimalOption';
import { SelectChangeEvent } from '@mui/material/Select';

export const ContactForm = () =>
{
    const [step, setStep] = useState( 1 );
    const initialState = {
        email: '',
        password: '',
        color: '',
        animal: {
            bear: false,
            tiger: false,
            snake: false,
            donkey: false
        },
        typeOfAnimal: ''
    };
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

    // const onSelect = ( event: SelectChangeEvent<HTMLSelectElement> ) =>
    // {
    //     event.preventDefault();
    //     const { name, value } = event.target;
    //     setValues( { ...values, [name]: value } )
    // }

    const onChecked = ( event: React.ChangeEvent<HTMLInputElement> ) =>
    {
        const { name, checked } = event.target;
        setValues( { ...values, animal: { ...values.animal, [name]: checked } } )

    }

    return (
        <>
            {{
                1: <UserDetail nextStep={nextStep} onChange={onChange} values={values} />,
                2: <ColorOption prevStep={prevStep} nextStep={nextStep} onChange={onChange} values={values} />,
                3: <AnimalOption prevStep={prevStep} onChange={onChange} onChecked={onChecked} values={values} />,
            }[step]}
        </>
    )
}
