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
} from "../action/PostAction.js";
import {
    HOST,
    PORT
} from '../constant/index';
import FormData from 'form-data';
import Cookies from 'js-cookie';

//#region Fake data region
const post_summary_1 = {
    id: "Post_1",
    authorName: "Vu Tuan Hai",
    authorID: "Author_1",
    requestedDate: "1/1/2020",
    requestedTime: "13:00",
    requestedCategory: "Ngôn ngữ lập trình",
    requestedCategoryID: "Cate_1",
    title: "Thông báo thu học phí bằng C++",
    content: "Chào các bạn sinh viên. Phòng Đào tạo Đại học thông báo đến các bạn sinh viên Quy định về chính sách hỗ trợ công bố khoa học dành cho sinh viên, học viên cao học và nghiên cứu sinh theo link đính kèm",
    imageURL: "https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg",
    tagList: ["Học phí", "C++"],
    viewCount: 200,
    likeCount: 100,
    commentCount: 31
}

const post_summary_2 = {
    id: "Post_2",
    authorName: "Luu Bieu Nghi",
    authorID: "Author_2",
    requestedDate: "1/1/2020",
    requestedTime: "17:00",
    requestedCategory: "Ngôn ngữ lập trình",
    requestedCategoryID: "Cate_1",
    title: "Thông báo nghỉ học bằng C++",
    content: "Chào các bạn sinh viên. Phòng Đào tạo Đại học thông báo đến các bạn sinh viên Quy định về chính sách hỗ trợ công bố khoa học dành cho sinh viên, học viên cao học và nghiên cứu sinh theo link đính kèm",
    imageURL: "https://blog.hubspot.com/hubfs/types-of-image-files-extensions.jpg",
    tagList: ["Học phí", "C#"],
    viewCount: 2000,
    likeCount: 10,
    commentCount: 30
}

const post_summary_3 = {
    id: "Post_3",
    authorName: "Nguyen Van Dong",
    authorID: "Author_3",
    requestedDate: "1/1/2020",
    requestedTime: "17:00",
    requestedCategory: "Ngôn ngữ lập trình",
    requestedCategoryID: "Cate_1",
    title: "Thông báo bằng Python",
    content: "Chào các bạn sinh viên. Phòng Đào tạo Đại học thông báo đến các bạn sinh viên Quy định về chính sách hỗ trợ công bố khoa học dành cho sinh viên, học viên cao học và nghiên cứu sinh theo link đính kèm",
    imageURL: "https://cdn.searchenginejournal.com/wp-content/uploads/2019/08/c573bf41-6a7c-4927-845c-4ca0260aad6b-760x400.jpeg",
    tagList: ["Lập trình", "Python"],
    viewCount: 200,
    likeCount: 300,
    commentCount: 51
}

const post_summary_4 = {
    id: "Post_4",
    authorName: "Nguyen Hong Phuc",
    authorID: "Author_4",
    requestedDate: "1/1/2020",
    requestedTime: "17:00",
    requestedCategory: "Hướng dẫn.",
    requestedCategoryID: "Cate_3",
    title: "Hướng dẫn sử dụng MS Team trong quá trình học tập online.",
    content: "Chào các bạn sinh viên. Phòng Đào tạo Đại học thông báo đến các bạn sinh viên Quy định về chính sách hỗ trợ công bố khoa học dành cho sinh viên, học viên cao học và nghiên cứu sinh theo link đính kèm",
    imageURL: "https://i0.wp.com/office365itpros.com/wp-content/uploads/2019/10/Teams-Custom-Background-Setting.jpg?fit=840%2C439&ssl=1",
    tagList: ["Lập trình", "Python"],
    viewCount: 20,
    likeCount: 30,
    commentCount: 101
}

const highlightPostResults = [
    post_summary_1, post_summary_2, post_summary_3
]

const allPostsSummary = [
    post_summary_1, post_summary_2, post_summary_3, post_summary_4
]

const current_Post_Detail = { //get via GET method.
    "statusCode": 15,
    "statusMessage": "Get resource success!",
    "documentDTO": {
        "id": 1,
        "url": "hehe",
        "title": "title ne",
        "summary": " summatry luom",
        "authorName": "phucnh",
        "authorID": 1,
        "authorAvatar": "avt",
        "categoryID": 1,
        "categoryName": "De thi",
        "subjectID": 1,
        "subjectName": "Nhập môn lập trình",
        "viewCount": 3,
        "downloadCount": 0,
        "fileName": "\"Tên file tài liệu số 1\"",
        "semesterId": 1,
        "semesterName": "HK1 * 2016-2017"
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
                dispatch(postGetTags(JSON.parse(result)));
            })
            .catch(error => console.log('error', error));
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

        // fetch(`http://${PORT}/posts?type=highlights`, requestOptions)
        //     .then(response => response.text())
        //     .then(result => {
        //         console.log(JSON.parse(result));
        // dispatch(postGetPostHighlights(JSON.parse(result)));
        // })
        // .catch(error => console.log('error', error));

        let result = highlightPostResults;
        dispatch(postGetPostHighlights(result));
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

        // fetch(`http://${PORT}/posts?type=newActivities`, requestOptions)
        //     .then(response => response.text())
        //     .then(result => {
        //         console.log(JSON.parse(result));
        //         dispatch(postGetPostNewActivities(JSON.parse(result)));
        //     })
        //     .catch(error => console.log('error', error));


        let result = highlightPostResults;
        dispatch(postGetPostHighlights(result));
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

        // fetch(`http://${PORT}/posts?type=newest`, requestOptions)
        //     .then(response => response.text())
        //     .then(result => {
        //         console.log(JSON.parse(result));
        //         dispatch(postGetPostNewests(JSON.parse(result)));
        //     })
        //     .catch(error => console.log('error', error));
        let result = highlightPostResults;
        dispatch(postGetPostNewests(result));
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

        //     fetch(`http://${PORT}/likedPosts?userID=${uid}`, requestOptions)
        //         .then(response => response.text())
        //         .then(result => {

        //             const allPostLikeByUID = JSON.parse(result);
        //             const isLiked = (typeof (allPostLikeByUID.find(e => e === pid))) === 'undefined' ? false : true;
        //             console.log("Liked: " + isLiked)
        //             dispatch(postGetIsLikePostByUID(isLiked));
        //         })
        //         .catch(error => console.log('error', error));
        // }
        let result = ["Post_1", "Post_3"]; //Nguoi dung hien tai chi like bai post 1 va bai post 3
        const allPostLikeByUID = result;
        const isLiked = (typeof (allPostLikeByUID.find(e => e === pid))) === 'undefined' ? false : true;
        console.log("Liked: " + isLiked)
        dispatch(postGetIsLikePostByUID(isLiked));

    }
}


export function postSave(uid) {
    return dispatch => {}
}

export function postUnSave(uid) {
    return dispatch => {}
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
    }
}

export function getPostByID(uid, pid) {
    return dispatch => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        // fetch(`http://${PORT}/posts?id=${pid}`, requestOptions)
        //     .then(response => response.text())
        //     .then(result => {

        //         dispatch(postGetPostByID(JSON.parse(result)[0]));
        //  this.getIsLikePostByUID(uid, pid);
        //         this.getPostCommentByID(pid);
        //         this.getTagsByID(pid);
        //         console.log("Fetch post success!");
        //     })
        //     .catch(error => console.log('error', error));
        let result = current_Post_Detail;
        postGetPostByID(result);
        this.getIsLikePostByUID(uid, pid);
        this.getPostCommentByID(pid);
        this.getTagsByID(pid);

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
    }
}


export function getSearchPost(filter) {
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
    }
}