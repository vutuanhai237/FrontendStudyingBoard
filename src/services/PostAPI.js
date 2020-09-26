import {
    postGetSearchPost,
    postGetPostByID,
    postGetPostCommentByID,
    postGetIsLikePostByUID,
    postPostLike,
    postPostComment,
    postPostSave,
    postDelUnLike,
    postGetCategoriesPost,
    postGetPostHighlights,
    postGetPostNewests,
    postGetPostNewActivities,
    postGetTags,
    postPostPost,
} from "actions/PostAction.js";
import {
    HOST,
    PORT
} from 'constants/constants';
import FormData from 'form-data';
import Cookies from 'js-cookie';

//#region Fake data region

export const categoriesList = [ //this fake data contain catefory of all table related to category like semester, subject, ...
    //for post
    {
        "id": 1,
        "categoryName": "Ngôn ngữ lập trình"
    },
    {
        "id": 2,
        "categoryName": "Kiến thức môn học"
    },
    {
        "id": 3,
        "categoryName": "Hỏi đáp"
    },
    {
        "id": 4,
        "categoryName": "Công nghệ mới"
    },
    {
        "id": 5,
        "categoryName": "Hoạt động trang"
    },

    //for doc: categories and year, semester ("Đề thi" only) and subject (redesign)
    {
        "id": 6,
        "categoryName": "Đề thi",
    },
    {
        "id": 7,
        "categoryName": "Khóa luận"
    },
    {
        "id": 8,
        "categoryName": "Giáo trình"
    },
    {
        "id": 9,
        "categoryName": "Sách"
    },
    {
        "id": 10,
        "categoryName": "Slide bài giảng"
    },
    {
        "id": 11,
        "categoryName": "Slide ôn tập"
    },

    //year and semester only for "Đề thi"
    {
        "id": 12,
        "year": "2016 - 2017"
    },
    {
        "id": 13,
        "year": "2017 - 2018"
    },
    {
        "id": 14,
        "year": "2018 - 2019"
    },
    {
        "id": 15,
        "year": "2019 - 2020"
    },
    {
        "id": 16,
        "year": "2020 - 2021"
    },
    {
        "id": 17,
        "semester": "Học kỳ I"
    },
    {
        "id": 18,
        "semester": "Học kỳ II"
    },
    {
        "id": 19,
        "semester": "Học kỳ hè"
    },
    {
        "id": 20,
        "subjectName": "Đại số tuyến tính"
    },

    //about subject: redesign the database 
    {
        "id": 21,
        "subjectName": "Giải tích 1"
    },
    {
        "id": 22,
        "subjectName": "Lập trình hướng đối tượng"
    },
    {
        "id": 23,
        "subjectName": "Nhập môn mạng máy tính"
    },
    {
        "id": 24,
        "subjectName": "Cấu trúc dữ liệu và giải thuật"
    }

]

const tagList = ["C++", "Java", "Cẩm nang", "Lập trình Di động", "Đinh hướng nghề nghiệp", "Than vãn"]

const post_summary_1 = {
    id: "1",
    authorName: "Vũ Tuấn Hải",
    authorID: "Author_1",
    requestedDate: "1/1/2020",
    requestedTime: "13:00",
    requestedCategory: "Ngôn ngữ lập trình",
    requestedCategoryID: "1",
    title: "Thông báo thu học phí bằng C++",
    content: "Chào các bạn sinh viên. Phòng Đào tạo Đại học thông báo đến các bạn sinh viên Quy định về chính sách hỗ trợ công bố khoa học dành cho sinh viên, học viên cao học và nghiên cứu sinh theo link đính kèm",
    imageURL: 'https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg',
    tagList: ["Học phí", "C++"],
    viewCount: 200,
    likeCount: 100,
    commentCount: 31
}

const post_summary_2 = {
    id: "2",
    authorName: "Lưu Biêu Nghị",
    authorID: "Author_2",
    requestedDate: "1/1/2020",
    requestedTime: "17:00",
    requestedCategory: "Kiến thức môn học",
    requestedCategoryID: "2",
    title: "Thông báo nghỉ học bằng C++",
    content: "Chào các bạn sinh viên. Phòng Đào tạo Đại học thông báo đến các bạn sinh viên Quy định về chính sách hỗ trợ công bố khoa học dành cho sinh viên, học viên cao học và nghiên cứu sinh theo link đính kèm",
    imageURL: 'https://blog.hubspot.com/hubfs/types-of-image-files-extensions.jpg',
    tagList: ["Học phí", "C#"],
    viewCount: 2000,
    likeCount: 10,
    commentCount: 30
}

const post_summary_3 = {
    id: "3",
    authorName: "Nguyễn Văn Đông",
    authorID: "Author_3",
    requestedDate: "1/1/2020",
    requestedTime: "17:00",
    requestedCategory: "Công nghệ mới",
    requestedCategoryID: "4",
    title: "Blockchain trong quản lý học phí",
    content: "Chào các bạn sinh viên. Phòng Đào tạo Đại học thông báo đến các bạn sinh viên Quy định về chính sách hỗ trợ công bố khoa học dành cho sinh viên, học viên cao học và nghiên cứu sinh theo link đính kèm",
    imageURL: 'https://cdn.searchenginejournal.com/wp-content/uploads/2019/08/c573bf41-6a7c-4927-845c-4ca0260aad6b-760x400.jpeg',
    tagList: ["Lập trình", "Python"],
    viewCount: 200,
    likeCount: 300,
    commentCount: 51
}

const post_summary_4 = {
    id: "4",
    authorName: "Nguyen Hong Phuc",
    authorID: "Author_4",
    requestedDate: "1/1/2020",
    requestedTime: "17:00",
    requestedCategory: "Hướng dẫn.",
    requestedCategoryID: "Cate_3",
    title: "Hướng dẫn sử dụng MS Team trong quá trình học tập online.",
    content: "Chào các bạn sinh viên. Phòng Đào tạo Đại học thông báo đến các bạn sinh viên Quy định về chính sách hỗ trợ công bố khoa học dành cho sinh viên, học viên cao học và nghiên cứu sinh theo link đính kèm",
    imageURL: 'https://i0.wp.com/office365itpros.com/wp-content/uploads/2019/10/Teams-Custom-Background-Setting.jpg?fit=840%2C439&ssl=1',
    tagList: ["Lập trình", "Python"],
    viewCount: 20,
    likeCount: 30,
    commentCount: 101
}

export const highlightPostResults = [
    post_summary_2, post_summary_3, post_summary_1
]

const allPostsSummary = [
    post_summary_1, post_summary_2, post_summary_3, post_summary_4
]


//isLiked, isSaved and comment may be get from another API
const current_Post_Detail = { //get via GET method.
    "statusCode": 15,
    "statusMessage": "Get resource success!",
    "postDTO": {
        "id": 1,
        "title": "BÀI VIẾT CHO NHỮNG AI ĐÃ, ĐANG VÀ SẼ HỌC GAME!",
        "imageURL": "https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/117301752_157280435980177_534263431605817536_o.png?_nc_cat=104&_nc_sid=730e14&_nc_ohc=sxcWadeT9ZIAX92JGiZ&_nc_ht=scontent-sin6-1.xx&oh=c78228232e9faac37d9627945b6be6b0&oe=5F8536E5",
        "content": `Khi thực hiện series NMPT Game một năm trước, mình gặp rất nhiều khó khăn, và chắc chắn những ai đã, đang và sẽ học Game sẽ cảm nhận được, sau đây là đôi dòng suy nghĩ của mình, một người đã pass Game gửi đến cho những ai sắp học game. Bài viết này là bài nhập môn, khởi động nên hợp với những người yêu thích yếu tố “phi kĩ thuật”.
        Điều đầu tiên là về mục đích của series này. Ngày này năm trước, mình và nhiều bạn cùng lớp đã vượt qua môn game sớm hơn thời gian biểu chuẩn lẫn tỉ lệ qua môn cực kì cao (trong khi đó nhiều người rớt đến 4,5 lần, có những lớp rớt hơn 50% - mình nghe kể lại thôi chứ cũng chưa xác thực bao giờ :v). Với nhiều sinh viên SE, nhắc đến game là sợ vỡ mật nhưng vào thời điểm đó, mình đã từng tin rằng bản thân có thể vượt qua nó nếu như bỏ ra thời gian và công sức xứng đáng (chỉ cho đến khi code framework, thực sự nản, tâm lý chung của mọi người mà!). Đến nay, lý do mình và đồng đội pass có lẽ là tinh thần can đảm code 10 - 12h / ngày trong gần 1 tháng ròng. Người ta thường nói rằng: nếu bạn đi một mình, bạn sẽ tiến rất chậm nhưng nếu đi cùng nhau, bạn sẽ tiến rất xa.
        Dân gian có câu: “Rảnh rỗi sinh nông nổi”, nên sau buổi nhậu mừng pass game, mình nghĩ nên dùng tí văn chương này để viết những bài viết có tâm và đủ kiến thức.
        Tuy nhiên, việc đọc hiểu có lẽ cũng là một thách thức
        Đầu tiên là về chất lượng bài viết, nội dung đầu lúc nào cũng có vẻ dễ thở, nên bài viết có thể viết theo kiểu phóng túng hài hước một chút. Tuy nhiên, càng về sau lượng kiến thức càng dày và khó,. Nếu đọc hết series, các bạn có thể thấy dung lượng bài viết (hay nói cách khác là deadline hàng tuần) càng ngày càng lớn: từ 1500 -> 2000 -> 2500 words. `,
        "submitDate": "Dec 24, 2020 7:00:00 AM",
        "publishDate": "Dec 29, 2020 7:00:00 AM",
        "readTime": "10 phút",
        "likeCount": 30,
        // "numView": numView, => change to viewCount
        "viewCount": 561,
        "postSoftDeleted": false, //don't know
        "postHidden": false,
        "postApproved": true,
        "authorID": 1,
        "authorName": "Nguyen Hong Phuc", // === displayName of this author
        "categoryID": "Hỏi đáp",
        "categoryName": "categoryName",
        "authorAvatarURL": 'https://www.w3schools.',
        "summary": "Khi thực hiện series NMPT Game một năm trước, mình gặp rất nhiều khó khăn, và chắc chắn những ai đã, đang và sẽ học Game sẽ cảm nhận được, ",
        "tags": [tagList[0], tagList[2]],
    }
}

//#endregion

export function postPost(post) {
    return dispatch => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "text/plain");
        var tags = [];
        post.tags.map(item => {
            tags.push(item.tagdetail)
        })

        console.log(tags)
        var raw = JSON.stringify({
            "title": post.title,
            "imageURL": post.imageURL,
            "content": post.content,
            //"submitDate": "Dec 24, 2020 7:00:00 AM", 
            //"publishDate": "Dec 29, 2020 7:00:00 AM", 
            "readTime": post.readTime,
            "likeCount": post.likeCount,
            "numView": post.numView,
            "postSoftDeleted": post.postSoftDeleted,
            "postHidden": post.postHidden,
            "postApproved": post.postApproved,
            "authorID": post.authorID,
            "authorName": post.authorName,
            "categoryID": post.categoryID,
            "categoryName": post.categoryName,
            "authorAvatarURL": post.authorAvatarURL,
            "summary": post.summary,
            "tags": tags,
        });

        var formdata = new FormData();
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        console.log(requestOptions)
        fetch(`http://${PORT}/posts?sessionID=${Cookies.get('JSESSIONID')}`, requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result);
                dispatch(postPostPost(1));
            })
            .catch(error => console.log('error', error));
    }
}

export function postComment(comment) {
    return dispatch => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "content": comment.content,
            "userAvatarURL": comment.userAvatarURL,
            "userID": comment.userID,
            "userName": comment.userName,
            "commentSoftDeleted": false,
            "commentHidden": false,
            "commentApproved": false,
            "parentCommentID": 1,
            "postID": comment.postID,
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`http://${PORT}/postComments?sessionID=${Cookies.get('JSESSIONID')}`, requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result);

            })
            .catch(error => console.log('error', error));
    }
}

export function getTagsByID(pid) {
    return dispatch => {
        var myHeaders = new Headers();

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`http://${PORT}/postTags?postID=${pid}`, requestOptions)
            .then(response => response.text())
            .then(result => {

            })
            .catch(error => console.log('error', error));

        // const result = tagList;
        // dispatch(postGetTags(result));
    }
}

// get highlight post for showing on home page
export function getPostHighlights() {
    return dispatch => {
        var myHeaders = new Headers();
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`http://${PORT}/posts?type=highlights`, requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(JSON.parse(result));
                dispatch(postGetPostHighlights(JSON.parse(result)));
            })
            .catch(error => console.log('error', error));

        // let result = highlightPostResults;
        // dispatch(postGetPostHighlights(result));
    }
}

export function getPostNewActivities() {
    return dispatch => {
        var myHeaders = new Headers();
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`http://${PORT}/posts?type=newActivities`, requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(JSON.parse(result));
                dispatch(postGetPostNewActivities(JSON.parse(result)));
            })
            .catch(error => console.log('error', error));


        // let result = highlightPostResults;
        // dispatch(postGetPostHighlights(result));
    }
}

export function getPostNewests() {
    return dispatch => {
        var myHeaders = new Headers();
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`http://${PORT}/posts?type=newest`, requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(JSON.parse(result));
                dispatch(postGetPostNewests(JSON.parse(result)));
            })
            .catch(error => console.log('error', error));
        // let result = highlightPostResults;
        // dispatch(postGetPostNewests(result));
    }
}

export function delUnlike(uid, pid) {
    return dispatch => {
        var myHeaders = new Headers();

        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`http://${PORT}/likedPosts?userID=${uid}&postID=${pid}`, requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result)
            })
            .catch(error => console.log('error', error));
    }
}


export function postLike(uid, pid) {
    return dispatch => {
        var myHeaders = new Headers();
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`http://${PORT}/likedPosts?userID=${uid}&postID=${pid}`, requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result);
            })
            .catch(error => console.log('error', error));
    }
}

//Lay thong tin xem nguoi dung co ID la uid co dang like bai post co ID la pid khong
export function getIsLikePostByUID(uid, pid) {
    return dispatch => {
        var myHeaders = new Headers();

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`http://${PORT}/likedPosts?userID=${uid}`, requestOptions)
            .then(response => response.text())
            .then(result => {

                const allPostLikeByUID = JSON.parse(result);
                const isLiked = (typeof (allPostLikeByUID.find(e => e === pid))) === 'undefined' ? false : true;
                console.log("Liked: " + isLiked)
                dispatch(postGetIsLikePostByUID(isLiked));
            })
            .catch(error => console.log('error', error));
    }


    // let result = ["1", "3"]; //Nguoi dung hien tai chi like bai post 1 va bai post 3
    // const allPostLikeByUID = result;
    // const isLiked = (typeof (allPostLikeByUID.find(e => e === pid))) === 'undefined' ? false : true;
    // console.log("Liked: " + isLiked)
    // const isLiked = true;
    // dispatch(postGetIsLikePostByUID(isLiked));

}


export function postSave(uid) {
    return dispatch => { }
}

export function postUnSave(uid) {
    return dispatch => { }
}

export function getPostCommentByID(pid) {
    return dispatch => {
        var myHeaders = new Headers();

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`http://${PORT}/postComments?postID=${pid}`, requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(JSON.parse(result))
                dispatch(postGetPostCommentByID(JSON.parse(result)), 1);

            })

            .catch(error => console.log('error', error));
        // let result = [];
        // dispatch(postGetPostCommentByID(result));
    }
}

export function getPostByID(uid, pid) {
    return dispatch => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`http://${PORT}/posts?id=${pid}`, requestOptions)
            .then(response => response.text())
            .then(result => {

                dispatch(postGetPostByID(JSON.parse(result)[0]));
                this.getIsLikePostByUID(uid, pid);
                this.getPostCommentByID(pid);
                this.getTagsByID(pid);
                console.log("Fetch post success!");
            })
            .catch(error => console.log('error', error));
        // let result = current_Post_Detail;
        // dispatch(postGetPostByID(result.postDTO));
        // this.getIsLikePostByUID(uid, pid);
        // this.getPostCommentByID(pid);
        // this.getTagsByID(pid);

    }
}

export function getCategoriesPost() {
    return dispatch => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`http://${PORT}/postCategories`, requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(JSON.parse(result))
                dispatch(postGetCategoriesPost(JSON.parse(result)));
            })
            .catch(error => console.log('error', error));
        // const result = [categoriesList[0], categoriesList[1], categoriesList[2], categoriesList[3], categoriesList[4]];
        // dispatch(postGetCategoriesPost(result));

    }
}


export function getSearchPost(filter) { //this API is also call when open all post link with filter is all
    return dispatch => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`http://${PORT}/posts?${filter}`, requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(`http://${PORT}/posts?${filter}`)
                dispatch(postGetSearchPost(JSON.parse(result)));
            })
            .catch(error => console.log('error', error));
        // let result = allPostsSummary;
        // dispatch(postGetSearchPost(result));

    }
}