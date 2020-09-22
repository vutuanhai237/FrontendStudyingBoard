import {
    managementGetAllNotApprovedDocuments,
    managementGetCurrentPreviewDocument,
    managementApproveADocument,
    managementGetAllUserDocList
} from "../../action/management_actions/management_docActions";
import { HOST, PORT } from '../../constant/index';
import Cookies from 'js-cookie'

// import FormData from 'form-data';
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
        "authorAvatar": "https://image.shutterstock.com/image-photo/butterfly-grass-on-meadow-night-260nw-1111729556.jpg",
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
        "authorAvatar": "https://www.uu.se/digitalAssets/805/c_805646-l_1-k_image.jpg",
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
        "authorAvatar": "https://www.uu.se/digitalAssets/805/c_805646-l_1-k_image.jpg",
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
        "authorAvatar": "https://www.uu.se/digitalAssets/805/c_805646-l_1-k_image.jpg",
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

export function management_getAllNotApprovedDocuments() {
    return dispatch => {

        var myHeaders = new Headers();

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`http://${PORT}/admin/docs/notApproved?sessionID=${Cookies.get('JSESSIONID')}`, requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result);
                dispatch(managementGetAllNotApprovedDocuments(JSON.parse(result).shortDocs))
            })

            .catch(error => console.log('error', error));
        // const result = [doc_v1.documentDTO, doc_v2.documentDTO, doc_v3.documentDTO, doc_v4.documentDTO];
        // dispatch(managementGetAllNotApprovedDocuments(result));

    }

}

//Code Status: 
//13 - Permission deny
//14 - Resource Not Found
//15 - Get Resource Successfully
export function management_getCurrentPreviewDocument(previewDoc_ID) {
    return dispatch => {
        let myHeaders = new Headers();

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
     
        fetch(`http://${PORT}/docs/preview?id=${previewDoc_ID}&sessionID=${Cookies.get('JSESSIONID')}`, requestOptions)
            .then(response =>
                response.json())
            .then(result => {
                console.log(result);
                dispatch(managementGetCurrentPreviewDocument(result));
            }
            )
            .catch(error => console.log('error', error));
        // const result = doc_v4;
        // dispatch(managementGetCurrentPreviewDocument(result));

    }
}

export function management_approveADocument(docID) {
    return dispatch => {

        var myHeaders = new Headers();

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        fetch(`http://${PORT}/admin/docs/approved?id =${docID}&sessionID=` + Cookies.get('JSESSIONID'), requestOptions)
            .then(response => response.text())
            .then(
                result => dispatch(managementApproveADocument(JSON.parse(result).shortDocs))
            )
            .catch(error => console.log('error', error));
    }

}

export function management_getAllUserDocList(userID) { //this API to get all approved document of a specific user.
    return dispatch => {

        var myHeaders = new Headers();

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        fetch(`http://${PORT}/user/docs?uid=${userID}&approved=1&page=0`, requestOptions)
            .then(response => response.text())
            .then(
                result => dispatch(managementGetAllUserDocList(JSON.parse(result))
                ))
            .catch(error => console.log('error', error))
    }

}



