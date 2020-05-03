import { combineReducers } from "redux";
import home_reducer from "./home_reducer"
import document_reducer from "./document_reducer"
import post_reducer from "./post_reducer"
import login_register_reducer from "./login_register_reducer"
var root_reducer = combineReducers({
    home: home_reducer,
    login_register: login_register_reducer,
    post: post_reducer,
    document: document_reducer,
});


export default root_reducer;