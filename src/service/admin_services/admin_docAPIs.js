import {
    adminGetAllNotApprovedDocuments,
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