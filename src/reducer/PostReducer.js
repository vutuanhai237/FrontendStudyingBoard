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
        contentURL: "<p>H&atilde;y viết g&igrave; đ&oacute;Trong năm 1993, tạp ch&iacute; NY Time xuất bản bộ truyện tranh của Peter Steiner, nội dung l&agrave; về một con ch&oacute; ngồi trước m&aacute;y t&iacute;nh n&oacute;i chuyện với một con ch&oacute; kh&aacute;c, con đầu ti&ecirc;n n&oacute;i,&rdquo;Tr&ecirc;n Internet, kh&ocirc;ng ai biết m&agrave;y l&agrave; ch&oacute;&rdquo;. C&acirc;u truyện n&agrave;y lấy &yacute; tưởng từ sự thật l&agrave; bạn kh&ocirc;ng biết ai đang giao tiếp với m&igrave;nh th&ocirc;ng qua m&aacute;y t&iacute;nh! C&oacute; một con ch&oacute; đang g&otilde; email đầu b&ecirc;n kia, hay một m&aacute;y t&iacute;nh giả dạng con người trong Turing Test, những điều n&agrave;y ho&agrave;n to&agrave;n c&oacute; thể xảy ra.</p>",
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
