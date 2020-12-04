import {
    GET_ALL_NOT_APPROVED_DOCUMENTS,
    APPROVE_A_DOCUMENT,
    GET_MY_DOCUMENTS
} from 'constants/constants'

const initialState = {
    requestedDocuments: [],
    myDocuments: [],

}

function management_docReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_NOT_APPROVED_DOCUMENTS:
            {
                return { ...state, requestedDocuments: action.payload };
            }

        case APPROVE_A_DOCUMENT:
            {
                return { ...state, currentDocumentApprovedStatus: action.payload }
            }

        case GET_MY_DOCUMENTS:
            {
                return { ...state, myDocuments: action.payload }
            }

        default:
            {
                return initialState;
            }
    }
}

export default management_docReducer;

