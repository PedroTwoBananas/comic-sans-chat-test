import { DELETE_USER, NEW_USER} from "./types";

const initialState = {
    users: []
};

export const usersReducer = (state = initialState, action) => {
    console.log('reducer > ', action);
    switch(action.type) {
        case NEW_USER:
        return {
            ...state,
            users: [...state.users, action.dataUser]
        }
        case DELETE_USER:
            const {deleteUser} = action;
            const {users} = state;
            const itemIndex = users.findIndex(res => res.id === deleteUser);

            const nextUsers = [
                ...users.slice(0, itemIndex),
                ...users.slice(itemIndex + 1)
            ];
            return {
                ...state,
                users: nextUsers
            }
        default:
            return state;
    }

}