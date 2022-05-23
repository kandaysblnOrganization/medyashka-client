export interface IUser {
    id: number;
    full_name: string;
    position: string;
}

export interface IAuthorizationState {
    user: IUser | null;
    isAuth: boolean;
}

export enum authorizationActionTypes {
    SET_USER = 'SET_USER',
    SET_IS_AUTH = "SET_IS_AUTH",
}

export interface ISetUser {
    type: authorizationActionTypes.SET_USER;
    payload: IUser;
}

export interface ISetIsAuth {
    type: authorizationActionTypes.SET_IS_AUTH;
    payload: boolean;
}
export type AuthorizationActions = ISetUser | ISetIsAuth;