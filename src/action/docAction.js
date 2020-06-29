import {
    DOC_POST_DOC,
    DOC_GET_CATEGORY_DOC,
    DOC_GET_SUBJECT,
    DOC_POST_LIKE_DOC,
    DOC_POST_COMMENT_DOC,
    DOC_GET_TOP_DOC_BY_PAGE,
    DOC_GET_TOP_DOC_BY_ID,
} from "../constant/index.js"

export function docPostDoc(doc) {
    return {
        type: DOC_POST_DOC,
        payload: {
            doc
        }
    }
}

export function docGetCategoryDoc() {
    return {
        type: DOC_GET_CATEGORY_DOC,
    }
}

export function docGetSubject() {
    return {
        type: DOC_GET_SUBJECT,
    }
}

export function docPostLikeDoc(idPost, idUser, idWriter) {
    return {
        type: DOC_POST_LIKE_DOC,
        payload: {
            idPost, idUser, idWriter
        }
    }
}

export function docPostCommentPost(idPost, idUser, idParentComment, content) {
    return {
        type: DOC_POST_COMMENT_DOC,
        payload: { 
            idPost, idUser, idParentComment, content 
        }
    }
}

export function docGetTopDocByPage(page) {
    return {
        type: DOC_GET_TOP_DOC_BY_PAGE,
        payload: page
    }
}

export function docGetTopDocByID(idPost) {
    return {
        type: DOC_GET_TOP_DOC_BY_ID,
        payload: idPost
    }
}