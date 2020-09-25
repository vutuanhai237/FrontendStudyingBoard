import {
    MANAGEMENT_GET_ALL_USERS,
    MANAGEMENT_GET_ALL_ROLES
} from 'constants.js'

const allUsers = [

]

const allRoles =
    [
        {
            "UserGroupID": 1,
            "UserGroupName": "ADMIN"
        },
        {
            "UserGroupID": 2,
            "UserGroupName": "COLLABORATOR"
        },
        {
            "UserGroupID": 3,
            "UserGroupName": "USER"
        }
    ]


const initialState = {
    allUsers: allUsers,
    allRoles: allRoles
}

function management_docReducer(state = initialState, action) {
    switch (action.type) {
        case MANAGEMENT_GET_ALL_USERS:
            return { ...state, allUsers: action.payload }
        case MANAGEMENT_GET_ALL_ROLES:
            return { ...state, allRoles: action.payload }
        default:
            {
                return initialState;
            }
    }
}

export default management_docReducer;

