import {
    ADMIN_GET_ALL_USERS,
    ADMIN_GET_ALL_ROLES
} from "../../constant/index"

export function adminGetAllUsers(allUsers) {
    return {
        type: ADMIN_GET_ALL_USERS,
        payload: allUsers
    }
}

export function adminGetAllRoles(allRoles) {

    return {
        type: ADMIN_GET_ALL_ROLES,
        payload: allRoles
    }
}