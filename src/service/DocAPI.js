import {
    docPostDoc,
    docGetCategoriesDoc,
    docGetSubjects,
    docGetSemesters,
    docGetTopDoc,
    docGetSearchDoc,
    docGetDocByID,
} from "action/DocAction.js";
import {
    HOST,
    PORT
} from 'constants.js';
import FormData from 'form-data';
import Cookies from 'js-cookie';

//fake data import
import { categoriesList } from "./PostAPI"

//#region Fake data: doc_v1's Category is "Đề thi", so it have some fields like semester or subject
const doc_v1 = {
    "statusCode": 15,
    "statusMessage": "Get resource success!",
    "documentDTO": {
        "id": 1,
        "url": "hehe",
        "title": "title ne",
        "summary": " summatry luom",
        "authorName": "Nguyễn Hồng Phúc",
        "authorID": 1,
        "authorAvatar": 'https://image.shutterstock.com/image-photo/butterfly-grass-on-meadow-night-260nw-1111729556.jpg',
        "categoryID": 1,
        "categoryName": "Đề thi",
        "subjectID": 1,
        "subjectName": "Nhập môn lập trình",
        "viewCount": 3,
        "downloadCount": 0,
        "fileName": "\"Tên file tài liệu số 1\"",
        "semesterId": 1,
        "semesterName": "Học kỳ 1",
        "yearId": 1,
        "yearName": "2016 - 2017"
    }
}
const doc_v2 = {
    "statusCode": 15,
    "statusMessage": "Get resource success!",
    "documentDTO": {
        "id": 2,
        "url": "bom",
        "title": "",
        "summary": "",
        "authorName": "Lưu Biêu Nghị",
        "authorID": 1,
        "authorAvatar": 'https://www.uu.se/digitalAssets/805/c_805646-l_1-k_image.jpg',
        "categoryID": 9,
        "categoryName": "Sách",
        // "subjectID": 1,
        // "subjectName": "",
        "viewCount": 3,
        "downloadCount": 0,
        "fileName": "Slide ôn tập CTDL&GT năm 2017 - 2018 - BHT Công nghệ phần mềm",
        // "semesterId": 1,
        // "semesterName": "HK1 * 2016-2017"
    }
}

const doc_v3 = {
    "statusCode": 15,
    "statusMessage": "Get resource success!",
    "documentDTO": {
        "id": 3,
        "url": "bom",
        "title": "",
        "summary": "",
        "authorName": "Huỳnh Thị Kim Thảo",
        "authorID": 1,
        "authorAvatar": 'https://www.uu.se/digitalAssets/805/c_805646-l_1-k_image.jpg',
        "categoryID": 11,
        "categoryName": "Slide ôn tập",
        // "subjectID": 1,
        // "subjectName": "",
        "viewCount": 3,
        "downloadCount": 0,
        "fileName": "Slide ôn tập nhập môn mạch số năm 2017 - 2018 - BHT Công nghệ phần mềm",
        // "semesterId": 1,
        // "semesterName": "HK1 * 2016-2017"
    }
}

const doc_v4 = {
    "statusCode": 15,
    "statusMessage": "Get resource success!",
    "documentDTO": {
        "id": 4,
        "url": "bom",
        "title": "",
        "summary": "",
        "authorName": "Huỳnh Thị Kim Thảo",
        "authorID": 1,
        "authorAvatar": 'https://www.uu.se/digitalAssets/805/c_805646-l_1-k_image.jpg',
        "categoryID": 11,
        "categoryName": "Slide ôn tập",
        // "subjectID": 1,
        // "subjectName": "",
        "viewCount": 3,
        "downloadCount": 0,
        "fileName": "Slide ôn tập nhập môn mạch số năm 2017 - 2018 - BHT Công nghệ phần mềm",
        // "semesterId": 1,
        // "semesterName": "HK1 * 2016-2017"
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

        // fetch(`http://${PORT}/docs/categories`, requestOptions)
        //     .then(response => response.text())
        //     .then(result => {
        //         dispatch(docGetCategoriesDoc(JSON.parse(result)));
        //     })
        //     .catch(error => console.log('error', error));
        const result = [categoriesList[6], categoriesList[7], categoriesList[8], categoriesList[9], categoriesList[10], categoriesList[5]];
        dispatch(docGetCategoriesDoc(result));
    }
}

export function getSemesters() {
    return dispatch => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        // fetch(`http://${PORT}/semesters`, requestOptions)
        //     .then(response => response.text())
        //     .then(result => {
        //         dispatch(docGetSemesters(JSON.parse(result)));
        //     })
        //     .catch(error => console.log('error', error));
        const result = [categoriesList[16], categoriesList[17], categoriesList[18]];
        dispatch(docGetSemesters(result));
    }
}

export function getSubjects() {
    return dispatch => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        // fetch(`http://${PORT}/subjects`, requestOptions)
        //     .then(response => response.text())
        //     .then(result => {
        //         dispatch(docGetSubjects(JSON.parse(result)));
        //     })
        // .catch(error => console.log('error', error));
        const result = [categoriesList[19], categoriesList[20], categoriesList[21], categoriesList[22]];
        dispatch(docGetSubjects(result));

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
        let result = [doc_v1.documentDTO, doc_v2.documentDTO, doc_v3.documentDTO];
        dispatch(docGetTopDoc(result));
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

        // fetch(`http://${PORT}/docs/detail?id=${id}`, requestOptions)
        //     .then(response => response.text())
        //     .then(result => {
        //         console.log(result)
        //         dispatch(docGetDocByID(JSON.parse(result)));
        //     })
        //     .catch(error => console.log('error', error));
        const result = doc_v1;
        dispatch(docGetDocByID(result));
    }
}