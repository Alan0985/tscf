import React, { useState, useEffect } from 'react';
import { UserDetail } from './Steps/UserDetail';
import { ColorOption } from './Steps/ColorOption';
import { AnimalOption } from './Steps/AnimalOption';

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

    const nextStep = ( { step }: stepProps ) =>
    {
        setStep( step + 1 )
    }

    const prevStep = ( { step }: stepProps ) =>
    {
        setStep( step - 1 )
    }

    const onChange = ( e: React.ChangeEvent<HTMLInputElement> ) =>
    {
        e.preventDefault();
        const { name, value } = e.target;
        setValues( { ...values, [name]: value } )
    }

    const { email, password, color, animal, typeOfAnimal } = initialState;

    return (
        <>
            {{
                // 1: <UserDetail nextStep={nextStep} onChange={onChange} values={values} />,
                1: <UserDetail />,
                2: <ColorOption />,
                3: <AnimalOption />,
            }[1 || step]}
        </>
    )
}
