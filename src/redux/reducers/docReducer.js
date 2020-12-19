import {
    DOC_GET_SUBJECTS,
    DOC_GET_DOC_BY_ID,
    DOC_GET_SEARCH_DOC,
    DOC_GET_TOP_DOC,
    DOC_POST_DOC,
    DOC_POST_UP_VIEW_DOC,
    DOC_POST_UP_DOWNLOAD_DOC,

    // MY DOC
    GET_MY_DOCUMENTS_REQUEST,
    GET_MY_DOCUMENTS_SUCCESS,
    GET_MY_DOCUMENTS_FAILURE,

    //DOCUMENT SEARCH RESULT
    GET_DOCUMENT_SEARCH_RESULT_REQUEST,
    GET_DOCUMENT_SEARCH_RESULT_SUCCESS,
    GET_DOCUMENT_SEARCH_RESULT_FAILURE,

    GET_ALL_NOT_APPROVED_DOCUMENTS,
    APPROVE_A_DOCUMENT

} from '../constants.js'

const initialState = {
    documents: [],
    categories: [],
    topDoc: [],
    searchDocs: [],
    currentFilterSemester: "",
    statusPostDocCode: 0,

    documentSearchResult: {
        isLoading: false,
        data: [],
        error: ""
    },

    myDocuments: {
        isLoading: false,
        data: [],
        error: ""
    }
}

function DocReducer(state = initialState, action) {
    switch (action.type) {
        case DOC_GET_SUBJECTS:
            return { ...state, subjects: action.payload };
        case DOC_GET_TOP_DOC:
            return { ...state, topDoc: action.payload };
        case DOC_GET_SEARCH_DOC:
            return { ...state, searchDocs: action.payload };
        case DOC_POST_DOC:
            return { ...state, statusPostDocCode: action.payload };
        case DOC_POST_UP_VIEW_DOC:
            return { ...state };
        case DOC_POST_UP_DOWNLOAD_DOC:
            return { ...state };
        case DOC_GET_DOC_BY_ID:
            return { ...state, document: action.payload };


        case GET_ALL_NOT_APPROVED_DOCUMENTS:
            return { ...state, requestedDocuments: action.payload };
        case APPROVE_A_DOCUMENT:
            return { ...state, currentDocumentApprovedStatus: action.payload }

        //my post
        case GET_MY_DOCUMENTS_REQUEST:
            return {
                ...state, myDocuments: { isLoading: true }
            };
        case GET_MY_DOCUMENTS_SUCCESS:
            {
                return { ...state, myDocuments: { isLoading: false, data: action.payload, error: '' } }
            }
        case GET_MY_DOCUMENTS_FAILURE:
            {
                return { ...state, myDocuments: { isLoading: false, error: action.payload, data: [] } }
            }

        //document search result 
        //my post
        case GET_DOCUMENT_SEARCH_RESULT_REQUEST:
            return {
                ...state, documentSearchResult: { isLoading: true }
            };
        case GET_DOCUMENT_SEARCH_RESULT_SUCCESS:
            {
                return { ...state, documentSearchResult: { isLoading: false, data: action.payload, error: '' } }
            }
        case GET_DOCUMENT_SEARCH_RESULT_FAILURE:
            {
                return { ...state, documentSearchResult: { isLoading: false, error: action.payload, data: [] } }
            }




        default:
            return state;
    }
}

export default DocReducer;

