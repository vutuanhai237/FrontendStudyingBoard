import {
    adminGetAllUsers, adminGetAllRoles
} from "../../action/admin_actions/admin_userActions";
import { HOST, PORT } from '../../constant/index';
import Cookies from 'js-cookie'

export function admin_getAllUsers() {
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
                    dispatch(adminGetAllUsers(JSON.parse(result)));
                }
            )
            .catch(error => console.log('error', error));
    }
}