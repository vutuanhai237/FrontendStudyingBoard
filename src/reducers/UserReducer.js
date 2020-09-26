import {
    USER_POST_LOGIN,
    USER_POST_REGISTER,
    USER_GET_CURRENT_USER,
    USER_GET_LOGOUT,
} from 'constants/constants'

const initialState = {
    account: null,
    statusLoginCode: 0,
    statusLogoutCode: 0,
    statusRegisterCode: 0,
}

function UserReducer(state = initialState, action) {
    switch (action.type) {
        case USER_POST_LOGIN:
            if (action.payload.account === null) {
                return {
                    ...state,
                    statusLoginCode: action.payload.statusLoginCode
                }
            } else {
                return {
                    ...state,
                    account: action.payload.account,
                    statusLoginCode: action.payload.statusLoginCode,
                }
            }
        case USER_POST_REGISTER:
            return {
                ...state,
                statusRegisterCode: action.payload.statusRegisterCode,
            }
        case USER_GET_CURRENT_USER:      
            if (action.payload.account === null || typeof action.payload.account === 'undefined') {
                return {
                    ...state,
                    account: null,
                    statusLoginCode: action.payload.statusGetCurrentCode,
                }
            } else {
                return {
                    ...state,
                    account: action.payload.account,
                    statusLoginCode: action.payload.statusGetCurrentCode,
                }
            }
        case USER_GET_LOGOUT:
            return {
                ...state,
                statusLogoutCode: action.payload.statusLogoutCode,
            }
        default:
            return state;
    }
}

export default UserReducer;