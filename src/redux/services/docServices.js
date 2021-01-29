import {
    //my documents
    get_MyDocumentsRequest,
    get_MyDocumentsSuccess,
    get_MyDocumentsFailure,

    //documents list
    get_DocumentsListRequest,
    get_DocumentsListSuccess,
    get_DocumentsListFailure,

    //document search result
    get_DocumentSearchResultRequest,
    get_DocumentSearchResultSuccess,
    get_DocumentSearchResultFailure,
} from "redux/actions/docAction.js";
//upload new document

export function getDocumentByID(id) {
    return dispatch => {

    }
}

export function getNotApprovedDocumentsList() {
    return dispatch => {
    }
}

export function management_approveADocument(docID) {
    return dispatch => {

    }
}


export function getDocumentsList(page = 1, category = "", searchTerm = "") { //this API to get all approved document of a specific user.
    return dispatch => {

        var myHeaders = new Headers();

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        dispatch(get_DocumentsListRequest());

        fetch(`https://5fca2bc63c1c220016441d27.mockapi.io/myDocuments`, requestOptions)
            .then(response => response.text())
            .then(
                result => {
                    dispatch(get_DocumentsListSuccess(JSON.parse(result)));
                }
            )
            .catch(error => {
                
                dispatch(get_DocumentsListFailure(JSON.parse(error))); //
            })

    }
}

export function getDocumentSearchResult(page = 1, category = "", searchTerm = "") { //this API to get all approved document of a specific user.
    return dispatch => {
        console.log("A");

        var myHeaders = new Headers();

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        dispatch(get_DocumentSearchResultRequest());
        fetch(`https://5fca2bc63c1c220016441d27.mockapi.io/myDocuments`, requestOptions)
            .then(response => response.text())
            .then(
                result => {
                    dispatch(get_DocumentSearchResultSuccess(JSON.parse(result)));
                }
            )
            .catch(error => {
                
                dispatch(get_DocumentSearchResultFailure(JSON.parse(error))); //
            })

    }
}

export function getMyDocumentsList(page = 1, category = "") { //this API to get all approved document of a specific user.
    return dispatch => {

        var myHeaders = new Headers();

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        dispatch(get_MyDocumentsRequest());

        fetch(`https://5fca2bc63c1c220016441d27.mockapi.io/myDocuments`, requestOptions)
            .then(response => response.text())
            .then(
                result => {
                    dispatch(get_MyDocumentsSuccess(JSON.parse(result)));
                }
            )
            .catch(error => {
                
                dispatch(get_MyDocumentsFailure(error))
            })

    }
}

// export

