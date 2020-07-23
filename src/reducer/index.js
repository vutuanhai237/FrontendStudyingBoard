import { combineReducers } from "redux";
import HomeReducer from "./HomeReducer"
import DocReducer from "./DocReducer"
import PostReducer from "./PostReducer"
import UserReducer from "./UserReducer"
import admin_docReducer from "./admin_reducers/admin_docReducer"
import admin_userReducer from "./admin_reducers/admin_userReducer"
var RootReducer = combineReducers({
    home: HomeReducer,
    user: UserReducer,
    post: PostReducer,
    doc: DocReducer,
    admin_doc: admin_docReducer, 
    admin_user: admin_userReducer
});


export default RootReducer;