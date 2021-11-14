import React, { useState, useEffect } from 'react';
import validator from 'validator';

import { UserDetail } from './Steps/UserDetail';
import { ColorOption } from './Steps/ColorOption';
import { AnimalOption } from './Steps/AnimalOption';
import { SelectChangeEvent } from '@mui/material/Select';

type errorProps = {
    email: string,
    password: string,
}

export const ContactForm = () =>
{
    const [step, setStep] = useState( 1 );
    const [errors, setErrors] = useState( { email: '', password: '' } )

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

    useEffect( () => { }, [errors] )

    const nextStep = () =>
    {
        setErrors( validate( values ) )
        if ( errors.email || errors.password )
        {
            return;
        } else
        {
            setStep( step + 1 );
        }
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

    const validate = ( values: errorProps ) =>
    {
        let errors = { email: '', password: '' }

        if ( !validator.isEmail( values.email ) )
        {
            errors.email = "Please input a valid Email";
        }

        if ( validator.isEmpty( values.email ) )
        {
            errors.email = "Email is required";
        }

        if ( !validator.isLength( values.password, { min: 8 } ) )
        {
            errors.password = "Password must be at least 8 characters";
        }

        if ( validator.isEmpty( values.password ) )
        {
            errors.password = "Password is required";
        }
        return errors;
    }

    return (
        <>
            {{
                1: <UserDetail errors={errors} nextStep={nextStep} onChange={onChange} values={values} />,
                2: <ColorOption prevStep={prevStep} nextStep={nextStep} onChange={onChange} values={values} />,
                3: <AnimalOption prevStep={prevStep} onChange={onChange} onChecked={onChecked} values={values} />,
            }[step]}
        </>
    )
}
