import {    //highlight posts 
    get_HighlightPostsListRequest,
    get_HighlightPostsListSuccess,
    get_HighlightPostsListFailure,

    //my post
    get_MyPostsRequest,
    get_MyPostsSuccess,
    get_MyPostsFailure,

    //posts list 
    get_PostsListRequest,
    get_PostsListSuccess,
    get_PostsListFailure,

    //post search result 
    get_PostSearchResultRequest,
    get_PostSearchResultSuccess,
    get_PostSearchResultFailure,
    post_CreatePostRequest,
    post_CreatePostSuccess,
    post_CreatePostFailure,
} from "redux/actions/postAction.js";

import {
    remoteServiceBaseUrl
} from 'utils/httpServices';

export function postCreatePost(data) {
    return dispatch => {
        dispatch(post_CreatePostRequest());

        var requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                //token cac kieu
            },
            redirect: 'follow',
            body: JSON.stringify(data)
        };

        fetch(`${remoteServiceBaseUrl}posts`, requestOptions)
            .then(response => { response.json(); console.log(response); })
            .then(result => {
                console.log(result);
                dispatch(post_CreatePostSuccess(result));
            }
            )
            .catch(error => {
                console.log(error);
                dispatch(post_CreatePostFailure(error)); //
            })
    }
}

//highlight post
export function getHighlightPostsList() {
    return dispatch => {

        dispatch(get_HighlightPostsListRequest());

        var myHeaders = new Headers();
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`https://5fca2bc63c1c220016441d27.mockapi.io/highlight`, requestOptions)
            .then(response => response.text())
            .then(
                result => {
                    dispatch(get_HighlightPostsListSuccess(JSON.parse(result)));
                }
            )
            .catch(error => {
                console.log(error); dispatch(get_HighlightPostsListFailure(error))
            })
    }
}

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
    }
}

//posts list
export function getPostsList(page = 1, category = "", searchTerm = "") {
    return dispatch => {

        dispatch(get_PostsListRequest(page, category, searchTerm));

        var myHeaders = new Headers();
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`https://5fca2bc63c1c220016441d27.mockapi.io/myPosts`, requestOptions)
            .then(response => response.text())
            .then(
                result => {
                    dispatch(get_PostsListSuccess(JSON.parse(result)));
                }
            )
            .catch(error => {
                console.log(error); dispatch(get_PostsListFailure(error))
            })
    }
}

//posts search result
export function getPostSearchResult(page = 1, category = "", searchTerm = "") {
    return dispatch => {
        dispatch(get_PostSearchResultRequest());

        var myHeaders = new Headers();
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`https://5fca2bc63c1c220016441d27.mockapi.io/myPosts`, requestOptions)
            .then(response => response.text())
            .then(
                result => {
                    dispatch(get_PostSearchResultSuccess(JSON.parse(result)));
                }
            )
            .catch(error => {
                console.log(error); dispatch(get_PostSearchResultFailure(error))
            })
    }
}

