import {
    docPostDoc,
    docGetSubjects,
    docGetTopDoc,
    docGetSearchDoc,
    docGetDocByID,
    get_NotApprovedDocumentsList,
    managementGetCurrentPreviewDocument,
    managementApproveADocument,

    //my documents
    get_MyDocumentsRequest,
    get_MyDocumentsSuccess,
    get_MyDocumentsFailure,

    //document search result
    get_DocumentSearchResultRequest,
    get_DocumentSearchResultSuccess,
    get_DocumentSearchResultFailure,



} from "redux/actions/docAction.js";

import {
    HOST,
    PORT
} from 'constants.js';
import FormData from 'form-data';
import Cookies from 'js-cookie';

//upload new document
export function postDoc(doc) {
    return dispatch => {
        var myHeaders = new Headers();
        console.log(doc)
        var formdata = new FormData();
        formdata.append("file", doc.file);
        formdata.append("title", doc.title);
        formdata.append("summary", doc.summary);
        formdata.append("categoryId", doc.categoryID);
        formdata.append("subjectId", doc.subjectID);
        formdata.append("semesterId", doc.semesterID);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        fetch(`http://${PORT}/docs/upload?sessionID=${Cookies.get('JSESSIONID')}`, requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(JSON.parse(result).statusCode);
                dispatch(docPostDoc(JSON.parse(result).statusCode));
            })
            .catch(error => console.log('error', error));
    }
}

export function getSubjects() {
    return dispatch => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`http://${PORT}/subjects`, requestOptions)
            .then(response => response.text())
            .then(result => {
                dispatch(docGetSubjects(JSON.parse(result)));
            })
            .catch(error => console.log('error', error));
        // const result = [categoriesList[19], categoriesList[20], categoriesList[21], categoriesList[22]];
        // dispatch(docGetSubjects(result));

    }
}

export function getTopDoc() {
    return dispatch => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`http://${PORT}/docs/goodDoc?limit=3`, requestOptions)
            .then(response => response.text())
            .then(result => {
                dispatch(docGetTopDoc(JSON.parse(result).shortDocs));
            })
            .catch(error => console.log('error', error));
        // let result = [doc_v1.documentDTO, doc_v2.documentDTO, doc_v3.documentDTO];
        // dispatch(docGetTopDoc(result));
    }
}

export function getSearchDoc(filter) {
    return dispatch => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`http://${PORT}/docs/search?${filter}`, requestOptions)
            .then(response => response.text())
            .then(result => {
                dispatch(docGetSearchDoc(JSON.parse(result).shortDocs));
            })
            .catch(error => console.log('error', error));
    }
}
export function getDocumentByID(id) {
    return dispatch => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`http://${PORT}/docs/detail?id=${id}`, requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result)
                dispatch(docGetDocByID(JSON.parse(result)));
            })
            .catch(error => console.log('error', error));
        // const result = doc_v1;
        // dispatch(docGetDocByID(result));
    }
}


// import FormData from 'form-data';

export function getNotApprovedDocumentsList() {
    return dispatch => {

        // var myHeaders = new Headers();

        // var requestOptions = {
        //     method: 'GET',
        //     headers: myHeaders,
        //     redirect: 'follow'
        // };

        // // fetch(`http://${PORT}/admin/docs/notApproved?sessionID=${Cookies.get('JSESSIONID')}`, requestOptions)
        // //     .then(response => response.text())
        // //     .then(result => {
        // //         console.log(result);
        // //         dispatch(get_NotApprovedDocumentsList(JSON.parse(result).shortDocs))
        // //     })

        // //     .catch(error => console.log('error', error));
        // const result = [doc_v1, doc_v2, doc_v3];
        // dispatch(get_NotApprovedDocumentsList(result));

    }

}

//Code Status: 

export function management_approveADocument(docID) {
    return dispatch => {

        var myHeaders = new Headers();

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        fetch(`http://${PORT}/admin/docs/approved?id =${docID}&sessionID=` + Cookies.get('JSESSIONID'), requestOptions)
            .then(response => response.text())
            .then(
                result => dispatch(managementApproveADocument(JSON.parse(result).shortDocs))
            )
            .catch(error => console.log('error', error));
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

