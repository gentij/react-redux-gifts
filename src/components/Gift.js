import React, { useState } from 'react';
import { Card, Image, Button, Popup, Modal } from 'semantic-ui-react';

const Gift = ({ gift: {id, giftName, description, giftersName, image}, deleteGift}) => {
    const [open, setOpen] = useState(false);

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
            <Button color='red' onClick={() => deleteGift(id)}>Delete</Button>
            <Button>Edit</Button>
        </Card.Content>
        </Card>
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
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
                <Button onClick={() => setOpen(false)}>Cancel</Button>
            </Modal.Actions>
        </Modal>
        </>
    )
}

export default Gift;
