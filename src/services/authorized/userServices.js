import {
    managementGetAllUsers, managementGetAllRoles
} from "actions/authorized/userActions";
import { HOST, PORT } from 'constants/constants';
import Cookies from 'js-cookie'

//#region for user 
export function management_getAllUsers() {
    return dispatch => {
        var myHeaders = new Headers();

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`http://${PORT}/users?sessionID=` + Cookies.get('JSESSIONID'), requestOptions)
            .then(response => response.text())
            .then(
                result => {
                    dispatch(managementGetAllUsers(JSON.parse(result)));
                }
            )
            .catch(error => console.log('error', error));
    }
}

//#endregion

//#region for role
export function management_getAllRoles() {
    return dispatch => {
        var myHeaders = new Headers();

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`http://${PORT}/usergroups`, requestOptions)
            .then(response => response.text())
            .then(
                result => {

                    // console.log("*"); console.log(result);
                    dispatch(managementGetAllRoles(JSON.parse(result).bhtUserGroups));
                }
            )
            .catch(error => console.log('error', error));

        dispatch(managementGetAllRoles());
    }

}
////#endregion