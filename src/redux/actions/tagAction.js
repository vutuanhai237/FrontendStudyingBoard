import {
    GET_TAG_SEARCH_RESULT_REQUEST,
    GET_TAG_SEARCH_RESULT_SUCCESS,
    GET_TAG_SEARCH_RESULT_FAILURE,

    GET_TAG_QUICK_SEARCH_RESULT_REQUEST,
    GET_TAG_QUICK_SEARCH_RESULT_SUCCESS,
    GET_TAG_QUICK_SEARCH_RESULT_FAILURE
} from 'redux/constants.js';


//search tag results
export function get_TagSearchResultRequest() {
    return {
        type: GET_TAG_SEARCH_RESULT_REQUEST
    }
}

export function get_TagSearchResultSuccess(data) {
    return {
        type: GET_TAG_SEARCH_RESULT_SUCCESS,
        payload: data
    }
}

export function get_TagSearchResultFailure(error) {
    return {
        type: GET_TAG_SEARCH_RESULT_FAILURE,
        payload: error
    }
}

//quick search tag result 
export function get_TagQuickSearchResultRequest() {
    return {
        type: GET_TAG_QUICK_SEARCH_RESULT_REQUEST
    }
}

export function get_TagQuickSearchResultSuccess(data) {
    return {
        type: GET_TAG_QUICK_SEARCH_RESULT_SUCCESS,
        payload: data
    }
}

export function get_TagQuickSearchResultFailure(error) {
    return {
        type: GET_TAG_QUICK_SEARCH_RESULT_FAILURE,
        payload: error
    }
}