import {
    docPostDoc,
    docGetCategoriesDoc,
    docGetSubjects,
    docGetSemesters,
    docGetTopDoc,
    docGetSearchDoc,
    docGetDocByID,
} from "../action/DocAction.js";
import {
    HOST,
    PORT
} from '../constant/index';
import FormData from 'form-data';
import Cookies from 'js-cookie';

//#region Fake data
const doc_v1 = {
    "statusCode": 15,
    "statusMessage": "Get resource success!",
    "documentDTO": {
        "id": 1,
        "url": "hehe",
        "title": "title ne",
        "summary": " summatry luom",
        "authorName": "phucnh",
        "authorID": 1,
        "authorAvatar": "https://image.shutterstock.com/image-photo/butterfly-grass-on-meadow-night-260nw-1111729556.jpg",
        "categoryID": 1,
        "categoryName": "De thi",
        "subjectID": 1,
        "subjectName": "Nhập môn lập trình",
        "viewCount": 3,
        "downloadCount": 0,
        "fileName": "\"Tên file tài liệu số 1\"",
        "semesterId": 1,
        "semesterName": "HK1 * 2016-2017"
    }
}

//#endregion 

//upload new document
export function postDoc(doc) {
    return dispatch => {
        var myHeaders = new Headers();
        console.log(doc)
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
    }
}

export function getTopDoc() {
    return dispatch => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        // fetch(`http://${PORT}/docs/goodDoc?limit=3`, requestOptions)
        //     .then(response => response.text())
        //     .then(result => {
        //         dispatch(docGetTopDoc(JSON.parse(result).shortDocs));
        //     })
        //     .catch(error => console.log('error', error));
        let result = doc_v1;
        docGetTopDoc(result);
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