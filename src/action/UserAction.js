import {
    USER_POST_LOGIN,
    USER_POST_REGISTER,
    USER_GET_CURRENT_USER,
    USER_GET_LOGOUT,
} from "../constant/index.js"

export function userPostLogin(account, statusLoginCode) {
    return {
        type: USER_POST_LOGIN,
        payload: {
            account: account,
            statusLoginCode: statusLoginCode,
        }
    }
}

export function userGetLogout(statusLogoutCode) {
    return {
        type: USER_GET_LOGOUT,
        payload: {
            statusLogoutCode: statusLogoutCode,
        }
    }
}

export function userPostRegister(statusRegisterCode) {
    return {
        type: USER_POST_REGISTER,
        payload: {
            statusRegisterCode: statusRegisterCode,
        }
    }
}

export function userGetCurrentUser(account, statusGetCurrentUserCode) {
    return {
        type: USER_GET_CURRENT_USER,
        payload: {
            account: account,
            statusGetCurrentUserCode: statusGetCurrentUserCode,
        }
    }
}
