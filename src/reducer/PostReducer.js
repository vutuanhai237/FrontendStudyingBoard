import {
    POST_GET_POST_BY_ID,
    POST_GET_POST_BY_FILTER,
    POST_GET_TOP_POST,
    POST_GET_COMMENT_BY_ID,
} from "../constant/index"
const fakePosts = [
    {
        id: 1,
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
        authorAvatarURL:
            "https://icdn.dantri.com.vn/thumb_w/640/2020/01/24/00-1579884195136.jpg",
        contentURL: '<p><strong>Trung Quốc &ldquo;gồng m&igrave;nh&rdquo; ngăn lũ, c&aacute;c l&aacute;ng giềng ch&acirc;u &Aacute; chung cảnh ngập lụt</strong></p><p>C&aacute;c đợt mưa lớn k&eacute;o d&agrave;i từ cuối th&aacute;ng 5 đ&atilde; khiến nhiều quốc gia ở ch&acirc;u &Aacute; rơi v&agrave;o cảnh ngập lụt, h&agrave;ng triệu người phải sơ t&aacute;n, thiệt hại kinh tế l&ecirc;n đến h&agrave;ng tỷ USD.</p><p><img src="https://icdn.dantri.com.vn/2020/07/20/20200714-t-025615-z-1293354825-rc-2-qsh-93-uqqirtrmadp-3-chinafloods-1595237294600.jpg" /></p>',
        tags: ["tag1", "tag2"],
    },
    {
        id: 2,
        url: "string",
        title: "Hướng dẫn tán gái",
        summary: "Bí kíp tán gái gia truyền 100 năm",
        authorName: "Bác Nông Dân2",
        authorID: 0,
        categoryID: 0,
        categoryName: "Sự kiện",
        readTime: "7 phút",
        likeCount: 100,
        commentCount: 20,
        liked: true,
        saved: true,
        publishDate: "1/2/2020",
        authorAvatarURL:
            "https://icdn.dantri.com.vn/thumb_w/640/2020/01/24/00-1579884195136.jpg",
        contentURL: "string",
        tags: [{ tag: "tag1" }, { tag: "tag1" }],
    },
    {
        id: 3,
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
        authorAvatarURL:
            "https://icdn.dantri.com.vn/thumb_w/640/2020/01/24/00-1579884195136.jpg",
        contentURL: "string",
        tags: [{ tag: "tag1" }, { tag: "tag1" }],
    },
    {
        id: 4,
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
        authorAvatarURL:
            "https://icdn.dantri.com.vn/thumb_w/640/2020/01/24/00-1579884195136.jpg",
        contentURL: "string",
        tags: [{ tag: "tag1" }, { tag: "tag1" }],
    },
    {
        id: 5,
        url: "string",
        title: "Hướng dẫn tán gái",
        summary: "Bí kíp tán gái gia truyền 100 năm",
        authorName: "Bác Nông Dân",
        authorID: 0,
        categoryID: 0,
        categoryName: "Sự kiện",
        readTime: "1000 phút",
        likeCount: 1000000,
        commentCount: 20,
        liked: true,
        saved: true,
        publishDate: "1/2/2020",
        authorAvatarURL:
            "https://icdn.dantri.com.vn/thumb_w/640/2020/01/24/00-1579884195136.jpg",
        contentURL: "string",
        tags: [{ tag: "tag1" }, { tag: "tag1" }],
    },
];
const fakeComment = [
    {
        "id": 0,
        "userID": 0,
        "userName": "Cẩu Nô",
        "userAvatarURL": "https://icdn.dantri.com.vn/thumb_w/640/2020/01/24/00-1579884195136.jpg",
        "content": "Nhớ tiếng ping dồn khi miss midThương mình bỏ tiền cắm sentryDừng chân bám trụ chờ farm nốt Đột ngột từ đâu hook bay ra...",
        "postTimeStamp": "23/7/2020",
        "commentChilds": [
            {
                "id": 0,
                "userID": 0,
                "userName": "Đ",
                "userAvatarURL": "https://icdn.dantri.com.vn/thumb_w/640/2020/01/24/00-1579884195136.jpg",
                "content": "Xàm",
                "postTimeStamp": "2020",
            },
            {
                "id": 0,
                "userID": 0,
                "userName": "CC",
                "userAvatarURL": "https://icdn.dantri.com.vn/thumb_w/640/2020/01/24/00-1579884195136.jpg",
                "content": "Xàm",
                "postTimeStamp": "2020",
            }
        ]
    },
    {
        "id": 1,
        "userID": 0,
        "userName": "Cẩu Nô",
        "userAvatarURL": "https://icdn.dantri.com.vn/thumb_w/640/2020/01/24/00-1579884195136.jpg",
        "content": "Bài post này quá tuyệt vời",
        "postTimeStamp": "23/7/2020",
        "commentChilds": [
            {
                "id": 0,
                "userID": 0,
                "userName": "Đ",
                "userAvatarURL": "https://icdn.dantri.com.vn/thumb_w/640/2020/01/24/00-1579884195136.jpg",
                "content": "Xàm",
                "postTimeStamp": "2020",
            },
            {
                "id": 0,
                "userID": 0,
                "userName": "CC",
                "userAvatarURL": "https://icdn.dantri.com.vn/thumb_w/640/2020/01/24/00-1579884195136.jpg",
                "content": "Xàm",
                "postTimeStamp": "2020",
            }
        ]
    },
]
const initialState = {
    events: [],
    posts: [],
    topPost: [],
    currentPost: fakePosts[0],
    currentComments: fakeComment,
};

function PostReducer(state = initialState, action) {
    switch (action.type) {
        case POST_GET_POST_BY_ID:
            return { ...state, currentPost: action.payload.post };
        case POST_GET_POST_BY_FILTER:
            return { ...state, posts: action.payload.posts };
        case POST_GET_TOP_POST:
            return { ...state, topPost: action.payload.topPost };
        case POST_GET_COMMENT_BY_ID:
            return { ...state, currentComments: action.payload.comments};
        default:
            return state;
    }
}

export default PostReducer;
