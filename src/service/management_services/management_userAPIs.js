import {
    managementGetAllUsers, managementGetAllRoles
} from "../../action/management_actions/management_userActions";
import { HOST, PORT } from '../../constant/index';
import Cookies from 'js-cookie'

export function management_getAllUsers() {
    return dispatch => {
        var myHeaders = new Headers();

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`http://${HOST}/users;jsessionid=` + Cookies.get('JSESSIONID'), requestOptions)
            .then(response => response.text())
            .then(
                result => {
                    dispatch(managementGetAllUsers(JSON.parse(result)));
                }
            )
            .catch(error => console.log('error', error));
    }
}