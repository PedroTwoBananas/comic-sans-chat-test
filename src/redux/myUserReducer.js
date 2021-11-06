import { MY_USER_CREATE } from "./types";

const initialState = {
    myUser: {}
};

export const myUserReducer = (state = initialState, action) => {
    console.log('reducer > ', action);
    switch(action.type) {
        case MY_USER_CREATE:
        return {
            ...state,
            myUser:{ ...state.myUser = action.myDataUser}
        }
        
        default:
            return state;
    }
}
