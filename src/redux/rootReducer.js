import { combineReducers } from "redux";
import { inputReducer } from "./inputReducer";
import { usersReducer } from "./usersReducer";
import { myUserReducer } from "./myUserReducer";
import { imageReducer } from "./imageReducer";


export const rootReducer = combineReducers({
    inputReducer, usersReducer, myUserReducer, imageReducer
});