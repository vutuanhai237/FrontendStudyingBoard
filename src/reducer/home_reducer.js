
const fakeTopDoc = [
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
        imageURL: "string"
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
        imageURL: "string"
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
        imageURL: "string"
    },
]



const fakeTopPost = [
    {
        id: 0,
        url: "string",
        title: "Hướng dẫn tán gái",
        summary: "Bí kíp tán gái gia truyền 100 năm",
        authorName: "Bác Nông Dân",
        authorID: 0,
        categoryID: 0,
        categoryName: "Xàm",
        readTime: "7 phút",
        likeCount: 100,
        commentCount: 20,
        liked: true,
        saved: true,
        publishDate: "1/2/2020",
        authorAvatarURL: "string",
        contentURL: "string",
        tags: [
            {tag: "tag1"},
            {tag: "tag1"},
        ]
    },
    {
        id: 0,
        url: "string",
        title: "Hướng dẫn tán gái",
        summary: "Bí kíp tán gái gia truyền 100 năm",
        authorName: "Bác Nông Dân",
        authorID: 0,
        categoryID: 0,
        categoryName: "Xàm",
        readTime: "7 phút",
        likeCount: 100,
        commentCount: 20,
        liked: true,
        saved: true,
        publishDate: "1/2/2020",
        authorAvatarURL: "string",
        contentURL: "string",
        tags: [
            {tag: "tag1"},
            {tag: "tag1"},
        ]
    },
    {
        id: 0,
        url: "string",
        title: "Hướng dẫn tán gái",
        summary: "Bí kíp tán gái gia truyền 100 năm",
        authorName: "Bác Nông Dân",
        authorID: 0,
        categoryID: 0,
        categoryName: "Xàm",
        readTime: "7 phút",
        likeCount: 100,
        commentCount: 20,
        liked: true,
        saved: true,
        publishDate: "1/2/2020",
        authorAvatarURL: "string",
        contentURL: "string",
        tags: [
            {tag: "tag1"},
            {tag: "tag1"},
        ]
    }
]





const initialState = {
    topPosts: fakeTopPost,
    topDocs: fakeTopDoc,
}

function HomeReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return initialState;
    }
}

export default HomeReducer;