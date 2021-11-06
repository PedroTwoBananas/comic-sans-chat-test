import { MESSAGE_CREATE, MESSAGE_DELETE, NEW_MESSAGE, DELETE_MESSAGE } from "./types";

const initialState = {
    comments: []
}

export const inputReducer = (state = initialState, action) => {

    switch (action.type) {
        case NEW_MESSAGE:
        return {
            ...state,
            comments: [...state.comments, action.payload]
        }

        // case MESSAGE_CREATE:
        //     return {
        //         ...state,
        //         comments: [...state.comments, action.data]
        //     }
        
        case DELETE_MESSAGE:
            const {idMessage} = action;
            const {comments} = state;
            const itemIndex = comments.findIndex(res => res.idMessage === idMessage);

            const nextComments = [
                ...comments.slice(0, itemIndex),
                ...comments.slice(itemIndex + 1)
            ];
            return {
                ...state,
                comments: nextComments
            }
            default:
                return state;
    }
}