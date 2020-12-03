import {
    GET_ALL_NOT_APPROVED_DOCUMENTS,
    GET_CURRENT_NOT_APPROVED_DOCUMENT_DETAIL,
    APPROVE_A_DOCUMENT,
    GET_MY_POSTS
} from "constants/constants"

export function get_NotApprovedDocumentsList(requestedDocs) {
    return {
        type: GET_ALL_NOT_APPROVED_DOCUMENTS,
        payload: requestedDocs,
    }
}


// export function managementGetCurrentPreviewDocument(requestedDoc) {
//     return {
//         type: GET_CURRENT_NOT_APPROVED_DOCUMENT_DETAIL,
//         payload: requestedDoc,
//     }
// }


// export function managementApproveADocument(requestedDoc) {
//     return {
//         type: APPROVE_A_DOCUMENT,
//         payload: requestedDoc,
//     }
// }



export function get_MyPostsList(myPostsList) {
    return {
        type: GET_MY_POSTS,
        payload: myPostsList,
    }
}
