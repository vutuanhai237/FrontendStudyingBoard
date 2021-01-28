import {

    GET_ALL_NOT_APPROVED_DOCUMENTS_SUCCESS,
    GET_ALL_NOT_APPROVED_DOCUMENTS_REQUEST,
    GET_ALL_NOT_APPROVED_DOCUMENTS_FAILURE,

    // APPROVE_A_DOCUMENT,

    //highlight posts 
    GET_HIGHLIGHT_POSTS_LIST_REQUEST,
    GET_HIGHLIGHT_POSTS_LIST_SUCCESS,
    GET_HIGHLIGHT_POSTS_LIST_FAILURE,

    //my post
    GET_MY_POSTS_REQUEST,
    GET_MY_POSTS_SUCCESS,
    GET_MY_POSTS_FAILURE,

    //pots list
    GET_POSTS_LIST_REQUEST,
    GET_POSTS_LIST_SUCCESS,
    GET_POSTS_LIST_FAILURE,

    //post search result & post list
    GET_POST_SEARCH_RESULT_REQUEST,
    GET_POST_SEARCH_RESULT_SUCCESS,
    GET_POST_SEARCH_RESULT_FAILURE,

    POST_CREATE_POST_REQUEST,
    POST_CREATE_POST_SUCCESS,
    POST_CREATE_POST_FAILURE,

} from "../constants.js"

//create a post 
export function post_CreatePostRequest() {
    return {
        type: POST_CREATE_POST_REQUEST
    }
}

export function post_CreatePostSuccess(notification) {
    return {
        type: POST_CREATE_POST_SUCCESS,
        payload: notification
    }
}

export function post_CreatePostFailure(notification) {
    return {
        type: POST_CREATE_POST_FAILURE,
        payload: notification
    }
}

//highlight posts 
export function get_HighlightPostsListRequest() {
    return {
        type: GET_HIGHLIGHT_POSTS_LIST_REQUEST,
    }
}

export function get_HighlightPostsListSuccess(data) {
    return {
        type: GET_HIGHLIGHT_POSTS_LIST_SUCCESS,
        payload: data
    }
}

export function get_HighlightPostsListFailure(error) {
    return {
        type: GET_HIGHLIGHT_POSTS_LIST_FAILURE,
        payload: error
    }
}

//my posts
export function get_MyPostsRequest() {
    return {
        type: GET_MY_POSTS_REQUEST,
    }
}

export function get_MyPostsSuccess(data) {
    return {
        type: GET_MY_POSTS_SUCCESS,
        payload: data
    }
}

export function get_MyPostsFailure(error) {
    return {
        type: GET_MY_POSTS_FAILURE,
        payload: error
    }
}

//posts list 
export function get_PostsListRequest() {
    return { type: GET_POSTS_LIST_REQUEST }
}

export function get_PostsListSuccess(data) {
    return { type: GET_POSTS_LIST_SUCCESS, payload: data }
}

export function get_PostsListFailure(error) {
    return { type: GET_POSTS_LIST_FAILURE, error: error }
}


//post search result
export function get_PostSearchResultRequest() {
    return {
        type: GET_POST_SEARCH_RESULT_REQUEST
    }
}

export function get_PostSearchResultSuccess(data) {
    return {
        type: GET_POST_SEARCH_RESULT_SUCCESS, payload: data
    }
}

export function get_PostSearchResultFailure(error) {
    return {
        type: GET_POST_SEARCH_RESULT_FAILURE,
        payload: error
    }
}
