import {
    ADMIN_GET_ALL_NOT_APPROVED_DOCUMENTS
} from "../../constant/index.js"

export function adminGetAllNotApprovedDocuments(requestedDocs) {
    console.log("Get all not approved docs function has been called!");
    return {
        type: ADMIN_GET_ALL_NOT_APPROVED_DOCUMENTS,
        payload: requestedDocs,
    }
}
