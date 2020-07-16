import { combineReducers } from "redux";
import homeReducer from "./homeReducer"
import docReducer from "./docReducer"
import postReducer from "./postReducer"
import userReducer from "./userReducer"
import admin_docReducer from "./admin_reducers/admin_docReducer"
var rootReducer = combineReducers({
    home: homeReducer,
    user: userReducer,
    post: postReducer,
    doc: docReducer,
    admin_doc: admin_docReducer
});


export default rootReducer;