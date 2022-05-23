import {AuthorizationActions, authorizationActionTypes, ISetUser, IUser} from "../types";
import {Dispatch} from "react";
import agent from "../../api/agent";

export const auth = (email: string, password: string) => {
    return async (dispatch: Dispatch<AuthorizationActions>) => {
        const body = {
            email,
            password,
        }
        const user = await agent.post('medya-api/users/authorization', body)
            .then(res => {
                return dispatch(setUser(res.data) as AuthorizationActions);
            })
            .catch(err => {
                return {error: err.response.message};
            });
    }
};

const setUser = (payload: IUser | null) => ({
    type: authorizationActionTypes.SET_USER,
    payload,
});

const setIsAuth = (payload: boolean) => ({
    type: authorizationActionTypes.SET_IS_AUTH,
    payload,
})