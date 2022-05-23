import {combineReducers} from "redux";
import {userReducers} from "./userReducers";

export const rootReducer = combineReducers({
    user: userReducers,
})

export type RootState = ReturnType<typeof rootReducer>;