import {
    MANAGEMENT_GET_ALL_NOT_APPROVED_DOCUMENTS,
    MANAGEMENT_GET_CURRENT_NOT_APPROVED_DOCUMENT_DETAIL,
    MANAGEMENT_APPROVE_A_DOCUMENT,
    MANAGEMENT_GET_ALL_DOCS_OF_USER
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
        case MANAGEMENT_GET_ALL_NOT_APPROVED_DOCUMENTS:
            {
                // console.log("Management get all not approved documents payload case has been called");
                return { ...state, requestedDocs: action.payload };
            }

        case MANAGEMENT_GET_CURRENT_NOT_APPROVED_DOCUMENT_DETAIL: {
            // console.log("Management get a not approved document payload case has been called");
            return { ...state, currentPreviewDocument: action.payload }
        }

        case MANAGEMENT_APPROVE_A_DOCUMENT:
            {
                // console.log("Management get a not approved document payload case has been called");
                return { ...state, currentDocumentApprovedStatus: action.payload }
            }

        case MANAGEMENT_GET_ALL_DOCS_OF_USER:
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

