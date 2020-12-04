import {
    POST_GET_POST_BY_ID,
    GET_POSTS_LIST,
    POST_GET_TOP_POST,
    POST_GET_POST_COMMENT_BY_ID,
    POST_GET_IS_LIKE_POST_BY_UID,
    GET_HIGHLIGHT_POSTS,
    POST_GET_POST_NEWESTS,
    POST_GET_POST_NEW_ACTIVITIES,
    POST_GET_TAGS_BY_ID,
    POST_POST_POST,

    //
    GET_ALL_NOT_APPROVED_POSTS,
    APPROVE_A_POST,

    //
    GET_MY_POSTS_REQUEST,
    GET_MY_POSTS_SUCCESS,
    GET_MY_POSTS_FAILURE,

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

    //my posts
    myPosts: {
        isLoading: false,
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
        case GET_POSTS_LIST:
            return { ...state, posts: action.payload.posts };
        case POST_GET_TOP_POST:
            return { ...state, topPost: action.payload.topPost };
        case POST_GET_POST_COMMENT_BY_ID:
            return { ...state, currentComments: action.payload.comments };
        case POST_GET_IS_LIKE_POST_BY_UID:
            var currentPost = state.currentPost;
            currentPost.liked = action.payload.liked;
            return { ...state, currentPost: currentPost, isFetchSuccess: true };

        //

        //get all not approved post
        case GET_ALL_NOT_APPROVED_POSTS:
            {
                return { ...state, requestedPosts: action.payload };
            }

        case APPROVE_A_POST:
            {
                return { ...state, currentPostApprovedStatus: action.payload }
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

        default:
            return state;
    }
}

export default PostReducer;
