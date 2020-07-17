import {
    userPostLogin,
    userPostRegister,
    userGetCurrentUser,
} from "../action/UserAction.js";
import { HOST, PORT } from '../constant/index';
import FormData from 'form-data';
import Cookies from 'js-cookie';

export function postLogin(account) {

    return dispatch => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        var urlencoded = new URLSearchParams();
        urlencoded.append("username", account.username);
        urlencoded.append("password", account.password);
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };


        fetch(`https://${HOST}/login`, requestOptions)
            .then(response => response.text())
            .then(result => {
                Cookies.set('JSESSIONID', JSON.parse(result).sessionID);
                dispatch(userPostLogin(JSON.parse(result).account, JSON.parse(result).statusCode))
            })
            .catch(error => {
                dispatch(userPostLogin(null, error.statusCode));
            });

    }
}

export function getCurrentUser() {
    return dispatch => {
        var myHeaders = new Headers();

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        fetch(`https://${HOST}/users/current;jsessionid=` + Cookies.get('JSESSIONID'), requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(JSON.parse(result))
                dispatch(userGetCurrentUser(JSON.parse(result).account, JSON.parse(result).statusCode))
            })
            .catch(error => console.log('error', error));

      
    }
}
