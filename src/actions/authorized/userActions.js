import {
    GET_ALL_USERS,
    GET_ALL_ROLES
} from 'constants/constants'

export function managementGetAllUsers(allUsers) {
    return {
        type: GET_ALL_USERS,
        payload: allUsers
    }
}

export function managementGetAllRoles(allRoles) {

    return {
        type: GET_ALL_ROLES,
        payload: allRoles
    }
}