import { useState } from 'react';

import { validateInput } from './validate';

export const useForm = (callback, initialState = {}, setErrors) => {
    const [inputs, setInputs] = useState(initialState)
    const onChange = event => {
        setInputs({...inputs, [event.target.name]: event.target.value})
    }

    const onSubmit = async event => {
        event.preventDefault()
        const errors =  await validateInput(inputs);
        if( Object.keys(errors).length > 0 ) {
            setErrors(errors);
            return errors;
        }
        setErrors({});
        callback();
    }

    return {
        onChange,
        onSubmit,
        inputs,
        setInputs
    }
}