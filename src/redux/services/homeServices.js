
import {
    get_TrendingDocumentsListRequest,
    get_TrendingDocumentsListSuccess,
    get_TrendingDocumentsListFailure,

    get_HighlightPostsListRequest,
    get_HighlightPostsListSuccess,
    get_HighlightPostsListFailure,

    get_NewestPostsListRequest,
    get_NewestPostsListSuccess,
    get_NewestPostsListFailure,
    
} from "redux/actions/homeAction.js";

export function getTrendingDocumentsList() {

    return dispatch => {

        var myHeaders = new Headers();

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        dispatch(get_TrendingDocumentsListRequest());

        fetch(`https://5fca2bc63c1c220016441d27.mockapi.io/myDocuments`, requestOptions)
            .then(response => response.text())
            .then(
                result => {
                    dispatch(get_TrendingDocumentsListSuccess(JSON.parse(result)));
                }
            )
            .catch(error => {
                console.log(error);
                dispatch(get_TrendingDocumentsListFailure(JSON.parse(error))); //
            })
    }
}

export function getNewestPostsList() {

    return dispatch => {

        var myHeaders = new Headers();

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        dispatch(get_NewestPostsListRequest());

        fetch(`https://5fca2bc63c1c220016441d27.mockapi.io/myDocuments`, requestOptions)
            .then(response => response.text())
            .then(
                result => {
                    dispatch(get_NewestPostsListSuccess(JSON.parse(result)));
                }
            )
            .catch(error => {
                console.log(error);
                dispatch(get_NewestPostsListFailure(JSON.parse(error))); //
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