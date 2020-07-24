import {
    MANAGEMENT_GET_ALL_NOT_APPROVED_DOCUMENTS,
    MANAGEMENT_GET_CURRENT_NOT_APPROVED_DOCUMENT_DETAIL,
    MANAGEMENT_APPROVE_A_DOCUMENT
} from "../../constant/index.js"

export function managementGetAllNotApprovedDocuments(requestedDocs) {
    // console.log("Get all not approved docs function has been called!");
    return {
        type: MANAGEMENT_GET_ALL_NOT_APPROVED_DOCUMENTS,
        payload: requestedDocs,
    }
}


export function managementGetCurrentNotApprovedDocumentDetail(requestedDoc) {
    // console.log("Get all not approved docs function has been called!");
    return {
        type: MANAGEMENT_GET_CURRENT_NOT_APPROVED_DOCUMENT_DETAIL,
        payload: requestedDoc,
    }
}


export function managementApproveADocument(requestedDoc) {
    // console.log("Get all not approved docs function has been called!");
    return {
        type: MANAGEMENT_APPROVE_A_DOCUMENT,
        payload: requestedDoc,
    }
}
