import {
    HOME_TOP_DOCUMENT,
    HOME_TOP_POST,
} from "../constant/home";

const initialState = {
    posts: [],
    documents: [],
}

function HomeReducer(state = initialState, action) {
    switch (action) {
        case HOME_TOP_DOCUMENT:
            return {
                ...state,
                posts: action.content,
            }
        case HOME_TOP_POST:
            return {
                ...state,
                documents: action.content,
            }
        default:
            return initialState;
    }
}

export default HomeReducer;