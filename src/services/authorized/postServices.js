import {
    get_NotApprovedDocumentsList,
    managementGetCurrentPreviewDocument,
    managementApproveADocument,
    get_MyPostsList
} from "actions/authorized/postActions";
import { HOST, PORT } from 'constants/constants';
// import Cookies from 'js-cookie'
// import 


// import FormData from 'form-data';
const post_v1 = {
    "id": 3,
    "title": "Cách sử dụng SVG trong front end",
    "authorName": "Vu Tuan Hai",
    "publishedDtm": "22/12/2020",
    "readingTime": 0,
    "category": "Danh muc 1",
    "summary": "some text",
    "likes": 80,
    "commentCount": 11,
    "authorID": 42,
    "categoryID": 21,
    "imageURL": "some text",
    "likedStatus": true,
    "savedStatus": true
}
const post_v2 = {
    "id": 45,
    "title": "some text",
    "authorName": "some text",
    "publishedDtm": "some text",
    "readingTime": 22,
    "category": "some text",
    "summary": "some text",
    "likes": 65,
    "commentCount": 69,
    "authorID": 46,
    "categoryID": 69,
    "imageURL": "some text",
    "likedStatus": true,
    "savedStatus": true
}

const post_v3 = {
    "id": 48,
    "title": "some text",
    "authorName": "some text",
    "publishedDtm": "some text",
    "readingTime": 22,
    "category": "some text",
    "summary": "some text",
    "likes": 65,
    "commentCount": 69,
    "authorID": 46,
    "categoryID": 69,
    "imageURL": "some text",
    "likedStatus": true,
    "savedStatus": true
}

const post_v4 = {
    "id": 44,
    "title": "some text",
    "authorName": "some text",
    "publishedDtm": "some text",
    "readingTime": 22,
    "category": "some text",
    "summary": "some text",
    "likes": 65,
    "commentCount": 69,
    "authorID": 46,
    "categoryID": 69,
    "imageURL": "some text",
    "likedStatus": true,
    "savedStatus": true
}

// export function getNotApprovedDocumentsList() {
//     return dispatch => {

//         var myHeaders = new Headers();

//         var requestOptions = {
//             method: 'GET',
//             headers: myHeaders,
//             redirect: 'follow'
//         };

//         // fetch(`http://${PORT}/admin/docs/notApproved?sessionID=${Cookies.get('JSESSIONID')}`, requestOptions)
//         //     .then(response => response.text())
//         //     .then(result => {
//         //         console.log(result);
//         //         dispatch(get_NotApprovedDocumentsList(JSON.parse(result).shortDocs))
//         //     })

//         //     .catch(error => console.log('error', error));
//         const result = [post_v1.documentDTO, post_v2.documentDTO, post_v3.documentDTO, post_v4.documentDTO];
//         dispatch(get_NotApprovedDocumentsList(result));

//     }

// }

// //Code Status: 
// //13 - Permission deny
// //14 - Resource Not Found
// //15 - Get Resource Successfully
// export function management_getCurrentPreviewDocument(previewDoc_ID) {
//     return dispatch => {
//         let myHeaders = new Headers();

//         var requestOptions = {
//             method: 'GET',
//             headers: myHeaders,
//             redirect: 'follow'
//         };
//         console.log("API has been called!");
//         // fetch(`http://${PORT}/docs/preview?id=${previewDoc_ID}&sessionID=${Cookies.get('JSESSIONID')}`, requestOptions)
//         //     .then(response =>
//         //         response.json())
//         //     .then(result => {
//         //         console.log(result);
//         //         dispatch(managementGetCurrentPreviewDocument(result));
//         //     }
//         //     )
//         //     .catch(error => console.log('error', error));
//         const result = post_v4;
//         dispatch(managementGetCurrentPreviewDocument(result));

//     }
// }

// export function management_approveADocument(docID) {
//     return dispatch => {

//         var myHeaders = new Headers();

//         var requestOptions = {
//             method: 'GET',
//             headers: myHeaders,
//             redirect: 'follow'
//         };
//         fetch(`http://${PORT}/admin/docs/approved?id =${docID}&sessionID=` + Cookies.get('JSESSIONID'), requestOptions)
//             .then(response => response.text())
//             .then(
//                 result => dispatch(managementApproveADocument(JSON.parse(result).shortDocs))
//             )
//             .catch(error => console.log('error', error));
//     }

// }

// export default function postAPI() {
export function getMyPostsList(page = 1, category = "") { //this API to get all approved document of a specific user.
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
        let result = page === 1 ? [post_v1, post_v2] : [post_v3, post_v4];
        dispatch(get_MyPostsList(result));
    }
}
// }

