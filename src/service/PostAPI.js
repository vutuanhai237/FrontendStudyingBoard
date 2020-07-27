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
import { HOST, PORT } from '../constant/index';
import FormData from 'form-data';

export function postPost(post) {
    return dispatch => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({ 
            "title": post.title, 
            "imageURL": post.imageURL, 
            "content": post.content, 
            "submitDate": "Dec 24, 2020 7:00:00 AM", 
            "publishDate": "Dec 29, 2020 7:00:00 AM", 
            "readTime": 0, 
            "likeCount": 0, 
            "numView": 0, 
            "postSoftDeleted": false, 
            "postHidden": false, 
            "postApproved": false, 
            "authorID": post.authorID, 
            "authorName": post.authorName, 
            "categoryID": post.categoryID, 
            "categoryName": post.categoryName, 
            "authorAvatarURL": post.authorAvatarURL, 
            "summary": post.summary, 
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        
        fetch(`http://${PORT}/posts?sessionID=${Cookies.get('JSESSIONID')}`, requestOptions)
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
}





export function postComment(uid, comment) {
    return dispatch => {
    }
}

export function postSave(uid) {
    return dispatch => {
    }
}

export function postUnSave(uid) {
    return dispatch => {
    }
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

