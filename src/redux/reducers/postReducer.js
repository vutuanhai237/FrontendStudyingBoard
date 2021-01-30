import {
    //
    GET_ALL_NOT_APPROVED_POSTS,
    APPROVE_A_POST,

    POST_CREATE_POST_REQUEST,
    POST_CREATE_POST_SUCCESS,
    POST_CREATE_POST_FAILURE,

    //highlight posts list
    GET_HIGHLIGHT_POSTS_LIST_REQUEST,
    GET_HIGHLIGHT_POSTS_LIST_SUCCESS,
    GET_HIGHLIGHT_POSTS_LIST_FAILURE,

    //post list
    GET_POSTS_LIST_SUCCESS,
    GET_POSTS_LIST_REQUEST,
    GET_POSTS_LIST_FAILURE,

    //my post
    GET_MY_POSTS_REQUEST,
    GET_MY_POSTS_SUCCESS,
    GET_MY_POSTS_FAILURE,

    //search post 
    GET_POST_SEARCH_RESULT_REQUEST,
    GET_POST_SEARCH_RESULT_SUCCESS,
    GET_POST_SEARCH_RESULT_FAILURE


} from '../constants.js'

const initialState = {

    //search post: use for search post and post list
    postsList: {
        isLoading: false,
        data: [],
        error: "",
        totalPages: 0
    },

    //my posts
    myPosts: {
        isLoading: false,
        data: [],
        error: ""
    },

    //highlight posts list
    highlightPosts: {
        isLoading: false,
        isLoadDone: false,
        data: [],
        error: ""
    },
    createPost: {
        isLoadingDone: false,
        notification: { type: '', message: '' }
    }
};

function PostReducer(state = initialState, action) {
    switch (action.type) {

        case POST_CREATE_POST_REQUEST:
            return {
                ...state, createPost: { isLoadingDone: false }
            };
        case POST_CREATE_POST_SUCCESS:
            {
                return { ...state, createPost: { isLoadingDone: true, notification: { type: 'success', message: 'Tạo mới tài liệu thành công!' } } }
            }
        case POST_CREATE_POST_FAILURE:
            {
                return { ...state, createPost: { isLoading: true, notification: { type: 'error', message: action.payload } } }
            }
        //get all not approved post
        case GET_ALL_NOT_APPROVED_POSTS:
            {
                return { ...state, requestedPosts: action.payload };
            }

        case APPROVE_A_POST:
            {
                return { ...state, currentPostApprovedStatus: action.payload }
            }

        //get highlight posts list

        case GET_HIGHLIGHT_POSTS_LIST_REQUEST:
            return {
                ...state, highlightPosts: { isLoading: true, isLoadDone: false }
            };
        case GET_HIGHLIGHT_POSTS_LIST_SUCCESS:
            {
                return { ...state, highlightPosts: { isLoading: false, isLoadDone: true, data: action.payload, error: '' } }
            }
        case GET_HIGHLIGHT_POSTS_LIST_FAILURE:
            {
                return { ...state, highlightPosts: { isLoading: false, isLoadDone: true, error: action.payload, data: [] } }
            }
        //get my post
        case GET_MY_POSTS_REQUEST:
            return {
                ...state, myPosts: { isLoading: true }
            };
        case GET_MY_POSTS_SUCCESS:
            {
                return { ...state, myPosts: { isLoading: false, data: action.payload, error: '' } }
            }
        case GET_MY_POSTS_FAILURE:
            {
                return { ...state, myPosts: { isLoading: false, error: action.payload, data: [] } }
            }

        //get post search result
        case GET_POST_SEARCH_RESULT_REQUEST:
        case GET_POSTS_LIST_REQUEST:
            return {
                ...state, postsList: { isLoading: true }
            };
        case GET_POST_SEARCH_RESULT_SUCCESS:
        case GET_POSTS_LIST_SUCCESS:
            {
                return { ...state, postsList: { ...state.postsList, isLoading: false, data: action.payload.postSummaryDTOs, error: '', totalPages: action.payload.totalPages } }
            }
        case GET_POST_SEARCH_RESULT_FAILURE:
        case GET_POSTS_LIST_FAILURE:
            {
                return { ...state, postsList: { isLoading: false, error: action.payload, data: [] } }
            }

        default:
            return state;
    }
}

export default PostReducer;
