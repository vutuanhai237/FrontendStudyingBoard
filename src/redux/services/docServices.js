import {


    get_NewDocumentsListRequest,
    get_NewDocumentsListSuccess,
    get_NewDocumentsListFailure,

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

import FormData from 'form-data';
import Cookies from 'js-cookie';

//upload new document

export function getTopDoc() {
    return dispatch => {

    }
}

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

export function get_NewDocumentsList() {
    return dispatch => {

        var myHeaders = new Headers();

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        dispatch(get_NewDocumentsListRequest());

        fetch(`https://5fca2bc63c1c220016441d27.mockapi.io/myDocuments`, requestOptions)
            .then(response => response.text())
            .then(
                result => {
                    dispatch(get_NewDocumentsListSuccess(JSON.parse(result)));
                }
            )
            .catch(error => {
                console.log(error);
                dispatch(get_NewDocumentsListFailure(JSON.parse(error))); //
            })
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
                console.log(error);
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
                console.log(error);
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
                console.log(error);
                dispatch(get_MyDocumentsFailure(error))
            })

    }
}

// export

