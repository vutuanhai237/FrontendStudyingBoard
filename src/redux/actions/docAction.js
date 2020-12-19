import {
    DOC_POST_DOC,
    DOC_GET_SUBJECTS,
    DOC_GET_SEARCH_DOC,
    DOC_POST_UP_VIEW_DOC,
    DOC_GET_TOP_DOC,
    DOC_GET_DOC_BY_ID,

    //
    GET_ALL_NOT_APPROVED_DOCUMENTS,
    APPROVE_A_DOCUMENT,

    //my documents
    GET_MY_DOCUMENTS_REQUEST,
    GET_MY_DOCUMENTS_SUCCESS,
    GET_MY_DOCUMENTS_FAILURE,

    //document search results
    GET_DOCUMENT_SEARCH_RESULT_REQUEST,
    GET_DOCUMENT_SEARCH_RESULT_SUCCESS,
    GET_DOCUMENT_SEARCH_RESULT_FAILURE,

} from "../constants.js"

export function docPostDoc(statusPostDocCode) {
    return {
        type: DOC_POST_DOC,
        payload: statusPostDocCode,
    }
}

export function docGetSubjects(subjects) {
    return {
        type: DOC_GET_SUBJECTS,
        payload: subjects,
    }
}

export function docPostUpViewDoc(idDoc) {
    return {
        type: DOC_POST_UP_VIEW_DOC,
        payload: idDoc,
    }
}



export function docGetTopDoc(page) {
    return {
        type: DOC_GET_TOP_DOC,
        payload: page
    }
}

export function docGetSearchDoc(docs) {
    return {
        type: DOC_GET_SEARCH_DOC,
        payload: docs,
    }
}
export function docGetDocByID(idPost) {
    return {
        type: DOC_GET_DOC_BY_ID,
        payload: idPost
    }
}

//
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

//my documents
export function get_MyDocumentsRequest() {
    return {
        type: GET_MY_DOCUMENTS_REQUEST,
    }
}

export function get_MyDocumentsSuccess(data) {
    return {
        type: GET_MY_DOCUMENTS_SUCCESS,
        payload: data
    }
}

export function get_MyDocumentsFailure(error) {
    return {
        type: GET_MY_DOCUMENTS_FAILURE,
        payload: error
    }
}

//document search result
export function get_DocumentSearchResultRequest() {
    return {
        type: GET_DOCUMENT_SEARCH_RESULT_REQUEST,
    }
}

export function get_DocumentSearchResultSuccess(data) {
    return {
        type: GET_DOCUMENT_SEARCH_RESULT_SUCCESS,
        payload: data
    }
}

export function get_DocumentSearchResultFailure(error) {
    return {
        type: GET_DOCUMENT_SEARCH_RESULT_FAILURE,
        payload: error
    }
}