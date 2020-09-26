import { combineReducers } from "redux";
import HomeReducer from "./HomeReducer"
import DocReducer from "./DocReducer"
import PostReducer from "./PostReducer"
import UserReducer from "./UserReducer"
import management_docReducer from "./management_reducers/management_docReducer"
import management_userReducer from "./management_reducers/management_userReducer"
var RootReducer = combineReducers({
    home: HomeReducer,
    user: UserReducer,
    post: PostReducer,
    doc: DocReducer,
    management_doc: management_docReducer, 
    management_user: management_userReducer
});


export default RootReducer;