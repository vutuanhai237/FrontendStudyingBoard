import {

    DOC_POST_LIKE_DOC,
    DOC_POST_COMMENT_DOC,

} from "../constant/index.js"




export function docPostCommentPost(idPost, idUser, idParentComment, content) {
    return {
        type: DOC_POST_COMMENT_DOC,
        payload: { 
            idPost, idUser, idParentComment, content 
        }
    }
}