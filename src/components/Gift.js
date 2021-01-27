import React, { useState } from 'react';
import { Card, Image, Button, Popup, Modal, Form } from 'semantic-ui-react';
import { useDispatch } from 'react-redux'
import FileBase from 'react-file-base64'

import { useForm } from '../utils/hooks'
import { deleteGift, editGift } from '../actions/actionCreators';

const Gift = ({ gift: {id, giftName, description, giftersName, image}}) => {
    const [openEdit, setOpenEdit] = useState(false);
    const [openMore, setOpenMore] = useState(false);
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();

    const { onChange, onSubmit, inputs, setInputs } = useForm(edit, {
        giftName,
        description,
        giftersName,
        image,
        id
    }, setErrors)

    function edit() {
        dispatch(editGift(inputs));
        setOpenEdit(false); 
    }

    const deleteHandler = id => {
        dispatch(deleteGift(id));
    }

    return (
        <>
        <Card>
        <Card.Content>
            <Popup 
                content={giftersName}
                inverted
                trigger={
                    <Image
                        floated='right'
                        size='mini'
                        src='https://react.semantic-ui.com/images/avatar/large/molly.png'
                    />
                }
            />
            <Card.Header>{giftName}</Card.Header>
            <Image
                size='medium'
                src={image}
            />
        </Card.Content>
        <Card.Content extra>
            <Button color='red' onClick={() => deleteHandler(id)}>Delete</Button>
            <Modal
                onClose={() => setOpenEdit(false)}
                onOpen={() => setOpenEdit(true)}
                open={openEdit}
                trigger={<Button type="button">Edit</Button>}
                >
                <Modal.Header>Edit</Modal.Header>
                <Modal.Content image>
                    <Form onSubmit={onSubmit} noValidate>
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
                        <Button type="submit" primary>Edit</Button>
                    </Form>
                </Modal.Content>
            </Modal>
        </Card.Content>
        </Card>
        <Modal
            onClose={() => setOpenMore(false)}
            onOpen={() => setOpenMore(true)}
            open={openMore}
            trigger={<Button>Show More</Button>}
            >
            <Modal.Header>{giftName} by {giftersName}</Modal.Header>
            <Modal.Content image>
                <Image size='medium' src={image} wrapped />
                <Modal.Description>
                <p>Description: {description}</p>
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => setOpenMore(false)}>Cancel</Button>
            </Modal.Actions>
        </Modal>
        </>
    )
}

export default Gift;
