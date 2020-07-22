import {
    ADMIN_GET_ALL_NOT_APPROVED_DOCUMENTS,
    ADMIN_GET_CURRENT_NOT_APPROVED_DOCUMENT_DETAIL,
    ADMIN_APPROVE_A_DOCUMENT
} from "../../constant/index"

const requestedDocs = [
    {
        "id": 4,
        "title": "Giai bai toan kho",
        "summary": "tu kho thanh tai",
        "authorName": "phucnh",
        "authorID": 1,
        "categoryID": 2,
        "categoryName": "Slide training",
        "subjectID": 2,
        "subjectName": "L?p trình h??ng ??i t??ng",
        "viewCount": 0,
        "downloadCount": 1
    },
    {
        "id": 9,
        "title": "tai lieu api",
        "summary": "anh em xai tam",
        "authorName": "phucnh",
        "authorID": 1,
        "categoryID": 1,
        "categoryName": "De thi",
        "subjectID": 1,
        "subjectName": "Nh?p môn l?p trình",
        "viewCount": 0,
        "downloadCount": 0,
        "documentPublishDtm": "Jun 29, 2020"
    },
    {
        "id": 10,
        "title": "tai lieu api , test loi lung tung ahiahi",
        "summary": "tien len nao dong bao oi",
        "authorName": "phucnh",
        "authorID": 1,
        "categoryID": 1,
        "categoryName": "De thi",
        "subjectID": 1,
        "subjectName": "Nh?p môn l?p trình",
        "viewCount": 0,
        "downloadCount": 0,
        "documentPublishDtm": "Jul 1, 2020"
    },
    {
        "id": 11,
        "title": "tieu de tai lieu",
        "summary": "sumary tesssstt",
        "authorName": "phucnh",
        "authorID": 1,
        "categoryID": 1,
        "categoryName": "De thi",
        "subjectID": 1,
        "subjectName": "Nh?p môn l?p trình",
        "viewCount": 0,
        "downloadCount": 0,
        "documentPublishDtm": "Jul 13, 2020"
    },
    {
        "id": 12,
        "title": "tieu de tai lieu",
        "authorName": "phucnh",
        "authorID": 1,
        "categoryID": 1,
        "categoryName": "De thi",
        "subjectID": 1,
        "subjectName": "Nh?p môn l?p trình",
        "viewCount": 0,
        "downloadCount": 0,
        "documentPublishDtm": "Jul 13, 2020"
    },
    {
        "id": 13,
        "title": "tieu de tai lieu",
        "authorName": "phucnh",
        "authorID": 1,
        "categoryID": 1,
        "categoryName": "De thi",
        "subjectID": 1,
        "subjectName": "Nh?p môn l?p trình",
        "viewCount": 0,
        "downloadCount": 0,
        "documentPublishDtm": "Jul 13, 2020"
    },
    {
        "id": 14,
        "title": "tieu de tai lieu",
        "authorName": "phucnh",
        "authorID": 1,
        "categoryID": 1,
        "categoryName": "De thi",
        "subjectID": 1,
        "subjectName": "Nh?p môn l?p trình",
        "viewCount": 0,
        "downloadCount": 0,
        "documentPublishDtm": "Jul 13, 2020"
    },
    {
        "id": 15,
        "title": "sieu pham cong nghe",
        "summary": "sumaryne sieu pha luon",
        "authorName": "phucnh",
        "authorID": 1,
        "categoryID": 1,
        "categoryName": "De thi",
        "subjectID": 1,
        "subjectName": "Nh?p môn l?p trình",
        "viewCount": 0,
        "downloadCount": 0,
        "documentPublishDtm": "Jul 14, 2020"
    }
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

