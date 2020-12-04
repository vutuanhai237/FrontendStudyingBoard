import {
    GET_ALL_NOT_APPROVED_POSTS,
    APPROVE_A_POST,
    GET_MY_POSTS
} from 'constants/constants'

const initialState = {
    requestedPosts: [],
    myPostsList: [],
    isMyPostListLoading: false,
    isRequestedPostsLoading: false

}

function authorized_postReducer(state = initialState, action) {
    switch (action.type) {

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
        case GET_MY_POSTS:
            {
                console.log(action.payload)
                return { ...state, myPostsList: action.payload }
            }

        default:
            {
                return state;
            }
    }
}

export default authorized_postReducer;

