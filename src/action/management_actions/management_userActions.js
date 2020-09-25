import {
    MANAGEMENT_GET_ALL_USERS,
    MANAGEMENT_GET_ALL_ROLES
} from 'constants.js'

export function managementGetAllUsers(allUsers) {
    return {
        type: MANAGEMENT_GET_ALL_USERS,
        payload: allUsers
    }
}

export function managementGetAllRoles(allRoles) {

    return {
        type: MANAGEMENT_GET_ALL_ROLES,
        payload: allRoles
    }
}