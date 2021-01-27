import { ADD_GIFT, DELETE_GIFT, EDIT_GIFT } from './actionTypes';

export const addGift = payload => {
    return {
        type: ADD_GIFT,
        payload
    }
}

export const deleteGift = payload => {
    return {
        type: DELETE_GIFT,
        id: payload
    }
}

export const editGift = payload => {
    return {
        type: EDIT_GIFT,
        payload
    }
}