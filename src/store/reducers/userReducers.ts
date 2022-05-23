import {AuthorizationActions, authorizationActionTypes, IAuthorizationState} from "../types";

const authorizationState: IAuthorizationState = {
    user: null,
    isAuth: false,
}

export const userReducers = (state = authorizationState, action: AuthorizationActions): IAuthorizationState => {
    switch (action.type) {
        case authorizationActionTypes.SET_IS_AUTH:
            return {...state, isAuth: action.payload};
        case authorizationActionTypes.SET_USER:
            return {...state, user: action.payload};
        default:
            return state;
    }
}