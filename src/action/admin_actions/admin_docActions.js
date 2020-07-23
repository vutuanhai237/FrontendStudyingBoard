import {
    ADMIN_GET_ALL_NOT_APPROVED_DOCUMENTS,
    ADMIN_GET_CURRENT_NOT_APPROVED_DOCUMENT_DETAIL,
    ADMIN_APPROVE_A_DOCUMENT
} from "../../constant/index.js"

export function adminGetAllNotApprovedDocuments(requestedDocs) {
    // console.log("Get all not approved docs function has been called!");
    return {
        type: ADMIN_GET_ALL_NOT_APPROVED_DOCUMENTS,
        payload: requestedDocs,
    }
}


export function adminGetCurrentNotApprovedDocumentDetail(requestedDoc) {
    // console.log("Get all not approved docs function has been called!");
    return {
        type: ADMIN_GET_CURRENT_NOT_APPROVED_DOCUMENT_DETAIL,
        payload: requestedDoc,
    }
}


export function adminApproveADocument(requestedDoc) {
    // console.log("Get all not approved docs function has been called!");
    return {
        type: ADMIN_APPROVE_A_DOCUMENT,
        payload: requestedDoc,
    }
}
