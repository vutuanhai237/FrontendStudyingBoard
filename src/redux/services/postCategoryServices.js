import {
    get_PostCategoriesSuccess,
    get_PostCategoriesRequest,
    get_PostCategoriesFailure
} from "redux/actions/postCategoryAction.js";

// import {
//     PORT
// } from '../constants.js';

export function getPostCategories() {
    return dispatch => {

        dispatch(get_PostCategoriesRequest());

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`https://5fca2bc63c1c220016441d27.mockapi.io/category`, requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result);
                dispatch(get_PostCategoriesSuccess(JSON.parse(result)));
            })
            .catch(error => {
                console.log(error);
                dispatch(get_PostCategoriesFailure(error))
            });
     
    }
}



