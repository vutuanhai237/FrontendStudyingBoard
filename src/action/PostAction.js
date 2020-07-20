import {

    POST_POST_LIKE,
    POST_POST_SAVE,
    POST_POST_COMMENT,
    POST_GET_POST_BY_ID,
    POST_GET_POST_BY_FILTER,
    POST_GET_TOP_POST,
} from "../constant/index.js"

export function postPostLike(statusPostLikeCode) {
    return {
        type: POST_POST_LIKE,
        payload: { 
            statusPostLikeCode: statusPostLikeCode
        }
    }
}

export function postPostSave(statusPostSaveCode) {
    return {
        type: POST_POST_SAVE,
        payload: { 
            statusPostSaveCode: statusPostSaveCode
        }
    }
}

export function postPostComment(statusPostCommentCode) {
    return {
        type: POST_POST_COMMENT,
        payload: { 
            statusPostCommentCode: statusPostCommentCode
        }
    }
}
export function postGetPostByID(post) {
    return {
        type: POST_GET_POST_BY_ID,
        payload: { 
            post: post
        }
    }
}

export function postGetPostByFilter(posts) {
    return {
        type: POST_GET_POST_BY_FILTER,
        payload: { 
            posts: posts
        }
    }
}

export function postGetTopPost(topPost) {
    return {
        type: POST_GET_TOP_POST,
        payload: { 
            topPost: topPost
        }
    }
}