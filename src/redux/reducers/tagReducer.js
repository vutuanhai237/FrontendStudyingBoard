import {
    GET_TAG_SEARCH_RESULT_REQUEST,
    GET_TAG_SEARCH_RESULT_SUCCESS,
    GET_TAG_SEARCH_RESULT_FAILURE,
    GET_TAG_QUICK_SEARCH_RESULT_REQUEST,
    GET_TAG_QUICK_SEARCH_RESULT_SUCCESS,
    GET_TAG_QUICK_SEARCH_RESULT_FAILURE

} from 'redux/constants.js';

var initialState = {
    tagSearchResult: {
        isLoading: false,
        data: [],
        itemCount: 20,
        error: ''
    },
    tagQuickSearchResult: {
        isLoading: true,
        data: [],
        error: ''
    }
}

export default function tagReducer(state = initialState, action) {
    switch (action.type) {

        //get Search Results
        case GET_TAG_SEARCH_RESULT_REQUEST: {
            return {
                ...state, tagSearchResult: { isLoading: true }
            };
        }
        case GET_TAG_SEARCH_RESULT_SUCCESS: {
            return {
                ...state, tagSearchResult: { isLoading: false, data: action.payload, itemCount: 30, error: '' }
            }
        }
        case GET_TAG_SEARCH_RESULT_FAILURE: {
            return {
                ...state, tagSearchResult: { isLoading: false, error: action.payload, data: [], itemCount: 0 }
            }
        }
        case GET_TAG_QUICK_SEARCH_RESULT_REQUEST: {
            return {
                ...state, tagSearchResult: { isLoading: true }
            }
        }
        case GET_TAG_QUICK_SEARCH_RESULT_SUCCESS: {
            return {
                ...state, tagQuickSearchResult: { isLoading: false, data: action.payload, error: '' }
            }
        }
        case GET_TAG_QUICK_SEARCH_RESULT_FAILURE: {
            return {
                ...state, tagQuickSearchResult: { isLoading: false, error: action.payload }
            }
        }

        default:
            return state;
    }
}


