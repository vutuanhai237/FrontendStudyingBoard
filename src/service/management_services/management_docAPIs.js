import {
    managementGetAllNotApprovedDocuments,
    managementGetCurrentPreviewDocument,
    managementApproveADocument,
    managementGetAllUserDocList
} from "../../action/management_actions/management_docActions";
import { HOST, PORT } from '../../constant/index';
import Cookies from 'js-cookie'

// import FormData from 'form-data';


export function management_getAllNotApprovedDocuments() {
    return dispatch => {

        var myHeaders = new Headers();

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`http://${PORT}/admin/docs/notApproved?sessionID=${Cookies.get('JSESSIONID')}`, requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result);
                dispatch(managementGetAllNotApprovedDocuments(JSON.parse(result).shortDocs))
            })

            .catch(error => console.log('error', error));

    }

}

//Code Status: 
//13 - Permission deny
//14 - Resource Not Found
//15 - Get Resource Successfully
export function management_getCurrentPreviewDocument(previewDoc_ID) {
    return dispatch => {
        let myHeaders = new Headers();

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        console.log("API has been called " + previewDoc_ID);
        fetch(`http://${PORT}/docs/preview?id=${previewDoc_ID}&sessionID=${Cookies.get('JSESSIONID')}`, requestOptions)
            .then(response =>
                response.json())
            .then(result => {
                console.log(result);
                dispatch(managementGetCurrentPreviewDocument(result));
            }
            )
            .catch(error => console.log('error', error));

    }
}


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


export function management_getAllUserDocList(userID) {
    return dispatch => {

        var myHeaders = new Headers();

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        fetch(`http://${PORT}/user/docs?uid=${userID}&approved=1&page=0`, requestOptions)
            .then(response => response.text())
            .then(
                result => dispatch(managementGetAllUserDocList(JSON.parse(result))
                ))
            .catch(error => console.log('error', error))
    }

}



