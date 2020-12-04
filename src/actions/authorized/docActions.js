import {
    GET_ALL_NOT_APPROVED_DOCUMENTS,

    APPROVE_A_DOCUMENT,
    GET_MY_DOCUMENTS
} from "constants/constants"

export function get_NotApprovedDocumentsList(requestedDocs) {
    return {
        type: GET_ALL_NOT_APPROVED_DOCUMENTS,
        payload: requestedDocs,
    }
}

export function managementApproveADocument(requestedDoc) {
    return {
        type: APPROVE_A_DOCUMENT,
        payload: requestedDoc,
    }
}

export function get_MyDocuments(myDocuments) {
    return {
        type: GET_MY_DOCUMENTS,
        payload: myDocuments,
    }
}
