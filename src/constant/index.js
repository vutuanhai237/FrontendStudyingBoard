//#region general constant

//#region general config
// global
export const HOST = "bhtweb.herokuapp.com"
export const PORT = "localhost:8080/bhtweb"
export function redirect(url) {
    const createHistory = require("history").createBrowserHistory;
    let history = createHistory();
    history.push(url);
    let pathUrl = window.location.href;
    window.location.href = pathUrl;
}
//#endregion

// home
export const HOME_GET_TOP_DOC = "HOME_GET_TOP_DOC";
export const HOME_GET_TOP_DOCUMENT = "HOME_GET_TOP_DOCUMENT";
export const HOME_GET_ACCOUNT_INFO = "HOME_GET_ACCOUNT_INFO";

// doc
//// 1. For writer
export const DOC_POST_DOC = "DOC_POST_DOC";
export const DOC_GET_CATEGORIES_DOC = "DOC_GET_CATEGORIES_DOC";
export const DOC_GET_SUBJECTS = "DOC_GET_SUBJECTS";
export const DOC_GET_SEMESTERS = "DOC_GET_SEMESTERS";
//// 2. For reader
export const DOC_POST_UP_VIEW_DOC = "DOC_POST_UP_VIEW_DOC";
export const DOC_POST_UP_DOWNLOAD_DOC = "DOC_POST_UP_DOWNLOAD_DOC";
export const DOC_GET_TOP_DOC = "DOC_GET_TOP_DOC";
export const DOC_GET_SEARCH_DOC = "DOC_GET_SEARCH_DOC";
export const DOC_GET_DOC_BY_ID = "DOC_GET_DOC_BY_ID";

// post
//// 1. For writer
export const POST_POST_POST = "POST_POST_POST";
export const POST_GET_CATEGORY_POST = "POST_GET_CATEGORY_POST";
export const POST_GET_HASHTAG = "POST_GET_HASHTAG";

//// 2. For reader
export const POST_POST_LIKE = "POST_POST_LIKE_POST";
export const POST_POST_SAVE = "POST_POST_COMMENT_POST";
export const POST_POST_COMMENT = "POST_POST_COMMENT_POST";
export const POST_GET_POST_BY_FILTER = "POST_GET_POST_BY_FILTER";
export const POST_GET_TOP_POST = "POST_GET_TOP_POST";
export const POST_GET_POST_BY_ID = "POST_GET_POST_BY_ID";

export const POST_GET_COMMENT_BY_ID = "POST_GET_COMMENT_BY_ID";

//resource string manage
export const STR_LOGOUT_VN = "Đăng xuất"
export const STR_LOGOUT_EN = "Logout"

// user
export const USER_POST_LOGIN = "USER_POST_LOGIN";
export const USER_POST_REGISTER = "USER_POST_REGISTER";
export const USER_GET_CURRENT_USER = "USER_GET_CURRENT_USER";
export const USER_GET_LOGOUT = "USER_GET_LOGOUT";
//#endregion 

//#region admin exclusive constant

//for document
export const ADMIN_GET_ALL_NOT_APPROVED_DOCUMENTS = "ADMIN_GET_ALL_NOT_APPROVED_DOCUMENTS";
export const ADMIN_GET_CURRENT_NOT_APPROVED_DOCUMENT_DETAIL = "ADMIN_GET_CURRENT_NOT_APPROVED_DOCUMENT_DETAIL";
export const ADMIN_APPROVE_A_DOCUMENT = "ADMIN_APPROVE_A_DOCUMENT";

//for user
export const ADMIN_GET_ALL_USERS = "ADMIN_GET_ALL_USERS"
export const ADMIN_GET_ALL_ROLES = "ADMIN_GET_ALL_ROLES"
// export const ADMIN_

//#endregion



