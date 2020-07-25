import {
    postGetPostByFilter,
    postGetPostByID,
    postPostLike,
    postPostComment,
    postPostSave,
    delPostUnLike,
} from "../action/PostAction.js";
import { HOST, PORT } from '../constant/index';
import FormData from 'form-data';

export function delUnLike(id) {
    return dispatch => {

    }
}


export function postLike(id) {
    return dispatch => {

    }
}

export function postComment(id, comment) {
    return dispatch => {
    }
}

export function postSave(id) {
    return dispatch => {
    }
}

export function getCommentByID(id) {
    return dispatch => {
        
    }
}

export function getPostByID(id) {
    return dispatch => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`https://${PORT}/posts?id=` + id, requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result);
                dispatch(postGetPostByID(JSON.parse(result)));
            })
            .catch(error => console.log('error', error));
    }
}

export function getPostByFilter(filter) {
    return dispatch => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          fetch(`http://${PORT}/posts?${filter}`, requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(JSON.parse(result));
                dispatch(postGetPostByFilter(JSON.parse(result)));
            })
            .catch(error => console.log('error', error));
    }
}