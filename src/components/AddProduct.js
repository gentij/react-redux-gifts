import React,{ useState } from 'react'
import { Form, Button } from 'semantic-ui-react'
import FileBase from 'react-file-base64'
import { v4 as uuidv4 } from 'uuid';

import { useForm } from '../utils/hooks'

const AddProduct = ({ gifts, setGifts }) => {
    const [errors, setErrors] = useState({});

    let id = uuidv4();

    const { onChange, onSubmit, inputs, setInputs } = useForm(addProduct, {
        giftName: '',
        description: '',
        giftersName: '',
        image: '',
        id
    }, setErrors)

    function addProduct() {
        setInputs({...inputs, id: uuidv4()});
        setGifts([...gifts, inputs]);
        setInputs({
            giftName: '',
            description: '',
            giftersName: '',
            image: '',
            id: uuidv4()
        })
    }

    return (
        <div className="form-container">
            <Form onSubmit={onSubmit} noValidate>
                <h3>Add Gift</h3>
                <Form.Input
                    label="Gift name"
                    placeholder="Gift Name..."
                    name="giftName"
                    type="text"
                    value={inputs.giftName}
                    error={errors.giftName ? true : false}
                    onChange={onChange}
                />
                <Form.Input
                    label="Description"
                    placeholder="Description..."
                    name="description"
                    type="text"
                    value={inputs.description}
                    error={errors.description ? true : false}
                    onChange={onChange}
                />
                <Form.Input
                    label="Gifter's name"
                    placeholder="Gifter's name..."
                    name="giftersName"
                    type="text"
                    value={inputs.giftersName}
                    error={errors.giftersName ? true : false}
                    onChange={onChange}
                />
                <div className="image-input">
                    <FileBase 
                        type="file"
                        mutliple={false}
                        onDone={({base64}) => setInputs({...inputs, image: base64})}
                    />
                </div>
                <Button type="submit" primary>Add Gift</Button>
            </Form>
            {Object.keys(errors).length > 0 && (
                <div className="ui error message">
                    <ul className="list"> 
                        {Object.values(errors).map(value => (
                            <li key={value}>{value}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default AddProduct
