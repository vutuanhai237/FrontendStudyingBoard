import {
    GET_ALL_NOT_APPROVED_DOCUMENTS,
    GET_CURRENT_NOT_APPROVED_DOCUMENT_DETAIL,
    APPROVE_A_DOCUMENT,
    GET_MY_POSTS
} from 'constants/constants'

const requestedPosts = [
]


// const userPostsList = [
// ]


const initialState = {
    requestedPosts: requestedPosts,
    // userPostsList: userPostsList
}

function authorized_postReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_NOT_APPROVED_DOCUMENTS:
            {
                return { ...state, requestedPosts: action.payload };
            }

        case GET_CURRENT_NOT_APPROVED_DOCUMENT_DETAIL: {
            return { ...state, currentPreviewPost: action.payload }
        }

        case APPROVE_A_DOCUMENT:
            {
                return { ...state, currentPostApprovedStatus: action.payload }
            }

        case GET_MY_POSTS:
            {
                console.log(action.payload)
                return { ...state, userPostsList: action.payload }
                break;
            }

        default:
            {
                return state;
            }
    }
}

export default authorized_postReducer;

