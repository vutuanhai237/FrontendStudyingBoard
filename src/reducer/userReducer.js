import {
    USER_POST_LOGIN,
    USER_POST_REGISTER,
    USER_GET_CURRENT_USER,
} from "../constant/index"

const initialState = {
    account: {
        id: 1,
        username: 'phucnh1',
        password: '123456',
        avatar: 'avt',
        email: 'phuc98@gmail.com',
        score: 100,
        postCount: 0,
        documentCount: 11,
        roleId: 1,
        roleName: 'ADMIN',
    },
    statusLoginCode: 0,
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
            return state;
        case USER_GET_CURRENT_USER:
            if (action.payload.account === null) {
                return {
                    ...state,
                    statusLoginCode: action.payload.statusGetCurrentCode
                }
            } else {
                return {
                    ...state,
                    account: action.payload.account,
                    statusLoginCode: action.payload.statusGetCurrentCode,
                }
            }
        default:
            return state;
    }
}

export default UserReducer;