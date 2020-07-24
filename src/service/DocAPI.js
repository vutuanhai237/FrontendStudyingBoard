import {
    docPostDoc,
    docGetCategoriesDoc,
    docGetSubjects,
    docGetSemesters,
    docGetTopDoc,
    docGetSearchDoc,
    docGetDocByID,
} from "../action/DocAction.js";
import { HOST, PORT } from '../constant/index';
import FormData from 'form-data';
import Cookies from 'js-cookie';

export function postDoc(doc) {
    return dispatch => {

    }
}

export function getCategoriesDoc() {
    return dispatch => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`http://${HOST}/docs/categories`, requestOptions)
            .then(response => response.text())
            .then(result => {
                dispatch(docGetCategoriesDoc(JSON.parse(result)));
            })
            .catch(error => console.log('error', error));
    }
}

export function getSemesters() {
    return dispatch => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`http://${HOST}/semesters`, requestOptions)
            .then(response => response.text())
            .then(result => {
                dispatch(docGetSemesters(JSON.parse(result)));
            })
            .catch(error => console.log('error', error));
    }
}

export function getSubjects() {
    return dispatch => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`http://${HOST}/subjects`, requestOptions)
            .then(response => response.text())
            .then(result => {
                dispatch(docGetSubjects(JSON.parse(result)));
            })
            .catch(error => console.log('error', error));

        // var myHeaders = new Headers();
        // var requestOptions = {
        //     method: 'GET',
        //     headers: myHeaders,
        //     redirect: 'follow'
        // };

        // fetch(`https://${HOST}/management/docs/notApproved;jsessionid=` + Cookies.get('JSESSIONID'), requestOptions)
        //     .then(response => response.text())
        //     .then(result => console.log(result))
        //     .catch(error => console.log('error', error));

        // var myHeaders = new Headers();

        // var requestOptions = {
        //     method: 'GET',
        //     headers: myHeaders,
        //     redirect: 'follow'
        // };

        // fetch(`https://${HOST}/users;jsessionid=` + Cookies.get('JSESSIONID'), requestOptions)
        //     .then(response => response.text())
        //     .then(result => console.log(result))
        //     .catch(error => console.log('error', error));
    }
}

export function getTopDoc() {
    return dispatch => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`http://${HOST}/docs/goodDoc?limit=3`, requestOptions)
            .then(response => response.text())
            .then(result => {
                dispatch(docGetTopDoc(JSON.parse(result).shortDocs));
            })
            .catch(error => console.log('error', error));
    }
}

export function getSearchDoc(filter) {
    return dispatch => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`https://${HOST}/docs/search?${filter}`, requestOptions)
            .then(response => response.text())
            .then(result => {
                dispatch(docGetSearchDoc(JSON.parse(result).shortDocs));
            })
            .catch(error => console.log('error', error));
    }
}