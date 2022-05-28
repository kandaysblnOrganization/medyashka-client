import {AuthorizationActions, authorizationActionTypes, IUser} from "../types";
import {Dispatch} from "react";
import {agent, agentAuth} from "../../api/agent";
import {
    Notification,
    NotificationTypes
} from "../../common/Notification";
import {IError} from "../../types/ErrorTypes";
import jwtDecode from "jwt-decode";
import {IResponseUser} from "../../types/ResponseTypes";

interface UserAuth {
    (formData: IFormDataAuth, onClose: () => void, onSetIsLoading: (isLoading: boolean) => void): void;
}

export interface IFormDataAuth {
    email: string;
    password: string;
}

export const userAuth: UserAuth = (formData, onClose, onSetIsLoading) => {
    return async (dispatch: Dispatch<AuthorizationActions>) => {
        onSetIsLoading(true);
        const user: IUser | IError = await agentAuth.post<IResponseUser>('medya-api/users/authorization', formData)
            .then(res => {
                const data = jwtDecode<IUser>(res.data.token)
                localStorage.setItem('token', res.data.token);
                const user: IUser = {
                    id: data.id,
                    full_name: data.full_name,
                    position: data.position,
                }
                return user;
            })
            .catch(err => {
                return {error: err.response.data.message};
            });
        if (user.error) {
            onSetIsLoading(false);
            Notification({
                message: user.error,
                type: NotificationTypes.error,
            });
        } else {
            await dispatch(setUser(user as IUser) as AuthorizationActions);
            await dispatch(setIsAuth(true) as AuthorizationActions);
            await onClose();
            onSetIsLoading(false);
        }
    }
};

export const userCheckAuth = () => {
    return async (dispatch: Dispatch<AuthorizationActions>) => {
        const user: IUser | null = await agent.get<IResponseUser>('medya-api/users/auth')
            .then(res => {
                const data = jwtDecode<IUser>(res.data.token);
                localStorage.setItem('token', res.data.token);
                const user: IUser = {
                    id: data.id,
                    full_name: data.full_name,
                    position: data.position,
                }
                return user;
            })
            .catch(err => null)
        if (user === null) {
            await localStorage.removeItem('token');
            await dispatch(setUser(null) as AuthorizationActions);
            await dispatch(setIsAuth(false) as AuthorizationActions);
        } else {
            await dispatch(setUser(user as IUser) as AuthorizationActions);
            await dispatch(setIsAuth(true) as AuthorizationActions);
        }
    }
}

export const userLogout = () => {
    return async (dispatch: Dispatch<AuthorizationActions>) => {
        await localStorage.removeItem('token');
        await dispatch(setUser(null) as AuthorizationActions);
        await dispatch(setIsAuth(false) as AuthorizationActions);
    }
}

const setUser = (payload: IUser | null) => ({
    type: authorizationActionTypes.SET_USER,
    payload,
});

const setIsAuth = (payload: boolean) => ({
    type: authorizationActionTypes.SET_IS_AUTH,
    payload,
})