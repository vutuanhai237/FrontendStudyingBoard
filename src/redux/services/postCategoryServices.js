import {
    get_PostCategoriesSuccess
} from "redux/actions/postCategoryAction.js";

import {
    PORT
} from '../constants.js';
import FormData from 'form-data';
import Cookies from 'js-cookie';

export function getPostCategories() {
    return dispatch => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`https://5fca2bc63c1c220016441d27.mockapi.io/category`, requestOptions)
            .then(response => response.text())
            .then(result => {

                dispatch(get_PostCategoriesSuccess(JSON.parse(result)));
            })
            .catch(error => console.log('error', error));
        // const result = [categoriesList[0], categoriesList[1], categoriesList[2], categoriesList[3], categoriesList[4]];
        // dispatch(get_PostCategories(result));

    }
}



