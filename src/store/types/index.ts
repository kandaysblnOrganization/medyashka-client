export interface IUser {
    id: number;
    full_name: string;
    position: string;
    error?: string;
}

export interface IUserProgress {
    id: number;
    percent_progress: number;
    first_book_last_page: number;
    second_book_last_page: number;
    third_book_last_page: number;
    fourth_book_last_page: number;
}

export interface IAuthorizationState {
    user: IUser | null;
    userProgress: IUserProgress | null;
    isAuth: boolean;
}

export enum authorizationActionTypes {
    SET_USER = 'SET_USER',
    SET_USER_PROGRESS = 'SET_USER_PROGRESS',
    SET_IS_AUTH = "SET_IS_AUTH",
}

export interface ISetUser {
    type: authorizationActionTypes.SET_USER;
    payload: IUser;
}

export interface ISetUserProgress {
    type: authorizationActionTypes.SET_USER_PROGRESS;
    payload: IUserProgress;
}

export interface ISetIsAuth {
    type: authorizationActionTypes.SET_IS_AUTH;
    payload: boolean;
}

export type AuthorizationActions = ISetUser | ISetUserProgress | ISetIsAuth