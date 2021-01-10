import {
    GET_TAG_SEARCH_RESULT_REQUEST,
    GET_TAG_SEARCH_RESULT_SUCCESS,
    GET_TAG_SEARCH_RESULT_FAILURE
} from 'redux/constants.js';

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