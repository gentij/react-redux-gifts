export const validateInput = inputs => {
    let errors = {};

    if(!inputs.giftName.trim()) {
        errors.giftName = 'Gift name must not be empty';
    }
    if(!inputs.description.trim()) {
        errors.description = 'Description must not be empty';
    }
    if(!inputs.giftersName.trim()) {
        errors.giftersName = 'Gifter\'s name must not be empty';
    }
    if(!inputs.image.trim()) {
        errors.image = 'Image must not be empty';
    }

    return errors;
}