import {
    get_NotApprovedDocumentsList,
    managementGetCurrentPreviewDocument,
    managementApproveADocument,
    get_MyDocuments
} from "actions/authorized/docActions";
import { HOST, PORT } from 'constants/constants';
import Cookies from 'js-cookie'

// import FormData from 'form-data';
const doc_v1 = {

    "title": "some text",
    "category": "some text",
    "authorName": "some text",
    "authorID": 8,
    "publishedDtm": "some text",
    "id": 53,
    "categoryID": 13,
    "views": 57,
    "downloads": 70,
    "imageURL": "some text",
    "likes": 14,
    "dislikes": 63,
    "description": "some text",
    "subject": "GT"

}
const doc_v2 = {

    "title": "some text",
    "category": "some text",
    "authorName": "some text",
    "authorID": 8,
    "publishedDate": "some text",
    "id": 53,
    "categoryID": 13,
    "views": 57,
    "downloads": 70,
    "imageURL": "some text",
    "likes": 14,
    "dislikes": 63,
    "description": "some text"

}

const doc_v3 = {

    "title": "some text",
    "category": "some text",
    "authorName": "some text",
    "authorID": 8,
    "publishedDate": "some text",
    "id": 53,
    "categoryID": 13,
    "views": 57,
    "downloads": 70,
    "imageURL": "some text",
    "likes": 14,
    "dislikes": 63,
    "description": "some text"
}

export function getNotApprovedDocumentsList() {
    return dispatch => {

        var myHeaders = new Headers();

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        // fetch(`http://${PORT}/admin/docs/notApproved?sessionID=${Cookies.get('JSESSIONID')}`, requestOptions)
        //     .then(response => response.text())
        //     .then(result => {
        //         console.log(result);
        //         dispatch(get_NotApprovedDocumentsList(JSON.parse(result).shortDocs))
        //     })

        //     .catch(error => console.log('error', error));
        const result = [doc_v1, doc_v2, doc_v3];
        dispatch(get_NotApprovedDocumentsList(result));

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
        console.log("API has been called!");
        // fetch(`http://${PORT}/docs/preview?id=${previewDoc_ID}&sessionID=${Cookies.get('JSESSIONID')}`, requestOptions)
        //     .then(response =>
        //         response.json())
        //     .then(result => {
        //         console.log(result);
        //         dispatch(managementGetCurrentPreviewDocument(result));
        //     }
        //     )
        //     .catch(error => console.log('error', error));
        const result = doc_v3;
        dispatch(managementGetCurrentPreviewDocument(result));

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

export function getMyDocuments(userID) { //this API to get all approved document of a specific user.
    return dispatch => {

        var myHeaders = new Headers();

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        // fetch(`http://${PORT}/user/docs?uid=${userID}&approved=1&page=0`, requestOptions)
        //     .then(response => response.text())
        //     .then(
        //         result => dispatch(get_MyDocuments(JSON.parse(result))
        //         ))
        //     .catch(error => console.log('error', error))
        const result = [doc_v1, doc_v2, doc_v3];
        dispatch(get_MyDocuments(result));
    }

}



