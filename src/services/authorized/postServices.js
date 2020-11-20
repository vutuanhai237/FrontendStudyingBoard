import {
    managementGetAllNotApprovedDocuments,
    managementGetCurrentPreviewDocument,
    managementApproveADocument,
    get_UserPostsList
} from "actions/authorized/postActions";
import { HOST, PORT } from 'constants/constants';
// import Cookies from 'js-cookie'
// import 


// import FormData from 'form-data';
const post_v1 = {
    "id": 3,
    "title": "some text",
    "authorName": "some text",
    "publishDate": "some text",
    "readingTime": 0,
    "categoryName": "some text",
    "summary": "some text",
    "likeCount": 80,
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
    "publishDate": "some text",
    "readingTime": 22,
    "categoryName": "some text",
    "summary": "some text",
    "likeCount": 65,
    "commentCount": 69,
    "authorID": 46,
    "categoryID": 69,
    "imageURL": "some text",
    "likedStatus": true,
    "savedStatus": true
}

const post_v3 = {

}

const post_v4 = {

}

// export function management_getAllNotApprovedDocuments() {
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
//         //         dispatch(managementGetAllNotApprovedDocuments(JSON.parse(result).shortDocs))
//         //     })

//         //     .catch(error => console.log('error', error));
//         const result = [post_v1.documentDTO, post_v2.documentDTO, post_v3.documentDTO, post_v4.documentDTO];
//         dispatch(managementGetAllNotApprovedDocuments(result));

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

export function getUserPostsList() { //this API to get all approved document of a specific user.
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
        //         result => dispatch(managementGetAllUserDocList(JSON.parse(result))
        //         ))
        //     .catch(error => console.log('error', error))
        let result = [post_v1, post_v2];
        dispatch(get_UserPostsList(result));
    }

}



