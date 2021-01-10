
import {
  get_TagSearchResultRequest,
  get_TagSearchResultSuccess,
  get_TagSearchResultFailure
} from '../actions/tagAction.js'

export function getTagSearchResult(searchTerm = "") {
  return dispatch => {
    dispatch(get_TagSearchResultRequest());

    var myHeaders = new Headers();

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch(`https://5fe871c82e12ee0017ab46ef.mockapi.io/tags`, requestOptions)
      .then(response => response.text())
      .then(
        result => {
          dispatch(get_TagSearchResultSuccess(JSON.parse(result)));
        }
      )
      .catch(error => {
        console.log(error);
        dispatch(get_TagSearchResultFailure(JSON.parse(error))); //
      })
  }
}
