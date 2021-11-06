import { MESSAGE_CREATE, MESSAGE_DELETE, USERS_CREATE, NEW_MESSAGE, DELETE_MESSAGE, NEW_USER, IMAGE_LOAD, MY_USER_CREATE, DELETE_USER } from "./types";

// export function messageCreate(text, idMessage, id, name, userImage, image) {
//     return {
//         type: MESSAGE_CREATE,
//         data: {text:text, idMessage:idMessage, id:id, name:name, userImage:userImage, image:image}
//     }
// }
export function addMessage(message) {
    return {
        type: NEW_MESSAGE,
        payload: message,
    }
}

export function deleteMessage(idMessage) {
    return {
        type: DELETE_MESSAGE,
        idMessage:idMessage
        
    }
}

// export function usersCreate(firstName, lastName, id, image) {
//     return {
//         type: USERS_CREATE,
//         dataUser: {name: firstName + lastName, id:id, image:image}
        
//     }
// }


// export function usersCreate(firstName, lastName, id) {
//     return async dispatch => {
//         const response = await fetch('https://picsum.photos/200', {'method':'GET'});
//         const imgLoad = await response.url;
//         dispatch({
//             type: USERS_CREATE,
//             dataUser: {name: firstName + lastName, id:id, userImage:imgLoad}
//         })
//     }
// }
export function myUserCreate(id, fullName, userImage) {
    return {
        type: MY_USER_CREATE,
        myDataUser: {id:id, fullName:fullName, userImage:userImage}
    }
}

export function addUser(user) {
    return {
        type: NEW_USER,
        dataUser: user,
    }
}

export function deleteUser(deleteUser) {
    return {
        type: DELETE_USER,
        deleteUser: deleteUser
    }
}



export function imageLoad() {
    return async dispatch => {
        const response = await fetch('https://picsum.photos/200', {'method':'GET'});
        const imgLoad = await response.url;
        dispatch({
            type: IMAGE_LOAD,
            imgData: imgLoad
        })
    }
}

