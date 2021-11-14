import React, { useState } from 'react';
import validator from 'validator';
import { Typography } from '@mui/material';

import { UserDetail } from './Steps/UserDetail/UserDetail';
import { ColorOption } from './Steps/ColorOption/ColorOption';
import { AnimalOption } from './Steps/AnimalOption/AnimalOption';

import { StyledContactForm } from './ContactForm.style';

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

    const onChange = ( event: React.ChangeEvent<HTMLInputElement> ) =>
    {
        event.preventDefault();
        const { name, value } = event.target;
        setValues( { ...values, [name]: value } )
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
            errors.password = "Password must be longer than 8";
        }

        if ( validator.isEmpty( values.password ) )
        {
            errors.password = "Password is required";
        }
        return errors;
    }

    const onBlur = ( event: React.FocusEvent<HTMLInputElement> ) =>
    {
        setErrors( validate( values ) )
    }

    const nextStep = () =>
    {
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

    const onChecked = ( event: React.ChangeEvent<HTMLInputElement> ) =>
    {
        const { name, checked } = event.target;
        setValues( { ...values, animal: { ...values.animal, [name]: checked } } )
    }

    return (
        <StyledContactForm>
            <header>
                <Typography variant="h4">Contact Form</Typography>
            </header>
            {{
                1: <UserDetail
                    errors={errors}
                    nextStep={nextStep}
                    onChange={onChange}
                    onBlur={onBlur}
                    values={values}
                />,
                2: <ColorOption
                    prevStep={prevStep}
                    nextStep={nextStep}
                    onChange={onChange}
                    values={values}
                />,
                3: <AnimalOption
                    prevStep={prevStep}
                    onChange={onChange}
                    onChecked={onChecked}
                    values={values}
                />,
            }[step]}
        </StyledContactForm>
    )
}
