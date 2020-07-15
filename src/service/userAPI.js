import {
    userPostLogin,
    userPostRegister,
    userGetCurrentUser,
} from "../action/userAction.js";
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
        // myHeaders.append("Cookie", "JSESSIONID=F99620D192BE9382E3B59DC6B765278D");
        // console.log("JSESSIONID=" + Cookies.get('JSESSIONID'));
        // console.log(myHeaders);
        //myHeaders.append("Cookie", "JSESSIONID=" + Cookies.get('JSESSIONID'));
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow',
            credentials: 'include'
        };

        fetch(`https://${HOST}/users/current`, requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(JSON.parse(result))
            })
            .catch(error => console.log('error', error));



    }
}
