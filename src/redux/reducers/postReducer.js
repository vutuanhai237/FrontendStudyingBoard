import { faLessThan } from '@fortawesome/free-solid-svg-icons';
import {
    POST_GET_POST_BY_ID,
    POST_GET_TOP_POST,
    POST_GET_POST_COMMENT_BY_ID,
    GET_HIGHLIGHT_POSTS,
    POST_GET_POST_NEWESTS,
    POST_GET_POST_NEW_ACTIVITIES,
    POST_GET_TAGS_BY_ID,
    POST_POST_POST,

    //
    GET_ALL_NOT_APPROVED_POSTS,
    APPROVE_A_POST,


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
    posts: [],
    topPost: [],
    currentPost: {},
    currentComments: [],
    isFetchSuccess: false,
    categories: [],
    highlights: [],
    newActivities: [],
    newests: [],
    tags: [],
    statusPostPostCode: 0,

    //search post: use for search post and post list
    postsList: {
        isLoading: false,
        data: [],
        error: ""
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
    }

};

function PostReducer(state = initialState, action) {
    switch (action.type) {
        case POST_POST_POST:
            return { ...state, statusPostPostCode: action.payload.statusPostPostCode }
        case POST_GET_TAGS_BY_ID:

            return { ...state, tags: action.payload.tags }
        case GET_HIGHLIGHT_POSTS:
            console.log(action.payload.highlights)
            return { ...state, highlights: action.payload.highlights }
        case POST_GET_POST_NEWESTS:
            return { ...state, newests: action.payload.newests }
        case POST_GET_POST_NEW_ACTIVITIES:
            return { ...state, newActivities: action.payload.newActivities }
        case POST_GET_POST_BY_ID:
            var currentPost = action.payload.post;
            currentPost.liked = false;
            return { ...state, currentPost: currentPost, isFetchSuccess: false };

        case POST_GET_TOP_POST:
            return { ...state, topPost: action.payload.topPost };
        case POST_GET_POST_COMMENT_BY_ID:
            return { ...state, currentComments: action.payload.comments };


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
                return { ...state, postsList: { isLoading: false, data: action.payload, error: '' } }
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
