import {authorizationActionTypes, IUser} from "../types";

export const auth = () => {
};

const setUser = (payload: IUser | null) => ({
    type: authorizationActionTypes.SET_USER,
    payload,
});

const setIsAuth = (payload: boolean) => ({
    type: authorizationActionTypes.SET_IS_AUTH,
    payload,
})