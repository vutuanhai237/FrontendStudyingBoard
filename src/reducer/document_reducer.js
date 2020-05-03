
const fakeDocuments = [
    {
        id: 0,
        url: "/1",
        title: "What the fuck is this",
        summary: "Hello Friends, In this video i am going to show you how to make Heart Falling Animation effects using html, css3 Animation Keyframes property and i use font awesome heart icon. Any questions about this video so please comment or email.",
        authorName: "Hải",
        authorID: 0,
        categoryID: 0,
        categoryName: "Slide",
        subjectID: 0,
        subjectName: "NMLT",
        viewCount: 100,
        downloadCount: 1000,
        publishDate: "21/01/2020",
        imageURL: "https://icdn.dantri.com.vn/thumb_w/640/2020/01/24/00-1579884195136.jpg"
    },
    {
        id: 0,
        url: "/1",
        title: "B",
        summary: "string",
        authorName: "string",
        authorID: 0,
        categoryID: 0,
        categoryName: "string",
        subjectID: 0,
        subjectName: "string",
        viewCount: 0,
        downloadCount: 0,
        publishDate: "string",
        imageURL: "https://icdn.dantri.com.vn/thumb_w/640/2020/01/24/00-1579884195136.jpg"
    },
    {
        id: 0,
        url: "/1",
        title: "C",
        summary: "string",
        authorName: "string",
        authorID: 0,
        categoryID: 0,
        categoryName: "string",
        subjectID: 0,
        subjectName: "string",
        viewCount: 0,
        downloadCount: 0,
        publishDate: "string",
        imageURL: "https://icdn.dantri.com.vn/thumb_w/640/2020/01/24/00-1579884195136.jpg"
    },
]

const initialState = {
    documents: fakeDocuments,
}

function DocumentReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return initialState;
    }
}

export default DocumentReducer;

