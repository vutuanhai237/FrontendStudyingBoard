import {
    USER_POST_LOGIN,
    USER_POST_REGISTER,
    USER_GET_CURRENT_USER,
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

export function userPostRegister(account) {
    return {
        type: USER_POST_REGISTER,
        payload: account,
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
