import { IMAGE_LOAD } from "./types";

const initialState = {
    myImage: {}
};

export const imageReducer = (state = initialState, action) => {
    console.log('reducer > ', action);
    switch(action.type) {
        case IMAGE_LOAD:
        return {
            ...state,
            myImage:state.myImage = action.imgData
        }
        
        default:
            return state;
    }
}