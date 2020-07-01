
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
        contentURL: "string",
        tags: [{ tag: "tag1" }, { tag: "tag1" }],
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

const initialState = {
    events: fakePosts.filter(item => item.categoryName === "Sự kiện"),
    posts: fakePosts.filter(item => item.categoryName !== "Sự kiện"),
};

function PostReducer(state = initialState, action) {
    
    switch (action.type) {    
        case "post/like_changed":
            var new_post = state.posts;
            new_post.map((item) => {
                if (item.id === action.id) {
                    item.liked = !item.liked;
                }
            });
            return { ...state, posts: new_post };
        case "post/save_changed":
            new_post = state.posts;
            new_post.map((item) => {
                if (item.id === action.id) {
                    item.saved = !item.saved;
                }
            });
            return { ...state, posts: new_post };
        default:
            return initialState;
    }
}

export default PostReducer;
