import {
    userPostLogin,
    userPostRegister,
    userGetCurrentUser,
    userGetLogout,
} from "../action/UserAction.js";
import {
    HOST,
    PORT
} from '../constant/index';
import FormData from 'form-data';
import Cookies from 'js-cookie';

//#region Fake data
const user_admin = {
    "statusCode": 5,
    "statusMessage": "Get account success!",
    "account": {
        "id": 1,
        "username": "phucnh",
        "password": "123456",
        "avatar": "https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg",
        "email": "phuc98@gmail.com",
        "score": 100,
        "postCount": 0,
        "documentCount": 11,
        "roleId": 1,
        "roleName": "ADMIN"
    }
}

//#endregion

export function postRegister(account) {
    return dispatch => {
        var myHeaders = new Headers();

        var formdata = new FormData();
        formdata.append("username", account.username);
        formdata.append("avatar", account.file);
        formdata.append("email", account.email);
        formdata.append("password", account.password);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };
        console.log(account)
        console.log(requestOptions)
        fetch(`http://${PORT}/register`, requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result);
                dispatch(userPostRegister(JSON.parse(result).statusCode));
            })
            .catch(error => {
                console.log('error', error)
                dispatch(userPostRegister(error.statusCode));
            });
    }
}

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


        fetch(`http://${PORT}/login`, requestOptions)
            .then(response => response.text())
            .then(result => {
                Cookies.set('JSESSIONID', JSON.parse(result).sessionID);
                Cookies.set('UID', JSON.parse(result).account.id);
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
        // fetch(`http://${PORT}/users/current?sessionID=${Cookies.get('JSESSIONID')}`, requestOptions)
        //     .then(response => response.text())
        //     .then(result => {
        //         dispatch(userGetCurrentUser(JSON.parse(result).account, JSON.parse(result).statusCode))

        //     })
        //     .catch(error => {
        //         console.log('error', error);
        //         dispatch(userGetCurrentUser(null, error.statusCode))
        //     })
        let result = user_admin;
        dispatch(userGetCurrentUser(result.account, result.statusCode))



    }
}


export function getLogout() {
    return dispatch => {
        var myHeaders = new Headers();
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        Cookies.remove('JSESSIONID');
        Cookies.remove('UID');
        fetch(`http://${PORT}/logout`, requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result);
                dispatch(userGetLogout(JSON.parse(result).statusCode));
            })
            .catch(error => console.log('error', error));
    }
}