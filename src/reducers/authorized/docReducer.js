import {
    GET_ALL_NOT_APPROVED_DOCUMENTS,
    GET_CURRENT_NOT_APPROVED_DOCUMENT_DETAIL,
    APPROVE_A_DOCUMENT,
    GET_ALL_DOCS_OF_USER
} from 'constants/constants'

const requestedDocs = [
]

const initialState = {
    requestedDocs: requestedDocs,
    // categories: [],
    // semesters: [],
    // subjects: [],
    // topDoc: [],
    // searchDocs: [],
    // currentFilterSemester: "",
}

function management_docReducer(state = initialState, action) {
    // console.log("*Management doc reducer has been called!");
    // console.log(action.type);
    // console.log(action)
    switch (action.type) {
        case GET_ALL_NOT_APPROVED_DOCUMENTS:
            {
                // console.log("Management get all not approved documents payload case has been called");
                return { ...state, requestedDocs: action.payload };
            }

        case GET_CURRENT_NOT_APPROVED_DOCUMENT_DETAIL: {
            // console.log("Management get a not approved document payload case has been called");
            return { ...state, currentPreviewDocument: action.payload }
        }

        case APPROVE_A_DOCUMENT:
            {
                // console.log("Management get a not approved document payload case has been called");
                return { ...state, currentDocumentApprovedStatus: action.payload }
            }

        case GET_ALL_DOCS_OF_USER:
            {
                return { ...state, userDocList: action.payload }
            }

        default:
            {
                return initialState;
            }
    }
}

export default management_docReducer;

