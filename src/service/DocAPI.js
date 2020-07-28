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
        var myHeaders = new Headers();

        var formdata = new FormData();
        formdata.append("file", doc.file);
        formdata.append("title", doc.title);
        formdata.append("summary", doc.summary);
        formdata.append("categoryId", doc.categoryID);
        formdata.append("subjectId", doc.subjectID);
        formdata.append("semesterId", doc.semesterID);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        fetch(`http://${PORT}/docs/upload?sessionID=${Cookies.get('JSESSIONID')}`, requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(JSON.parse(result).statusCode);
                dispatch(docPostDoc(JSON.parse(result).statusCode));
            })
            .catch(error => console.log('error', error));
    }
}

export function getCategoriesDoc() {
    return dispatch => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`http://${PORT}/docs/categories`, requestOptions)
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

        fetch(`http://${PORT}/semesters`, requestOptions)
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

        fetch(`http://${PORT}/subjects`, requestOptions)
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

        // fetch(`https://${PORT}/management/docs/notApproved?sessionID=` + Cookies.get('JSESSIONID'), requestOptions)
        //     .then(response => response.text())
        //     .then(result => console.log(result))
        //     .catch(error => console.log('error', error));

        // var myHeaders = new Headers();

        // var requestOptions = {
        //     method: 'GET',
        //     headers: myHeaders,
        //     redirect: 'follow'
        // };

        // fetch(`https://${PORT}/users?sessionID=` + Cookies.get('JSESSIONID'), requestOptions)
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

        fetch(`http://${PORT}/docs/goodDoc?limit=3`, requestOptions)
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

        fetch(`http://${PORT}/docs/search?${filter}`, requestOptions)
            .then(response => response.text())
            .then(result => {
                dispatch(docGetSearchDoc(JSON.parse(result).shortDocs));
            })
            .catch(error => console.log('error', error));
    }
}
export function getDocumentByID(id) {
    return dispatch => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`http://${PORT}/docs/detail?id=${id}`, requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result)
                dispatch(docGetDocByID(JSON.parse(result)));
            })
            .catch(error => console.log('error', error));
    }
}