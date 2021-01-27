import { ADD_GIFT, DELETE_GIFT, EDIT_GIFT } from '../actions/actionTypes';

const initialState = {
    gifts: JSON.parse(localStorage.getItem('gifts')) ? JSON.parse(localStorage.getItem('gifts')) : []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_GIFT:
            return {...state, gifts: [...state.gifts, action.payload]};
        case DELETE_GIFT:
            return {...state, gifts: state.gifts.filter(gift => gift.id !== action.id)};
        case EDIT_GIFT:
            state.gifts.forEach(gift => {
                if(gift.id === action.payload.id) {
                    gift.giftName = action.payload.giftName;
                    gift.description = action.payload.description;
                    gift.giftersName = action.payload.giftersName;
                    gift.image = action.payload.image;
                }
            })
            return state;
        default:
            return state;
    }
}

export default reducer;
