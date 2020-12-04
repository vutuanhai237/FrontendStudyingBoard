import {
    postGetSearchPost,
    postGetPostByID,
    postGetPostCommentByID,
    postGetIsLikePostByUID,
    postGetPostNewests,
    postGetPostNewActivities,
    postPostPost,
    get_HighlightPosts,
    get_PostsList,

    //my post
    get_MyPostsRequest, get_MyPostsSuccess, get_MyPostsFailure
} from "redux/actions/postAction.js";

import {
    HOST,
    PORT
} from 'constants.js';

import FormData from 'form-data';
import Cookies from 'js-cookie';

//#region Fake data region

export const categoriesList = [ //this fake data contain catefory of all table related to category like semester, subject, ...
    //for post
    {
        "id": 1,
        "category": "Ngôn ngữ lập trình"
    },
    {
        "id": 2,
        "category": "Kiến thức môn học"
    },
    {
        "id": 3,
        "category": "Hỏi đáp"
    },
    {
        "id": 4,
        "category": "Công nghệ mới"
    },
    {
        "id": 5,
        "category": "Hoạt động trang"
    },

    //for doc: categories and year, semester ("Đề thi" only) and subject (redesign)
    {
        "id": 6,
        "category": "Đề thi",
    },
    {
        "id": 7,
        "category": "Khóa luận"
    },
    {
        "id": 8,
        "category": "Giáo trình"
    },
    {
        "id": 9,
        "category": "Sách"
    },
    {
        "id": 10,
        "category": "Slide bài giảng"
    },
    {
        "id": 11,
        "category": "Slide ôn tập"
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

const post_v1 = {
    "id": 3,
    "title": "Cách sử dụng SVG trong front end",
    "authorName": "Vu Tuan Hai",
    "publishDtm": "22/12/2020",
    "readingTime": 0,
    "category": "Danh muc 1",
    "summary": "some text",
    "likes": 80,
    "commentCount": 11,
    "authorID": 42,
    "categoryID": 21,
    "imageURL": "some text",
    "likedStatus": true,
    "savedStatus": true
}
const post_v2 = {
    "id": 45,
    "title": "some text",
    "authorName": "some text",
    "publishDtm": "some text",
    "readingTime": 22,
    "category": "some text",
    "summary": "some text",
    "likes": 65,
    "commentCount": 69,
    "authorID": 46,
    "categoryID": 69,
    "imageURL": "some text",
    "likedStatus": true,
    "savedStatus": true
}

const post_v3 = {
    "id": 48,
    "title": "some text",
    "authorName": "some text",
    "publishDtm": "some text",
    "readingTime": 22,
    "category": "some text",
    "summary": "some text",
    "likes": 65,
    "commentCount": 69,
    "authorID": 46,
    "categoryID": 69,
    "imageURL": "some text",
    "likedStatus": true,
    "savedStatus": true
}

const post_v4 = {
    "id": 44,
    "title": "some text",
    "authorName": "some text",
    "publishDtm": "some text",
    "readingTime": 22,
    "category": "some text",
    "summary": "some text",
    "likes": 65,
    "commentCount": 69,
    "authorID": 46,
    "categoryID": 69,
    "imageURL": "some text",
    "likedStatus": true,
    "savedStatus": true
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
            //"publishDtm": "Dec 29, 2020 7:00:00 AM", 
            "readTime": post.readTime,
            "likes": post.likes,
            "numView": post.numView,
            "postSoftDeleted": post.postSoftDeleted,
            "postHidden": post.postHidden,
            "postApproved": post.postApproved,
            "authorID": post.authorID,
            "authorName": post.authorName,
            "categoryID": post.categoryID,
            "category": post.category,
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
export function getHighlightPosts() {
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
                dispatch(get_HighlightPosts(JSON.parse(result)));
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


//#region refactoring 


export function getPostsList(filter) { //this API is also call when open all post link with filter is all
    return dispatch => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        // fetch(`http://${PORT}/posts?${filter}`, requestOptions)
        //     .then(response => response.text())
        //     .then(result => {
        //         console.log(`http://${PORT}/posts?${filter}`)
        //         dispatch(postGetSearchPost(JSON.parse(result)));
        //     })
        //     .catch(error => console.log('error', error));
        let result = [post_v1, post_v2, post_v3, post_v4];
        dispatch(get_PostsList(result));

    }
}

// import Cookies from 'js-cookie'
// import 


// import FormData from 'form-data';
// export function getNotApprovedDocumentsList() {
//     return dispatch => {

//         var myHeaders = new Headers();

//         var requestOptions = {
//             method: 'GET',
//             headers: myHeaders,
//             redirect: 'follow'
//         };

//         // fetch(`http://${PORT}/admin/docs/notApproved?sessionID=${Cookies.get('JSESSIONID')}`, requestOptions)
//         //     .then(response => response.text())
//         //     .then(result => {
//         //         console.log(result);
//         //         dispatch(get_NotApprovedDocumentsList(JSON.parse(result).shortDocs))
//         //     })

//         //     .catch(error => console.log('error', error));
//         const result = [post_v1.documentDTO, post_v2.documentDTO, post_v3.documentDTO, post_v4.documentDTO];
//         dispatch(get_NotApprovedDocumentsList(result));

//     }

// }

// //Code Status: 
// //13 - Permission deny
// //14 - Resource Not Found
// //15 - Get Resource Successfully
// export function management_getCurrentPreviewDocument(previewDoc_ID) {
//     return dispatch => {
//         let myHeaders = new Headers();

//         var requestOptions = {
//             method: 'GET',
//             headers: myHeaders,
//             redirect: 'follow'
//         };
//         console.log("API has been called!");
//         // fetch(`http://${PORT}/docs/preview?id=${previewDoc_ID}&sessionID=${Cookies.get('JSESSIONID')}`, requestOptions)
//         //     .then(response =>
//         //         response.json())
//         //     .then(result => {
//         //         console.log(result);
//         //         dispatch(managementGetCurrentPreviewDocument(result));
//         //     }
//         //     )
//         //     .catch(error => console.log('error', error));
//         const result = post_v4;
//         dispatch(managementGetCurrentPreviewDocument(result));

//     }
// }

// export function management_approveADocument(docID) {
//     return dispatch => {

//         var myHeaders = new Headers();

//         var requestOptions = {
//             method: 'GET',
//             headers: myHeaders,
//             redirect: 'follow'
//         };
//         fetch(`http://${PORT}/admin/docs/approved?id =${docID}&sessionID=` + Cookies.get('JSESSIONID'), requestOptions)
//             .then(response => response.text())
//             .then(
//                 result => dispatch(managementApproveADocument(JSON.parse(result).shortDocs))
//             )
//             .catch(error => console.log('error', error));
//     }

// }

// my post
export function getMyPostsList(page = 1, category = "") { //this API to get all approved document of a specific user.
    return dispatch => {
        dispatch(get_MyPostsRequest());

        var myHeaders = new Headers();
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        // fetch(`https://5fca2bc63c1c220016441d27.mockapi.io/myPosts?page=${page}&category=${category}`, requestOptions)

        fetch(`https://5fca2bc63c1c220016441d27.mockapi.io/myPosts`, requestOptions)
            .then(response => response.text())
            .then(
                result => {
                    dispatch(get_MyPostsSuccess(JSON.parse(result)));
                }
            )
            .catch(error => {
                console.log(error); dispatch(get_MyPostsFailure(error))
            })

        // let result = page === 1 ? [post_v1, post_v2] : [post_v3, post_v4];
        // setTimeout(() =>
        //     dispatch(get_MyPostsSuccess(result)), 2000
        // )
    }
}
