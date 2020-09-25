import {
    POST_GET_POST_BY_ID,
    POST_GET_SEARCH_POST,
    POST_GET_CATEGORIES_POST,
    POST_GET_TOP_POST,
    POST_GET_POST_COMMENT_BY_ID,
    POST_GET_IS_LIKE_POST_BY_UID,
    POST_GET_POST_HIGHLIGHTS,
    POST_GET_POST_NEWESTS,
    POST_GET_POST_NEW_ACTIVITIES,
    POST_GET_TAGS_BY_ID,
    POST_POST_POST,
} from 'constants.js'

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
};

function PostReducer(state = initialState, action) {
    switch (action.type) {
        case POST_POST_POST:
            return { ...state, statusPostPostCode: action.payload.statusPostPostCode }
        case POST_GET_TAGS_BY_ID:
            
            return { ...state, tags: action.payload.tags }
        case POST_GET_POST_HIGHLIGHTS:
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
        case POST_GET_SEARCH_POST:
            return { ...state, posts: action.payload.posts };
        case POST_GET_CATEGORIES_POST:
            return { ...state, categories: action.payload.categories };
        case POST_GET_TOP_POST:
            return { ...state, topPost: action.payload.topPost };
        case POST_GET_POST_COMMENT_BY_ID:
            return { ...state, currentComments: action.payload.comments };
        case POST_GET_IS_LIKE_POST_BY_UID:
            var currentPost = state.currentPost;
            currentPost.liked = action.payload.liked;
            return { ...state, currentPost: currentPost, isFetchSuccess: true };
        default:
            return state;
    }
}

export default PostReducer;
