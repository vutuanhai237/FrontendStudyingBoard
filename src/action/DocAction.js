import {
    DOC_POST_DOC,
    DOC_GET_CATEGORIES_DOC,
    DOC_GET_SUBJECTS,
    DOC_GET_SEMESTERS,
    DOC_GET_SEARCH_DOC,
    DOC_POST_UP_VIEW_DOC,
    DOC_GET_TOP_DOC,
    DOC_GET_DOC_BY_ID,
} from "constants.js"

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

export function docGetSemesters(semesters) {
    return {
        type: DOC_GET_SEMESTERS,
        payload: semesters,
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