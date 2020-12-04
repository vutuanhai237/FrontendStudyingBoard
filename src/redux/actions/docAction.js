import {
    DOC_POST_DOC,
    DOC_GET_CATEGORIES_DOC,
    DOC_GET_SUBJECTS,
    DOC_GET_SEMESTERS,
    DOC_GET_SEARCH_DOC,
    DOC_POST_UP_VIEW_DOC,
    DOC_GET_TOP_DOC,
    DOC_GET_DOC_BY_ID,

    //
    GET_ALL_NOT_APPROVED_DOCUMENTS,
    APPROVE_A_DOCUMENT,
    GET_MY_DOCUMENTS
} from "../constants.js"

export function docPostDoc(statusPostDocCode) {
    return {
        type: DOC_POST_DOC,
        payload: statusPostDocCode,
    }
}

export function docGetCategoriesDoc(categories) {
    return {
        type: DOC_GET_CATEGORIES_DOC,
        payload: categories,
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

export function get_MyDocuments(myDocuments) {
    return {
        type: GET_MY_DOCUMENTS,
        payload: myDocuments,
    }
}
