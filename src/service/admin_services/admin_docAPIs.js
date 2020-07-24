import {
    adminGetAllNotApprovedDocuments,
    adminGetCurrentNotApprovedDocumentDetail,
    adminApproveADocument
} from "../../action/admin_actions/admin_docActions";
import { HOST, PORT } from '../../constant/index';
import Cookies from 'js-cookie'

// import FormData from 'form-data';


export function admin_getAllNotApprovedDocuments() {
    return dispatch => {

        var myHeaders = new Headers();

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`http://${HOST}/admin/docs/notApproved;jsessionid=` + Cookies.get('JSESSIONID'), requestOptions)
            .then(response => response.text())
            .then(
                result => dispatch(adminGetAllNotApprovedDocuments(JSON.parse(result).shortDocs))
            )
            .catch(error => console.log('error', error));
    }

}

//Code Status: 
//13 - Permission deny
//14 - Resource Not Found
//15 - Get Resource Successfully
export function admin_getCurrentNotApprovedDocumentDetail(previewDoc_ID) {
    return dispatch => {
        let myHeaders = new Headers();
 
        console.log(previewDoc_ID);
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`http://${HOST}/docs/preview?id=${previewDoc_ID};jsessionid=` + Cookies.get('JSESSIONID'), requestOptions)
            .then(response =>
                response.json())
            .then(
                result => {
                    console.log("2 Stage");
                    dispatch(adminGetCurrentNotApprovedDocumentDetail(result.shortDocs))
                    // console.log(result)
                }
            )
            .catch(error => console.log('error', error));
    }

}


export function admin_approveADocument() {
    return dispatch => {

        var myHeaders = new Headers();

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`http://${HOST}/admin/docs/notApproved;jsessionid=` + Cookies.get('JSESSIONID'), requestOptions)
            .then(response => response.text())
            .then(
                result => dispatch(adminApproveADocument(JSON.parse(result).shortDocs))
            )
            .catch(error => console.log('error', error));
    }

}

export function admin_getAllUsers() {

}