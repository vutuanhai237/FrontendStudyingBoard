import {
    ADMIN_GET_ALL_NOT_APPROVED_DOCUMENTS,
    ADMIN_GET_CURRENT_NOT_APPROVED_DOCUMENT_DETAIL,
    ADMIN_APPROVE_A_DOCUMENT
} from "../../constant/index"

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

function admin_docReducer(state = initialState, action) {
    // console.log("*Admin doc reducer has been called!");
    // console.log(action.type);
    // console.log(action)
    switch (action.type) {
        case ADMIN_GET_ALL_NOT_APPROVED_DOCUMENTS:
            {
                // console.log("Admin get all not approved documents payload case has been called");
                return { ...state, requestedDocs: action.payload };
            }

        case ADMIN_GET_CURRENT_NOT_APPROVED_DOCUMENT_DETAIL: {
            // console.log("Admin get a not approved document payload case has been called");
            return { ...state, currentNotApprovedDocumentDetail: action.payload }
        }

        case ADMIN_APPROVE_A_DOCUMENT:
            {
                // console.log("Admin get a not approved document payload case has been called");
                return { ...state, currentDocumentApprovedStatus: action.payload }
            }

        default:
            {
                return initialState;
            }
    }
}

export default admin_docReducer;

