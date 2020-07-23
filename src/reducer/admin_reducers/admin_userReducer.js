import {
    ADMIN_GET_ALL_USERS,
    ADMIN_GET_ALL_ROLES
} from "../../constant/index"

const allUsers = [

]

const allRoles = [

]

const initialState = {
    allUsers: allUsers,
    allRoles: allRoles
}

function admin_docReducer(state = initialState, action) {
    switch (action.type) {
        case ADMIN_GET_ALL_USERS:
            return { ...state, allUsers: action.payload }
        case ADMIN_GET_ALL_ROLES:
            return { ...state, allRoles: action.payload }
        default:
            {
                return initialState;
            }
    }
}

export default admin_docReducer;

