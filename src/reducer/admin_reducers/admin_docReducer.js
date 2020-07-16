import {
    ADMIN_GET_ALL_NOT_APPROVED_DOCUMENTS
} from "../../constant/index"
const requestedDocs =
    [
        {
            "id": 60,
            "url": "some text",
            "title": "Ký sự ngày ngủ 5 tiếng",
            "Summary": "some text",
            "authorName": "Tesla",
            "authorID": 33,
            "categoryID": 51,
            "category": "requestedCategory",
            "requestedDate": "requested Date",
            "requestedTime": "12:30:40",
            "contentURL": "contentURL",
            "downCount": 30,
            "viewCount": 50,
            "subject": "Cấu trúc rời rạc",
            "semester": "Học kỳ I",
            "year": "2019 - 2020",

            "tags": [
                "some tag",
                "tag text"
            ]
        },
        {
            "id": 5,
            "url": "some text",
            "title": "Rảnh mà đi đặt tên, làm component đi",
            "Summary": "Chào các bạn sinh viên Phòng Kế hoạch Tài chính Thông báo về việc thu học phí học kỳ 2, năm học 2019-2020, hạn đóng 2040, miễn giảm 200% ...",
            "authorName": "Vu Tuan Hai",
            "authorID": 29,
            "categoryID": 51,
            "category": "requestedCategory",
            "requestedDate": "requested Date",
            "requestedTime": "requested Time",
            "contentURL": "contentURL",
            "downCount": 40,
            "viewCount": 0,
            "subject": "Nhập môn mạch số",
            "semester": "Học kỳ II",
            "year": "2019 - 2020",

            "tags": [
                "tag1",
                "tag2"
            ]
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
    console.log("*Admin doc reducer has been called!");
    // console.log(action.type);
    console.log(action)
    switch (action.type) {
        case ADMIN_GET_ALL_NOT_APPROVED_DOCUMENTS:
            {
                console.log("Admin get all not approved documents payload case has been called");
                return { ...state, requestedDocs: action.payload };
            }
        default:
            {
                // console.log("Admin reducer default case has been called");
                // return { ...state, requestedDocs: action.payload };
                return initialState;
            }
    }
}

export default admin_docReducer;

