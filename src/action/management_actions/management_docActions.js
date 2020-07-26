import {
    MANAGEMENT_GET_ALL_NOT_APPROVED_DOCUMENTS,
    MANAGEMENT_GET_CURRENT_NOT_APPROVED_DOCUMENT_DETAIL,
    MANAGEMENT_APPROVE_A_DOCUMENT
} from "../../constant/index.js"

export function managementGetAllNotApprovedDocuments(requestedDocs) {
    return {
        type: MANAGEMENT_GET_ALL_NOT_APPROVED_DOCUMENTS,
        payload: requestedDocs,
    }
}


export function managementGetCurrentNotApprovedDocumentDetail(requestedDoc) {
    return {
        type: MANAGEMENT_GET_CURRENT_NOT_APPROVED_DOCUMENT_DETAIL,
        payload: requestedDoc,
    }
}


export function managementApproveADocument(requestedDoc) {
    return {
        type: MANAGEMENT_APPROVE_A_DOCUMENT,
        payload: requestedDoc,
    }
}
