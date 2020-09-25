import {
    MANAGEMENT_GET_ALL_NOT_APPROVED_DOCUMENTS,
    MANAGEMENT_GET_CURRENT_NOT_APPROVED_DOCUMENT_DETAIL,
    MANAGEMENT_APPROVE_A_DOCUMENT,
    MANAGEMENT_GET_ALL_DOCS_OF_USER
} from "constants.js"

export function managementGetAllNotApprovedDocuments(requestedDocs) {
    return {
        type: MANAGEMENT_GET_ALL_NOT_APPROVED_DOCUMENTS,
        payload: requestedDocs,
    }
}


export function managementGetCurrentPreviewDocument(requestedDoc) {
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



export function managementGetAllUserDocList(allUserDocList) {
    return {
        type: MANAGEMENT_GET_ALL_DOCS_OF_USER,
        payload: allUserDocList,
    }
}
